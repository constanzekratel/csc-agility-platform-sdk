/*
 * Copyright (C) 2017 Computer Science Corporation
 * All rights reserved.
 *
 */
package com.servicemesh.agility.distributed.impl;

import java.util.HashSet;
import java.util.Set;
import java.util.SortedSet;

import org.apache.log4j.Logger;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.util.tracker.ServiceTracker;

import com.servicemesh.agility.distributed.node.DistributedNode;
import com.servicemesh.agility.distributed.node.IDistributedListener;
import com.servicemesh.agility.distributed.sync.DistributedConfig;
import com.servicemesh.agility.distributed.sync.ZNodeName;

/**
 * Class responsible for processing the agility leader election
 */
public class DistributedNodeProcessor
{
    private static Logger logger = Logger.getLogger(DistributedNodeProcessor.class);
    private Watcher distributedNodeWatcher;
    private BundleContext _context;
    private ServiceTracker _listeners;
    private String watchedNodePath;

    public DistributedNodeProcessor(BundleContext context, ServiceTracker listeners)
    {
        distributedNodeWatcher = new DistributedNodeWatcher();
        _context = context;
        _listeners = listeners;
    }

    public void process() throws Exception
    {
        String nodeID = DistributedNode.getID();

        // Create the parent path /agility/node
        DistributedConfig.create(DistributedNode.ZKPATH, CreateMode.PERSISTENT);

        // Create the node path as /agility/node/<uuid>-<sequential_id>
        // The sequential_id is a monotonically increasing number assigned by zookeeper
        String nodePath = DistributedNode.ZKPATH + "/" + nodeID + "-";
        DistributedConfig.create(nodePath, CreateMode.EPHEMERAL_SEQUENTIAL);

        executeLeaderElection();
    }

    private void executeLeaderElection() throws Exception
    {
        try
        {
            String thisNodeId = DistributedNode.getID();

            logger.info("This node id: " + thisNodeId);

            StringBuilder msg = new StringBuilder("Active cluster nodes: ");
            SortedSet<ZNodeName> sortedNodes = DistributedConfig.getSortedChildren(DistributedNode.ZKPATH);
            Set<String> uuids = new HashSet<String>();
            for (ZNodeName name : sortedNodes)
            {
                uuids.add(name.getPrefix());
                msg.append(name.getPrefix());
                msg.append(" ");
            }
            logger.info(msg.toString());

            boolean newLeader = false;

            // From the list of sorted nodes, grab the first from the set and if it matches
            // this node's id then we'l set this as the leader.  Otherwise, find the node in the set just
            // before this node's id and put a zookeeper watcher on that
            String leaderId = DistributedConfig.getFirstChild(DistributedNode.ZKPATH).getPrefix();
            if (thisNodeId.equals(leaderId))
            {
                logger.info("This cluster node elected as leader with Id: " + leaderId);
                DistributedNode.setLeaderID(leaderId);
                newLeader = true;
            }
            else
            {
                Object[] childNodesArray = sortedNodes.toArray();
                for (int index = 0; index < childNodesArray.length; index++)
                {
                    ZNodeName childNode = (ZNodeName) childNodesArray[index];
                    if (thisNodeId.equals(childNode.getPrefix()))
                    {
                        String watchedNodeShortPath = ((ZNodeName) childNodesArray[index - 1]).getName();
                        watchedNodePath = DistributedNode.ZKPATH + "/" + watchedNodeShortPath;

                        logger.info("Putting a zookeeper watcher on " + watchedNodePath + " from node " + thisNodeId);
                        DistributedConfig.watchNode(watchedNodePath, distributedNodeWatcher);
                    }
                }
            }

            // If this node got elected as leader then got ahead and execute all the registered
            // IDistributedListener services that are supposed to only be running under the leader.
            ServiceReference[] services = _listeners.getServiceReferences();
            if (services != null)
            {
                if (newLeader)
                {
                    logger.info(
                            "Starting the distributed listener services on this node");
                    for (ServiceReference sref : services)
                    {
                        IDistributedListener listener = (IDistributedListener) _context.getService(sref);
                        logger.info("Distributing listener node changed for " + listener.getClass().getSimpleName());
                        listener.nodesChanged(leaderId, uuids);
                        _context.ungetService(sref);
                    }
                }
            }
        }
        catch (Throwable t)
        {
            logger.error(t);
        }
    }

    /**
     * Class that implements that zookeeper Watcher interface. Its responsibility is to processes the events from the node being
     * watched.
     */
    public class DistributedNodeWatcher implements Watcher
    {
        private BundleContext _context;
        private ServiceTracker _listeners;

        @Override
        public void process(WatchedEvent event)
        {
            // Only in the case of a delete of a node the election logic should be executed.
            // We need to either assign this as the leader if the current leader got deleted,
            // or we need to update the node we are watching, if the currently watched node
            // was the one that was deleted.
            if (event.getType() == Watcher.Event.EventType.NodeDeleted)
            {
                if (event.getPath().equalsIgnoreCase(watchedNodePath))
                {
                    try
                    {
                        executeLeaderElection();
                    }
                    catch (Throwable t)
                    {
                        logger.error(t);
                    }
                }
            }

        }

    }

}

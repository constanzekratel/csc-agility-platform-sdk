/*
 * Copyright (C) 2017 Computer Science Corporation
 * All rights reserved.
 *
 */
package com.servicemesh.agility.distributed.node;

import java.net.Inet4Address;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;

import com.servicemesh.agility.distributed.sync.DistributedConfig;
import com.servicemesh.agility.distributed.sync.UIDGenerator;
import com.servicemesh.agility.distributed.sync.ZNodeName;

public class DistributedNode
{
    private static final Logger logger = Logger.getLogger(DistributedNode.class);
    final public static String ZKPATH = "/agility/node";

    private static String _nodeID;
    private static String _address;

    /**
     * Returns the ID of the node. A node ID is a combination of a unique uuid and the address of the node (i.e.
     * {uuid}-{address}).
     *
     * @return ID of the node
     */
    public static String getID()
    {
        if (_nodeID == null)
        {
            //Respect if NODE_ID property is defined as a system property.
            //If not, then use the system environment to find the property.
            String id = System.getProperty("NODE_ID");
            if (id == null)
            {
                Map<String, String> env = System.getenv();
                id = env.get("NODE_ID");
            }

            if (id == null || id.isEmpty())
            {
                _nodeID = UIDGenerator.generateUID() + "-" + getNodeAddress();
            }
            else
            {
                _nodeID = id + "-" + getNodeAddress();
            }
        }
        return _nodeID;
    }

    /**
     * Returns the address of this node.
     *
     * @return Address of the node
     */
    public static String getNodeAddress()
    {
        try
        {
            if (_address == null)
            {
                _address = Inet4Address.getLocalHost().getHostAddress();
            }
        }
        catch (UnknownHostException ex)
        {
            logger.error("Unable to get Node address", ex);
        }
        return _address;
    }

    /**
     * Returns the leader ID.
     *
     * @return The ID of the leader node
     */
    public static String getLeaderID()
    {
        try
        {
            ZNodeName nodeName = DistributedConfig.getFirstChild(DistributedNode.ZKPATH);
            if (nodeName != null)
            {
                return nodeName.getPrefix();
            }
            else
            {
                logger.warn("The Leader ID cannot be determined because the nodeName is null.  Using path '" + 
                            DistributedNode.ZKPATH + "' did not return children.");
            }
        }
        catch (Exception ex)
        {
            logger.error(ex.getMessage(), ex);
        }
        return null;
    }

    /**
     * Returns the leader address.
     *
     * @return The address of the leader node
     */
    public static String getLeaderAddress()
    {
        String leaderID = getLeaderID();
        String nodeAddress = null;

        if (leaderID != null)
        {
            int index = leaderID.lastIndexOf("-");
            nodeAddress = leaderID.substring(index + 1);
        }
        else
        {
            logger.warn("The Leader ID is null.  Cannot compute node address.");
        }
        
        return nodeAddress;
    }

    /**
     * Determines if this node is the leader node.
     *
     * @return True if this node is the leader, false otherwise
     */
    public static boolean isLeader()
    {
        String leader = getLeaderID();
        return (leader != null && _nodeID.equals(leader));
    }

    /**
     * Get the list of all nodes by ID.
     *
     * @return List of nodes
     * @throws Exception
     */
    public static Set<String> getInstances() throws Exception
    {
        List<String> paths = DistributedConfig.getChildren(ZKPATH);
        Set<String> nodes = new HashSet<String>();
        for (String path : paths)
        {
            nodes.add(getNodeID(path));
        }
        return nodes;
    }

    /**
     * Get the list of all nodes by address.
     *
     * @return List of nodes
     * @throws Exception
     */
    public static List<String> getInstancesByAddress() throws Exception
    {
        List<String> paths = DistributedConfig.getChildren(ZKPATH);
        List<String> nodes = new ArrayList<String>();
        for (String path : paths)
        {
            nodes.add(getNodeAddress(path));
        }
        return nodes;
    }

    /**
     * Get the list of all nodes by zookeeper node path.
     *
     * @return List of nodes
     * @throws Exception
     */
    public static List<String> getInstancesByPath() throws Exception
    {
        List<String> paths = DistributedConfig.getChildren(ZKPATH);
        return paths;
    }

    /**
     * Take a zookeeper path in the form of /agility/node/{uuid}-{address}-{sequential_id} and parses it to return the
     * {uuid}-{address} (ID of the node).
     *
     * @param zkPath
     *            Zookeeper path
     * @return
     */
    public static String getNodeID(String zkPath)
    {
        int index = zkPath.lastIndexOf("/");
        String nodeID = zkPath.substring(index + 1);
        index = nodeID.lastIndexOf("-");
        return nodeID.substring(0, index);
    }

    /**
     * Take a zookeeper path in the form of /agility/node/{uuid}-{address}-{sequential_id} and parses it to return the address
     *
     * @param zkPath
     *            Zookeeper path
     * @return
     */
    public static String getNodeAddress(String zkPath)
    {
        int index = zkPath.lastIndexOf("/");
        String pathChild = zkPath.substring(index + 1);

        index = pathChild.lastIndexOf("-");
        String nodeId = pathChild.substring(0, index);

        index = nodeId.lastIndexOf("-");
        String nodeAddress = nodeId.substring(index + 1);

        return nodeAddress;
    }

}

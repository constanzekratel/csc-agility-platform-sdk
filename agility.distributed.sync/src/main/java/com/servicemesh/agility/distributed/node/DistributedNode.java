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
import java.util.Set;

import org.apache.log4j.Logger;

import com.servicemesh.agility.distributed.sync.DistributedConfig;
import com.servicemesh.agility.distributed.sync.UIDGenerator;

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
            _nodeID = UIDGenerator.generateUID() + "-" + getNodeAddress();
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
            return DistributedConfig.getFirstChild(DistributedNode.ZKPATH).getPrefix();
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

        int index = leaderID.lastIndexOf("-");
        String nodeAddress = leaderID.substring(index + 1);

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

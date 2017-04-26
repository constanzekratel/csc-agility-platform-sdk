package com.servicemesh.agility.distributed.node;

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

    private static String _nodeID = UIDGenerator.generateUID();

    public static String getID()
    {
        return _nodeID;
    }

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

    public static boolean isLeader()
    {
        String leader = getLeaderID();
        return (leader != null && _nodeID.equals(leader));
    }

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

    public static String getNodeID(String path)
    {
        int index = path.lastIndexOf("/");
        String nodeID = path.substring(index + 1);
        index = nodeID.lastIndexOf("-");
        return nodeID.substring(0, index);
    }

}

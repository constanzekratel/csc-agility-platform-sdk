package com.servicemesh.agility.distributed.impl;

import java.util.Map;

import org.apache.log4j.Logger;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.util.tracker.ServiceTracker;

import com.servicemesh.agility.distributed.node.IDistributedListener;

public class Activator implements BundleActivator
{

    private final static Logger logger = Logger.getLogger(Activator.class);
    private ServiceTracker _listenerTracker;
    private DistributedNodeProcessor pNode;

    public Activator()
    {
    }

    @Override
    public void start(BundleContext context) throws Exception
    {
        try
        {
            Map<String, String> env = System.getenv();
            String leaderElectionParticipation = env.get("LEADER_ELECTION_PARTICIPATION");
            if (leaderElectionParticipation != null && leaderElectionParticipation.equalsIgnoreCase("true"))
            {
                _listenerTracker =
                        new ServiceTracker(context, IDistributedListener.class.getName(),
                                new DistributedListenerTracker(context));
                _listenerTracker.open();

                pNode = new DistributedNodeProcessor(context, _listenerTracker);
                pNode.process();
            }
        }
        catch (Throwable t)
        {
            logger.error(t);
        }
    }

    @Override
    public void stop(BundleContext arg0) throws Exception
    {

    }

}

package com.servicemesh.agility.api.service;

import com.servicemesh.agility.api.LaunchItemDeployment;
import com.servicemesh.agility.api.Task;

public interface ILaunchItemDeployment extends IWorkflow<LaunchItemDeployment>
{

    /**
     * Deploys launch item
     *
     * @param deployment
     * @param start
     *            optionally starts the deployment.
     * @return returns task which can be used query for deployed launch item in Task.result field.
     * @throws Exception
     */
    @Deprecated
    public Task deploy(LaunchItemDeployment deployment, boolean start) throws Exception;

    public LaunchItemDeployment deployment(LaunchItemDeployment item, boolean start) throws Exception;

    public String setFreezeUntil(int id, String freezeUntil, Context context) throws Exception;
    
    /*
     * Support a method for doing all the deployment/property checks, read the configured timeout
     * and set the freeze, if supported.  This will be called from the Topology.start() and by
     * any custom action policies that need to lock the subscription.
     */
    public void checkAndLock(int launchItemDeployment_id) throws Exception;

}

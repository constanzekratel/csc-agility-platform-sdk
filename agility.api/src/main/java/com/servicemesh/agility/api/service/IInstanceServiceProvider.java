/** Copyright (c) 2008-2013 ServiceMesh, Incorporated; All Rights Reserved
*  Copyright (c) 2013-Present Computer Sciences Corporation
*
*                        ALL RIGHTS RESERVED.
*                   CONFIDENTIAL AND PROPRIETARY.
*
*  ALL SOFTWARE, INFORMATION AND ANY OTHER RELATED COMMUNICATIONS
*  (COLLECTIVELY, "WORKS") ARE CONFIDENTIAL AND PROPRIETARY INFORMATION THAT
*  ARE THE EXCLUSIVE PROPERTY OF COMPUTER SCIENCES CORPORATION.
*  ALL WORKS ARE PROVIDED UNDER THE APPLICABLE AGREEMENT OR END USER LICENSE
*  AGREEMENT IN EFFECT BETWEEN YOU AND COMPUTER SCIENCES CORPORATION.  UNLESS OTHERWISE SPECIFIED
*  IN THE APPLICABLE AGREEMENT, ALL WORKS ARE PROVIDED "AS IS" WITHOUT WARRANTY
*  OF ANY KIND EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
*  IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
*  ALL USE, DISCLOSURE AND/OR REPRODUCTION OF WORKS NOT EXPRESSLY AUTHORIZED BY
*  COMPUTER SCIENCES CORPORATION IS STRICTLY PROHIBITED.
*/
package com.servicemesh.agility.api.service;

import com.servicemesh.agility.api.ServiceProvider;
import com.servicemesh.agility.api.Task;

/**
 * Exposes operations used to register/unregister a Network Service (i.e. Remote Collector, Proxy).
 */
public interface IInstanceServiceProvider
{

    /**
     * Register a Network Service associated to an Instance.
     *
     * @param uuid
     *            UUID assigned to the Instance
     * @param type
     *            Service Provider type
     * @return The registered service
     * @throws Exception
     */
    public ServiceProvider registerService(String uuid, String type) throws Exception;

    /**
     * Unregister a Network Service associated to an Instance.
     *
     * @param uuid
     *            UUID assigned to the Instance
     * @param type
     *            Service Provider type
     * @return A task handle that can be polled for task completion
     * @throws Exception
     */
    public Task unregisterService(String uuid, String type) throws Exception;

}

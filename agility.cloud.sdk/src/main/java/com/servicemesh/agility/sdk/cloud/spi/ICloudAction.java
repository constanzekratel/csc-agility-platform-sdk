package com.servicemesh.agility.sdk.cloud.spi;

import com.servicemesh.agility.sdk.cloud.msgs.CloudActionRequest;
import com.servicemesh.agility.sdk.cloud.msgs.CloudResponse;
import com.servicemesh.core.async.ResponseHandler;

public interface ICloudAction 
{
	public ICancellable executeAction(CloudActionRequest request, ResponseHandler<CloudResponse> handler);
}

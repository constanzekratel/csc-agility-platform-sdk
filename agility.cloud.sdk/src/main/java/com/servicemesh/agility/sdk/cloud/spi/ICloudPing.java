package com.servicemesh.agility.sdk.cloud.spi;

import com.servicemesh.agility.sdk.cloud.msgs.CloudPingRequest;
import com.servicemesh.agility.sdk.cloud.msgs.CloudResponse;
import com.servicemesh.core.async.ResponseHandler;

public interface ICloudPing {
	
	public ICancellable pingCloud(CloudPingRequest request, ResponseHandler<CloudResponse> handler);

}

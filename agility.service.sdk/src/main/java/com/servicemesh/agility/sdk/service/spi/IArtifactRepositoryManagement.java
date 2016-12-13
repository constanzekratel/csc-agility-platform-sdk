package com.servicemesh.agility.sdk.service.spi;

import com.servicemesh.agility.sdk.service.msgs.DownloadArtifactRequest;
import com.servicemesh.agility.sdk.service.msgs.DownloadArtifactResponse;
import com.servicemesh.agility.sdk.service.msgs.GetAllArtifactsRequest;
import com.servicemesh.agility.sdk.service.msgs.GetAllArtifactsResponse;
import com.servicemesh.core.async.Promise;

/**
 * The interface which describes the list of operations implemented by the artifactory adapter
 */
public interface IArtifactRepositoryManagement
{

    public Promise<GetAllArtifactsResponse> getAllArtifacts(GetAllArtifactsRequest request);

    public Promise<DownloadArtifactResponse> downloadArtifacts(DownloadArtifactRequest request);

}

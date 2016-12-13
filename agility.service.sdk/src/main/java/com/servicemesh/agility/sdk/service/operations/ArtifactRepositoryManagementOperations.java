package com.servicemesh.agility.sdk.service.operations;

import com.servicemesh.agility.sdk.service.msgs.DownloadArtifactRequest;
import com.servicemesh.agility.sdk.service.msgs.DownloadArtifactResponse;
import com.servicemesh.agility.sdk.service.msgs.GetAllArtifactsRequest;
import com.servicemesh.agility.sdk.service.msgs.GetAllArtifactsResponse;
import com.servicemesh.agility.sdk.service.spi.IArtifactRepositoryManagement;
import com.servicemesh.core.async.Promise;

/**
 * The list of operations which interact with the artifactory adapter
 */
public abstract class ArtifactRepositoryManagementOperations implements IArtifactRepositoryManagement
{

    @Override
    public abstract Promise<GetAllArtifactsResponse> getAllArtifacts(GetAllArtifactsRequest request);

    @Override
    public abstract Promise<DownloadArtifactResponse> downloadArtifacts(DownloadArtifactRequest request);

}

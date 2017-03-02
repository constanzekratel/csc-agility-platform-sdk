package com.servicemesh.agility.api.service;

import java.util.List;

import com.servicemesh.agility.api.ArtifactBinaries;
import com.servicemesh.agility.api.ArtifactBuilds;
import com.servicemesh.agility.api.ServiceProvider;
import com.servicemesh.agility.api.Task;

/**
 * Exposes operations for the Artifactory Adapter
 */
public interface IArtifactRepository
{

    /**
     * Return the list of all artifacts for this repository
     *
     * @param serviceProviderId
     * @param repositoryPath
     * @throws Exception
     */
    public ArtifactBinaries getAllArtifacts(int serviceProviderId, String repositoryPath) throws Exception;

    /**
     * Return the list of all service providers of for an artifact
     *
     * @throws Exception
     */
    public List<ServiceProvider> getArtifactServiceProviders() throws Exception;

    /**
     * Publish artifact meta data to agility
     *
     * @param artifactBinary
     * @throws Exception
     */
    public Task publishArtifactMetadata(ArtifactBinaries artifactBinaries) throws Exception;

    /**
     * Return the artifact
     *
     * @param serviceProviderId
     * @param repoPath
     * @throws Exception
     */
    public byte[] downloadArtifacts(int serviceProviderId, String repoPath) throws Exception;

    /**
     * Return the list of builds of an artifact
     *
     * @param artifactId
     * @throws Exception
     */
    public ArtifactBuilds getBuildsOfAnArtifact(int artifactId) throws Exception;
}

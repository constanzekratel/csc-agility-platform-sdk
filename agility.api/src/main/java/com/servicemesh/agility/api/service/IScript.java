package com.servicemesh.agility.api.service;

import com.servicemesh.agility.api.Script;
import com.servicemesh.agility.api.Task;

public interface IScript
{
	/**
	 * Delete all versions of a Script
	 * 
	 * @param Script A version of the Script
	 * @return Task A Task resource that can be monitored for complettion
	 * @throws Exception
	 */
	public Task deleteAllVersions(Script script) throws Exception;

}

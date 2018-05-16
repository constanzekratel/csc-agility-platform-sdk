define({"0":{i:0.00808823555791094,u:"../Content/Services/AboutServiceSDK.htm",a:"The service framework provides an integration path to any external service required by an application or the infrastructure on which it is deployed, such as the following examples: Database as a service (DBaaS) Messaging load balancer as a service (LBaaS) IP address management (IPAM) Domain name ...",t:"Service Framework Overview"},"1":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkCoreConcepts.htm",a:"Before you begin your service adapter development project, we recommend that you familiarize yourself with the following core concepts: Service A service defines an integration with an external, cloud-based system that can be used by an application or deployment infrastructure. A defined application ...",t:"Service Framework Core Concepts"},"2":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkServiceAdapters.htm",a:"DXC Technology provides the Services SDK so that you can build cloud service adapters that adhere to an asynchronous model. With the asynchronous model, the processing follows two guidelines for building an asynchronous service adapter. The Agility Platform sends commands as asynchronous messages. ...",t:"Service Adapters"},"3":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkOSGiBundles.htm",a:"Service adapters created for the Agility Platform Services SDK are distributed and deployed as OSGi bundles. The following naming convention is used: com.\u003cvendor\u003e.agility.adapters.service.\u003cservicetype\u003e.\u003cversion\u003e.jar The convention for the version number is Vmajor.Vminor.Vpatch The Services SDK ...",t:"OSGi Bundles for Service Adapters"},"4":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkSDKPackages.htm",a:"Service adapters have dependencies on the following OSGi bundles that are distributed with the Agility Platform.  com.servicemesh.core.\u003ccore-version\u003e.jar - Base asynchronous reactor and messaging framework com.servicemesh.io.\u003cio-version\u003e.jar - Asynchronous I/O libraries for SSH/WinRM, HTTP, and ...",t:"Service Adapter Dependencies"},"5":{i:0.025335931089216,u:"../Content/Services/ServicesProviderType.htm",a:" In order to support a defined service, there must be a corresponding service provider defined. TheAgility Platform incorporates the Service Provider Type asset type into its object model to support a hierarchy of defined service providers.   There are many built-in Service Provider Type subtypes, ...",t:"Service Provider Asset Types "},"6":{i:0.00808823555791094,u:"../Content/Services/ServiceAssetType.htm",a:"Agility Platform incorporates the Service asset type into its object model to support a hierarchy of defined application services. Functional service types, such as Data Base as a Service (DBaaS) or Load Balancer as a Service (LBaaS), cross service vendors and extend from the Service object. And a ...",t:"Service Asset Types"},"7":{i:0.014963242242158,u:"../Content/Admin/AdapterRetrieval.htm",a:"The Agility Platform administrator installs a service adapter to provide the needed integration with a third-party service provider. To manage and track the developer and versions for these adapters, the  Agility Platform REST API provides a method that administrators can use to return information ...",t:"Retrieving Information About Installed Adapters"},"8":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_framework.htm",a:"The Agility Platform services architecture allows the application developer to express their requirement for externally-hosted services and their desired configuration through the application blueprint. A blueprint does not require the application developer to couple their application service to a ...",t:"Application Service Design and Deployment"},"9":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_framework_aservices.htm",a:"In the Agility Platform, application services provide an integration path to an external service required by an application or deployment infrastructure. A defined service can be used  in the composition of applications to provide support for functionality, such as a web service, database service, ...",t:"Blueprint Design with Application Services"},"10":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkServiceFrameworkOrchestration.htm",a:"Upon deployment of a blueprint, the deployment policy is evaluated and a mapping established between the user-specified service requirements and a configured service provider. Agility Platform establishes this mapping as a service binding  when it creates the corresponding runtime representation of ...",t:"Service Lifecycle Orchestration"},"11":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_framework_nservices.htm",a:"Another class of services exists that correspond to the current concept of network services, such as IPAM .  These services provide some aspect of infrastructure automation and are typically required in certain cloud environments. An example would be IP address assignment via DHCP in a vSphere ...",t:"Network Services"},"12":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkPolicies.htm",a:"Agility Platform Policy Support for Services The following Agility Platformpolicies provide support for deployment and management of application services: Lifecycle (Validation and PostProcess) Deployment Firewall (limited to service adapters that support firewalls) Workflow",t:"Agility Platform Policy Support for Services"},"13":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkLifecycleValidationPolicy.htm",a:"Lifecycle policies can be used to govern a service instance for the following service instance CRUD and compute lifecycle events: Lifecycle validation example You can apply a Lifecycle Validation policy to govern service instance prior to the supported instance lifecycle events. The following ...",t:"Lifecycle Policies"},"14":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkDeploymentPolicy.htm",a:"A Deployment policy can be used to govern service instance resources, such as the service provider, during deployment. Deployment policies support the  \"Service\" asset condition and the \"Service Provider\" deployment resource. The following Deployment policy example will match the \"Azure Demo\" ...",t:"Deployment Policies"},"15":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkFirewallPolicy.htm",a:"Firewall policies can be used to govern those service instances that support firewalls. The service adapter can specify this to support to use of firewall policies.  If this support is provided, a  user can assign firewall policies to the service in the blueprint editor.  At runtime, the service ...",t:"Firewall Policy"},"16":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkWorkflowPolicy.htm",a:"Workflow policy can be used to govern the service instance lifecycle events.  Agility Platformprovides the following workflow scopes by default, which can be customized according to organizational requirements: Service Delete Service Provision Service Release Service Start Service Stop Service ...",t:"Workflow Policy"},"17":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_sdkframework.htm",a:"The Services SDK framework is based on a reactive processing model where an implementation of the reactor pattern dispatches all IO, timers, messaging, and work out of a single thread (or small pool). Additionally, calls to external service providers utilize asynchronous communication libraries ...",t:"Asynchronous Results"},"18":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkMap.htm",a:"In one of the simplest use cases, a service adapter often needs to map the result of an asynchronous call to an external service to an internal format. In the following example, a call is made into an adapter to test the connection to the service provider. The call should return a ...",t:"promise.map"},"19":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkSequence.htm",a:"Another typical use cases involves the service adapter initiating multiple asynchronous requests/calls and waiting for all of these to complete in order to accumulate a result. The promise.sequence method converts a list of promises to a single promise that completes with a list of results. This ...",t:"promise.sequence"},"20":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkFlatMap.htm",a:"In many cases, implementing an SDK entry point requires multiple calls into the service provider. Each of the individual calls should be implemented to return a promise to the intermediate result. The results can then be combined using flatMap, as demonstrated in the following code example: // // ...",t:"promise.flatMap"},"21":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkErrorHandling.htm",a:"By default, all errors/exceptions are propagated up through all wrapped promises to the \"top\" of the promise tree/hierarchy. This behavior can be changed by installing handlers on any promise and/or wrapping any promise with a new completion that handles the error and returns the expected result ...",t:"Error Handling"},"22":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkCancellation.htm",a:"The ability to cancel pending operations is provided as a method that will chain the cancel request down the promise tree/hierarchy to all pending operations. However, it is up to the operation to register a function that can be invoked to actually perform the cancel operations at the lowest levels. ...",t:"Operation Cancellation"},"23":{i:0.00808823555791094,u:"../Content/Services/ServiceAdapterInstallation.htm",a:"During service adapter development, you can install an adapter bundle to test the adapter functionality in the Agility Platform installation that is running in your testing environment.  After you install a service adapter, you can log in to the Agility Platform UI and select the Assets item in the ...",t:"ServiceAdapterInstallation"},"24":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_usingServiceSDK.htm",a:"DXC Technology provides the  Services SDK so that you can  build custom adapters for integration with any external service required by an application or the infrastructure on which it is deployed. Using the Services SDK to develop and publish a service adapter for Agility Platform typically involves ...",t:"Using the Services SDK"},"25":{i:0.00808823555791094,u:"../Content/Services/ServicesSDK_prerequisites.htm",a:"Prerequisites Before you begin working with the Services SDK, the Agility Platform must be installed and ready to use.  Refer to the  Agility Platform Installation and Setup Guide for more information about manually installing the Agility Platform product.",t:"Prerequisites"},"26":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_frameworkAPIreference.htm",a:"A running instance of the Agility Platform server hosts reference documentation that provides useful information for adapter developers. Use the following URL to access links to all of the available reference information: doc/dev  Use these links to access the Javadoc for each of the SDK packages, ...",t:"Accessing the Javadoc and API Reference Information"},"27":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_OpenSource.htm",a:"Adapters that implement functionality using the Agility Platform Services SDK have open source license requirements that must be met before the adapter release and distribution. Because an adapter is installed and used within Agility Platform,   this requirement extends beyond a standard open source ...",t:"Open Source Compliance for Service Adapters"},"28":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ProviderCredentialSecurity.htm",a:"As a service adapter developer, you will define new subtype asset types for a service, which typically inherit from the service, serviceprovidertype, and/or designconnection base asset types. A new asset type can have a property that represents sensitive data, such as a password. A property that can ...",t:"Service Provider Credential Security"},"29":{i:0.00808823555791094,u:"../Content/Services/registerServiceAdapter.htm",a:"The ServiceAdapter base class registers the adapter as an OSGi service and uses the OSGi service registry to look up an AsyncService implementation provided by the corresponding version of the Services SDK. The adapter must include an implementation of the ServiceAdapter.getRegistrationRequest() ...",t:"Service Adapter Registration"},"30":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_Guidelines.htm",a:" To ensure consistency and compatibility across the adapters used within a single Agility Platform installation but developed by different groups, there are guidelines for defining these adapters  and their defined asset types .   When you define the service properties for a service adapter, these ...",t:"Guidelines for Service Adapter Development"},"31":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAdapterNaming.htm",a:"Use the following guidelines to define the adapter within the Adapter MANIFEST.MF file:  Bundle-Version: Specify the adapter version, with an initial adapter version of \"1.0.0\"  Bundle-Vendor: Designate the organization that developed the adapter. The development group should determine the ...",t:"Adapter Naming Conventions"},"32":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_AssetNaming.htm",a:"Use the following guidelines to define the service asset types that are created in Agility Platform when the service adapter is installed: Service Name: Include the version number in the service name in order to differentiate between service adapters. If there are two versions of the same adapter ...",t:"Asset Naming Conventions"},"33":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_LicenseText.htm",a:"Adapter development teams within DXC Technology should include a LICENSE file at the root of the project and add the following copyright message to the source files: Copyright (c) 2013-Present DXC Technology Company When you include the LICENSE text file in the project, the contents of this file ...",t:"Copyright and Licensing for Adapter Files"},"34":{i:0.00808823555791094,u:"../Content/Services/class_serviceAdapter.htm",a:"The ServiceAdapter abstract base class contains abstract methods for the core messaging framework and OSGi service registration. The ServiceAdapter class implements the OSGi BundleActivator interface, which handles the adapter registration with the core platform and the registration of the message ...",t:"The ServiceAdapter Base Class"},"35":{i:0.0287132556106522,u:"../Content/Services/ServiceSDK_RegistrationRequest.htm",a:"The com.servicemesh.agility.sdk.service.msgs.RegistrationRequest class is the container for a service adapter to specify its core data. Every service adapter must override com.servicemesh.agility.sdk.service.spi.ServiceAdapter.getRegistrationRequest() and return a populated RegistrationRequest ...",t:"The RegistrationRequest Class and Object"},"36":{i:0.014963242242158,u:"../Content/Services/ServiceSDK_ServiceAdapterNamingDynamic.htm",a:"The following example uses Ant as the build tool and a service adapter  written in Java. The application is configured  so that  the version information is changed in one place, the Build.xml file. There are three files that are configured to support this: Build.xml, MANIFEST.MF, and MyAdapter.java. ...",t:"Including Dynamic Service Adapter Information"},"37":{i:0.0202913726675421,u:"../Content/Services/ServiceSDK_ServiceProviderType.htm",a:"The ServiceProviderType specifies the communications mechanism for a service adapter to manage a service in a cloud. The RegistrationRequest assetTypes attribute should be populated with an Asset Type that represents the communications parameters for a service provider. This asset type extends from ...",t:"The ServiceProviderType Asset Type"},"38":{i:0.0337514824022423,u:"../Content/Services/ServiceSDK_ServiceAssetTypeExtension.htm",a:"In the Agility Platform object model, an asset type can inherit from another type. This base type is the supertype for the inheriting asset type. The inheriting asset type is the subtype for the supertype. The subtype inherits properties from its supertype, in addition to those properties that are ...",t:"The Base Service Asset Type Inheritance Model"},"39":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeDesignItem.htm",a:"Design Item Properties DesignItem is the base type of all asset types that can be used in the blueprint editor. Inherited properties: None Defined properties: security-zone",t:"Design Item Properties"},"40":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeService.htm",a:"Service Inheritance and Properties Service is the base asset type for all Services. Any asset type that inherits from Service is displayed in the Services list in the blueprint editor. Inherited properties: security-zone Defined properties: none Type inheritance: Design Item \u003e\u003e Service",t:"Service Inheritance and Properties"},"41":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeDBaaS.htm",a:"DBaaS Inheritance and Properties DBaaS is the base asset type for all Database-as-a-Service asset types.  Inherited properties: security-zone Defined properties: none Type inheritance: Design Item \u003e\u003e Service \u003e\u003e DBaaS",t:"DBaaS Inheritance and Properties"},"42":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeNoSQL.htm",a:"NoSQL Inheritance and Properties NoSQL is the base asset type for all  NoSQL Database as a Service service types.  Inherited properties: security-zone Defined properties: none Type inheritance: Design Item \u003e\u003e Service \u003e\u003e DBaaS \u003e\u003e NoSQL",t:"NoSQL Inheritance and Properties"},"43":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeRDBMS.htm",a:"RDBMS Inheritance and Properties RDBMS is the base type of Relational-Database-Management-as-a-Service asset types. Type inheritance: Design Item \u003e\u003e Service \u003e\u003e DBaaS \u003e\u003e RDBMS Inherited properties: security-zone Defined properties: admin-login admin-pass",t:"RDBMS Inheritance and Properties"},"44":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeDNSLBaaS.htm",a:"DNS LBaaS Inheritance and Properties dns-lbaas is the base type for all DNS Load Balancer-as-a-Service asset types. Type inheritance: Design Item \u003e\u003e Service \u003e\u003e DNS LBaaS Inherited properties: security-zone Defined properties: dns time-to-live load-balancing-method",t:"DNS LBaaS Inheritance and Properties"},"45":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeLBaaS.htm",a:"LBaaS Inheritance and Properties lbaas is the base type for all non-DNS Load Balancer-as-a-Service asset types. Type inheritance: Design Item \u003e\u003e Service \u003e\u003e LBaaS Inherited properties: security-zone Defined properties: lb-protocol lb-port instance-protocol instance-port",t:"LBaaS Inheritance and Properties"},"46":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeSTaaS.htm",a:"STaaS Properties StaaS is the base asset type for all  Storage-as-a-Service service asset types.  Inherited properties: security-zone Defined properties: none Type inheritance: Design Item \u003e\u003e Service \u003e\u003e STaaS",t:"STaaS Properties"},"47":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeFileShare.htm",a:"File Share Inheritance and Properties fileshare is the base asset type for all  file share service asset types.  Inherited properties: security-zone Defined properties: none Type inheritance: Design Item \u003e\u003e Service \u003e\u003e STaaS \u003e\u003e File Share",t:"File Share Inheritance and Properties"},"48":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceAssetTypeObjectStore.htm",a:"Object Store Inheritance and Properties objectstore is the base asset type for all  object store service asset types.  Inherited properties: security-zone Defined properties: none Type inheritance: Design Item \u003e\u003e Service \u003e\u003e STaaS \u003e\u003e Object Store",t:"Object Store Inheritance and Properties"},"49":{i:0.0603834440063206,u:"../Content/Services/ServiceSDK_ServiceAssetTypeExtend.htm",a:"It is relatively simple  to create a new Service asset type that is derived from a general service type, such as the existing base types (see  The Base Service Asset Type Inheritance Model ). The primary task is setting the supertype of your service to the desired parent asset type.\n\nFor example, if ...",t:"Extending a Base Service Asset Type"},"50":{i:0.0459546195118734,u:"../Content/Services/ServiceSDK_Service.htm",a:"The Service Asset Type represents the cloud service supported by a service adapter. The RegistrationRequest assetTypes attribute should be populated with an Asset Type that includes the properties of a service. This asset type extends from the base Service asset type. For more information, see  ...",t:"Registration of the Service Asset Type"},"51":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_BPeditorRegistration.htm",a:"In addition to asset type properties, the Blueprint Editor in the Agility Platform supports the definition of  Firewalls, Policies, and Variables for a service. To enable these additional configuration types for a service within a blueprint design, you must  add the editor type to the Editors list ...",t:"Registration for Additional Blueprint Editor Support"},"52":{i:0.00808823555791094,u:"../Content/Services/ServiceConnectionAssetType.htm",a:"Agility Platform incorporates the Design Connection asset type into its object model to support a hierarchy of defined dependencies between blueprint design elements. A design connection indicates the systems on which a machine relies for script variable values or services. A dependent node cannot ...",t:"Design Connection Asset Type"},"53":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_DesignConnections.htm",a:"Blueprint designers define relationships between blueprint design elements using connections. A connection indicates the systems on which a VM relies for script variable values or services. A dependent node cannot start until all dependencies have successfully executed all startup scripts. ...",t:"Supporting Connections for a Service"},"54":{i:0.0115257389000345,u:"../Content/Services/ServiceSDK_DesignConnectionType.htm",a:"Use the getRegistrationRequest method to create the connection definition and add it to the Service asset type. If the service is the source in the connection, add the connection definition to the Service AssetType SrcConnections list. If the service is the destination in the connection, add the ...",t:"Defining a Service Connection"},"55":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_DesignConnectionTypeCustom.htm",a:"When you are providing support for connections to or from a service, you can use the base DesignConnection type or define a custom connection type. All custom connection types must have DesignConnection as the top-level parent. It possible to have a custom connection type inherit from another custom ...",t:"Using a Custom Design Connection Type"},"56":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceProperties.htm",a:"The asset type objects in the service adapter also define the asset type properties needed to create a service instance at deployment, according to the service vendor API. You can specify these properties so that valid values are passed to the service adapter at deploy time. Agility ...",t:"Asset Type Properties"},"57":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServicePropertyRequired.htm",a:"A service provider might require a property value such that it cannot provision a functional service without it being defined. In this case, the set the minimum number of defined values (MinRequired)  to a value greater than its default of zero, such as the following example:\n\n     ...",t:"Required Properties"},"58":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceStringPropertyDefault.htm",a:"A default value is useful where there is a typical standard or format that the consumer of the service will most likely use. Use the getDefaultValues() method to specify one or more default values for a property, such as the following example: PropertyDefinition dfltStringPD = new ...",t:"Property Defaults"},"59":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServicePropertyConstraints.htm",a:"In the Agility Platform, property types define the primitive type (string, integer, numeric, Boolean, or date) and optionally specify a pre-defined set of values for one or more properties or script variables. Users can then assign  values according to the property types assigned to the properties ...",t:"Property Constraints"},"60":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServicePropertyValidators.htm",a:"Property Validators Properties for a ServiceProviderType or Service asset type can be validated through the com.servicemesh.agility.api validators. These validators are derived from the FieldValidator base class, which has no attributes. ",t:"Property Validators"},"61":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServicePropertyStringValidator.htm",a:"\nThe FieldValidator classes can be combined. The following example defines a string property with both length and regular expression validation: PropertyDefinition validStringPD = new PropertyDefinition(); validStringPD.setName(\"validated-string-property\"); validStringPD.setDisplayName(\"Validates ...",t:"String Properties with Validators"},"62":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ServiceIntegerPropertyValidator.htm",a:"The following example includes a  range validator to constrains the property values within known range(s): Link integerType = new Link(); integerType.setName(\"integer-any\"); integerType.setType(\"application/\" + PropertyType.class.getName() + \"+xml\");   PropertyDefinition rangePD = new ...",t:"Integer Properties with Validators"},"63":{i:0.00808823555791094,u:"../Content/Services/AccessingVariables.htm",a:"Access to variables in  the scope of a ServiceInstance (variables on Projects, Environments, and Topologies that are direct ancestors of the ServiceInstance) is provided for ServiceInstanceOperations, ServiceInstanceLifecycleOperations, InstanceOperations, and ConnectionOperations methods. The ...",t:"Accessing Variables"},"64":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_AdapterFilePackagingVersioning.htm",a:"In the course of planning and developing a service adapter, you will want to package it in a way that supports versioning and updates. Good versioning practices will enhance your ability to support the adapter and its use by consumers.\n\nWith Red Hat Enterprise Linux (RHEL) being the supported basis ...",t:"Service Adapter File Packaging and Versioning"},"65":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_AdapterFilePackagingConventions.htm",a:"The versioning aspects are reflected in the RPM file name for a service adapter using the following convention: agility-adapters-azure-trafficmanager-\u003cA\u003e.\u003cB\u003e-\u003cC\u003e.r\u003cD\u003e.\u003cE\u003e.noarch.rpm These aspects are also reflected in the RPM specification: Version: \u003cA\u003e.\u003cB\u003e Release: \u003cC\u003e.r\u003cD\u003e.\u003cE\u003e The specification ...",t:"Service Adapter RPM File Conventions"},"66":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_AdapterFilePackagingOSGI.htm",a:"\nWith OSGi as the backbone container for Agility Platform installations, version data also plays a role in the OSGi bundle definition. The Agility Platform convention is:\n Bundle-Version: \u003cA\u003e.\u003cB\u003e.\u003cC\u003e\n\n For support purposes, it is also a best practice to include \u003cD\u003e and \u003cE\u003e within the ...",t:"Service Adapter Bundle Conventions"},"67":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_AdapterBuilding.htm",a:"There are many ways to build versioning information into an adapter RPM and OSGi manifest. This section provides an example where versioning components are specified once in the Ant build.xml file and then propagated at build time. Mapping the versioning components The first task is to map the ...",t:"Building a Service Adapter with Versioning"},"68":{i:0.00808823555791094,u:"../Content/Services/Servicesdk_interfaces.htm",a:"Service adapters implement a series of interfaces to transform Agility Platform service operations into service-specific operations.  This chapter provides information about the potential interfaces that a service adapter can implement.  Service adapters must implement some of these interfaces while ...",t:"Service Interfaces and Operations"},"69":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ReactorPromiseDesign.htm",a:"The Agility Platform Services SDK incorporates the Reactor design pattern (http://en.wikipedia.org/wiki/Reactor_pattern) as provided by the Core Frameworks bundle (com.servicemesh.core). A key class for using the Agility PlatformReactor is com.servicemesh.core.async.Promise, which contains the ...",t:"The Reactor-Promise Design Pattern"},"70":{i:0.00808823555791094,u:"../Content/Services/ServiceSDK_ReactorPromiseStatusMethods.htm",a:"Promise Status Methods Use the following methods to retrieve status information for a Promise: You can use the return values for these methods in combination to determine specific information about a  Promise:",t:"Promise Status Methods"},});
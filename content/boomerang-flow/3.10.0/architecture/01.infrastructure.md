---
title: Infrastructure
index: 1
---

# Infrastructure Architecture

The infrastructure is based on top of Kubernetes<sup>®</sup> using Tekton<sup>®</sup> TaskRuns, ConfigMaps, Secrets, and Persistent Volumes. See the [Task architecture](/docs/boomerang-flow/architecture/tasks) for more information.

## Kubernetes

### TaskRuns

Tekon TaskRuns are a Custom Resource Definition (CRD) wrapping Kubernetes Pods and allow us to define the Task specific metadata.

A certain amount of disk, memory, and CPU is required to process TaskRuns. Our recommendation is to run these on dedicated nodes and to set them to automatically delete. This will ensure you have enough resources to continually execute new Tasks.

### Nodes

The Workflow Tasks run as jobs on any node, unless dedicated nodes are implemented using:

- Node taint: `dedicated=bmrg-worker:NoSchedule`
- Node label: `node-role.kubernetes.io/bmrg-worker=true`

### Ephemeral storage

As with all containers, there is ephemeral storage used that we have limited to 8GB by default. This impacts the number of Tasks that can be running in parallel, based on the amount of primary disk used. This is important.

Flow Tasks have a setting to delete on completion. If this is not enabled, then the completed workers stick around and use up the available ephemeral storage.

See [Kubernetes ephemeral storage](https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#local-ephemeral-storage) reference information.

### Persistent volumes

There are different types of persistent volumes used by the task orchestration system and are enabled by Workflow in the Workflow Editor > Configuration.

You can configure the storage size, storage class, and access modes for the following types in the Settings under Administer. By default:
- Storage Size is set to 1GB
- Storage Class is not set. This will therefore use the default defined in your kubernetes cluster
- Access Mode is set as Read Write Many.
- Maximum Storage is set to 5GB

We recommend using [Ranchers Local Path Provisioner](https://github.com/rancher/local-path-provisioner) on the nodes executing Tasks as this allows for dynamic provisioning of local disk, that if SSD, allows for low latency high speed writes.

#### Workspaces

Workspaces are the representation of Storage in use by Boomerang Flow (and Tekton) Workflows. There are currently two workspaces available to be enabled in a Workflow. See the [Workspaces section of the Workflow Editor How to Guide](/docs/boomerang-flow/how-to-guide/workflow-editor#workspaces) for more information.

- Workflow Workspace: This workspace will not churn often as it stays persisted and maximum storage required can be calculated by the number of workflows and maximum size i.e. if you have 100 workflows and the maximum size is set at 5GB you will have a requirement of 500GB (100GB x 5GB) of Persistent Storage needed.
- Activity Workspace: This workspace can cause churn of persistent volumes and can cause instability depending on the Storage driver you are using, we recommend using a fast provisioning Storage Class for this type of PVC. Maximum storage required can be calculated by the number of workflows x maximum concurrent executions x maximum size i.e. if you have 100 workflows and 4 concurrent workflows and maximum storage size is set at 5GB you will have a requirement of 2TB (100GB x 4 x 5GB) of Persistent Storage needed.

#### Data

All Tasks run with a data drive (`/data`) specific to that Task and based on [Kubernetes EmptyDir volume](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir). Use this for inner Task workings.

### Pod Anti-affinity

If dedicated nodes are enabled, a pod-soft anti-affinity feature is also enabled to ensure that attempts are made to balance workers across nodes as best as possible.

### Image Policies

If you are implementing a Kubernetes cluster, which uses ClusterImagePolicy or ImagePolicy, you may need to add `docker.io/boomerangio/*:*` to your policies to be able to retrieve the images.

### Network

Supported for use with IPv4 networks only.

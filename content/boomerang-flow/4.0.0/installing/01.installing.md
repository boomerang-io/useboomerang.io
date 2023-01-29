---
title: Installing
index: 1
---

# Installing

Boomerang Flow is packaged as a Helm<sup>®</sup> 3 chart with the values documented in the chart. Please make sure to read the [prerequisites](/docs/boomerang-flow/installing/pre-requisites) prior to installing.

## Prerequisites

You are expected to have one of the supported Kubernetes<sup>®</sup> platforms available with the additional software requirements presented in the following sections.

Ensure you have read and can meet all the dependencies listed in the [Application Architecture](/docs/boomerang-flow/architecture/application).

### Helm 3

Ensure you have Helm<sup>®</sup> 3 installed, as Boomerang Flow is packaged with Helm.

### Kubernetes

Ensure you have read and can meet all the dependencies listed in the [Infrastructure Architecture](/docs/boomerang-flow/architecture/infrastructure).

### MongoDB

MongoDB<sup>®</sup> is a mandatory dependency that needs to be installed prior. We highly recommend using a managed serivce from MongoDB, Azure CosmosDB API for MongoDB, or the [MongoDB Helm chart from Bitnami](https://bitnami.com/stack/mongodb/helm).

We recommend that you install and create the Persistent Volume Claim (PVC) with `retain`, with a minimum recommended storage of `2Gi`.

**Sample Installation Steps**

Install a mmongodb instance for our Boomerang Flow will store the data.

> Note: view the additional values available to be set via the [Bitnami chart installation instructions](https://github.com/bitnami/charts/tree/main/bitnami/mongodb/#installing-the-chart)

```sh
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade --install  mongodb -n flowabl-dev bitnami/mongodb --set auth.databases={boomerang} --set auth.usernames={boomerang} --set readinessProbe.timeoutSeconds=20
```

### Tekton

Tekton<sup>®</sup> is another mandatory dependency that needs to be installed for Flow to properly function. The best way is to use the [Tekton Operator or Helm Chart](https://github.com/tektoncd/operator/releases). Installation steps for the Operator can be found [here](https://tekton.dev/docs/pipelines/install/). The Tekton version can be found in the [Application Architecture](/docs/boomerang-flow/architecture/application).

### NATS Jetstream

If you want to enable eventing, NATS Jetstream must be available to act as the messaging system. You can install NATS Jetstream via its [Helm chart found here](https://artifacthub.io/packages/helm/nats/nack).

You can also [read our more in depth guide](boomerang-flow/installing/installing-nats-jetstream).

### Cert Manager [Optional]

We recommend installing / using [Cert Manager](https://cert-manager.io/docs/installation/helm/) to generate your TLS certificates.

### IBM Consulting Essentials

When standalone mode is disabled, integration to the Core services provided by IBM<sup>®</sup> Consulting Essentials is required.

## Installation steps

Install, or upgrade, into a Kubernetes<sup>®</sup> cluster via Helm, using the following commands:

We've bundled in our Helm chart Boomerang Flow and auth2-proxy. We left them enabled for an easier installation experience however they would need to get configured for your specific use-case.

> **Note:** To disable oauth2-proxy use:`--set auth2proxy.enabled=false`.

Explicit examples of the configuration files can be found [here](https://github.com/boomerang-io/charts/tree/main/examples).

```sh
helm repo add boomerang-io https://raw.githubusercontent.com/boomerang-io/charts/index
helm repo update

helm upgrade --install --debug flow boomerang-io/bmrg-flow -f <configuration.yaml>
```

> **Note:** If `workers.security.enable` is set to `true`, `workers.security.policy` should be set to a **privileged** PodSecurityPolicy (Kubernetes based platforms) / SecurityContextConstraint (OpenShift based platforms).

## Post installation

### First Time Activation wizard

When installing Boomerang Flow in standalone mode, you will be presented with a token in the output of the Helm command, with some instructions on how to navigate to the installed running application.

Upon navigating to the links provided, a First Time Activation wizard appears, and redirection will occur, until the one-time activation token is provided.

This is an important step to ensure that an Administrator account is dynamically created, providing the user the correct entitlements to perform the post installation configuration steps.

![Activation wizard screen](./assets/activation-screen.png)

### Post installation configuration

After installation and activation, you will be able to administer the settings. These are dynamic configurations that can be changed during runtime. This ensures don't have to provide this via the values YAML at installation time, as there is nothing worse than having to put together a values YAML with greater than 100 values!

Currently, these settings will affect how the workers interface and execute. See [Workers and Execute](/docs/boomerang-flow/architecture/worker-and-executor-architecture) for details.

## Installation steps on your local machine

The Helm<sup>®</sup> 3 chart that we put in place for Boomerang Flow, allows you to install it, together with its dependencies on your laptop. The only pre-requirement is to have Docker installed before starting the installation process.

You can follow this step-by-step article on how to install Boomerang Flow locally on a “regular” laptop which covers:

- installing a Kubernetes cluster on the local machine using Kind,
- installing a mongodb instance to store our data,
- installing Boomerang Flow and its dependencies,
- finally activating it and doing a demo workflow.

[Put Boomerang Flow onto your laptop](https://itnext.io/lets-put-boomerang-flow-on-our-laptop-8a63eac2b9e5)

## Issues Installing

If you encounter issues installing Boomerang Flow you can reach out on our Slack channels. The following are some of the known issues faced.

### No Pipelines ServiceAccount

If you are attempting to run Workflows and they are coming up with an error including `serviceaccounts "pipeline" not found` then its most likely that the pipelines service account needed by Tekton is not found. This can be solved by creating the required serviceaccount and rolebinding. Typically we link to a priviledged clusterrole.

```sh
kubectl create serviceaccount pipeline
kubectl create rolebinding pipeline-rolebinding --serviceaccounts <namespace>:pipeline --clusterrole=<clusterrole>
```

![ServiceAccount Error](./assets/installing-issues-serviceaccount.png)

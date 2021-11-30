---
title: Installing NATS Jetstream
index: 03
---

# Installing and Configuring NATS with Jetstream

## About

## Architectural Overview


## Prerequisites

| Chart            | Version |
| ---------------- | ------- |
| nats/nats        | 0.8.4   |
| nats/nack        | 0.8.0   |


Repository: https://nats-io.github.io/k8s/helm/charts/

## Installing

**Step 0**

Retrieve values files
```
helm3 repo update
helm3 inspect values nats/nats --version 0.8.4 > nats-0.8.4.yaml
helm3 inspect values nats/nack --version 0.8.0 > nack-0.8.0.yaml
```

**Step 1**

inside `nats-0.8.4.yaml` make the following changes:
- enable Jetstream
- enable Memory Storage
- enable File Storage for persistence (add the appropriate storage class name)

example:
```
[...]
  jetstream:
    enabled: true

    #############################
    #                           #
    #  Jetstream Memory Storage #
    #                           #
    #############################
    memStorage:
     enabled: true
     size: 1Gi

    ############################
    #                          #
    #  Jetstream File Storage  #
    #                          #
    ############################
    fileStorage:
      enabled: true
      storageDirectory: /data

      # Set for use with existing PVC
      # existingClaim: jetstream-pvc
      # claimStorageSize: 1Gi

      # Use below block to create new persistent volume
      # only used if existingClaim is not specified
      size: 1Gi
      storageClassName: "ocs-storagecluster-cephfs"
      accessModes:
        - ReadWriteOnce
      annotations:
        # key: "value"
[...]
```

inside `nack-0.8.0.yaml` make the following changes:
- set the appropriate nats URL (be sure the name corresponds to the NATS release name - Step 2

example:
```
###############################
#                             #
#  NACK JetStream Controller  #
#                             #
###############################
jetstream:
  enabled: true
  image: natsio/jetstream-controller:0.3.0
  pullPolicy: IfNotPresent
  replicas: 1

  # NATS URL
  nats:
    url: nats://nats:4222

```

**Step 2**

Install NATS with JetStream enabled and the NACK operator

```
oc new-project <namespace>
helm3 upgrade --install --debug --version 0.8.4 -f nats-0.8.4.yaml -n <namespace> nats nats/nats
helm3 upgrade --install --debug -n <namespace> -f nack-0.8.0.yaml nack nats/nack
```

## Testing
URL: `nats://nats.<namespace>.svc.cluster.local:4222`

See: [ArtifactHub Documentation][1], [GitHub Readme][2]

[1]: https://artifacthub.io/packages/helm/nats/nack

[2]: https://github.com/nats-io/nack

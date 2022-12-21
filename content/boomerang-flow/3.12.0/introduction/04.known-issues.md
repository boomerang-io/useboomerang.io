---
title: Known Issues & Limitations
index: 4
---

# Known Issues & Limitations

- Audit and tracing are not currently working for the Listener service when connected to IBM Consulting<sup>®</sup> Essentials.

## Tasks & Task Manager

- We don't yet support Tekton<sup>®</sup> Task Resources or multi-step tasks.
- We don't yet support Tekton<sup>®</sup> Parameter references such as SecretKeyRef and ConfigMapRef

# Deprecations

The following table describes the deprecations, when they are announced, and when they will be fully removed.

| Feature                           | Announcement Date or Release | Removal Date or Release | Comments                                                                        |
| --------------------------------- | ---------------------------- | ----------------------- | ------------------------------------------------------------------------------- |
| System Tokens | 3.4        | 4.0                     | Replaced by the new API Tokens.          |
| Properties Syntax and Terminology | December 27th for 3.1        | 3.4                     | Replaced by Parameters and backwards compatibility supported until 3.4          |
| Create Task from JSON             | 3.2                          | 3.2                     | Replaced by the ability to create from YAML as part of the Tekton Task adoption |
| Elasticsearch<sup>®</sup> log integration     | 3.3                          | 3.3                     | Removed as an option for log integration.                                       |
| Lifecycle Worker                  | 3.3                          | 3.3                     | Removed as an option custom integration or lifecycle watcher.                   |
| Embbedded Tekton Helm Chart | 3.12 | 3.12 | Removed as an option with our update to recommending that installation is completed with Tekton 0.29 or above. Unfortunately the CD Foundation Helm Chart no longer supported the latest versions and using the Operator installation method is now recommended by Tekton. |
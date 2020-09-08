---
title: Overview
index: 0
---

# Overview

Bosun, by Boomerang, is a policy based gating system that combines [Open Policy Agent (OPA)](https://openpolicyagent.org/) definitions with Rules and Data to validate if specific Gates are passed.

We currently focus on two use cases:
1. CICD Gates
2. Generic Metric Validation

We also have pre built integrations to retrieve metrics with
- SonarQube
- JFrog Xray

All packaged up in containers and easily installed with a [Helm](https://helm.sh/) chart.

## Getting Started

To get started, head to [Getting Started with Bosun](getting-started)

## Concepts

There are a number of concepts to understand when using Bosun and they will be mentioned in detail throughout the documentation. Here are a few of the important ones:

**Policy Template**

the template structure that defines the Policy Rego and Policy Rules. Templates are then used to create Policies. 

**Policy Rego**

the definition written in rego for OPA

**Policy Rules**

rules, in a domain specific lanauge, applicable to the definition

**Data**

the data or metrics to be validated

**Labels** 

metadata to pass in required information to the validation system.

**Annotations**

metadata that can be stored and displayed with a validation activity. This could be to add related identifiable information such as the CI pipeline or CI component that the validation is about.

## Architecture

![Architecture](/assets/bosun-architecture.png)

## Data Model

![Data](/assets/bosun-data.png)

Policy Templates (with Rego and Rule Templates) get combined with the user defined rules into a Policy which the Metrics is then validated against.

There is tight coupling between the three objects. Templates requires to know about the Metric data. Rules need to know about the Rego.

## Integrations

Bosun can be used in two ways, generically or pre-integrated with repositories of quality data. When validating generically the Metrics Data is a part of the body of the payload going to Bosun. When validating via pre-integrated data repositories you use labels to pass in any required information.

### Labels Required

Labels, as previoulsy mentioned in the Concepts, are required to pass information into the pre-integrated repositories.


| Integration | Label | Description |
| --- | --- | --- |
| Sonarqube | `sonarqube-id` | This is the sonarqube project id that you want to retrieve information about |
| Sonarqube | `sonarqube-version` | The specific version for the sonarqube project |
| JFrog Xray | `artifact-path` | |
| JFrog Xray | `artifact-name` | |
| JFrog Xray | `artifact-version` | |

## APIs

TBA

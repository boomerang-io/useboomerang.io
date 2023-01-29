---
title: What's New
index: 3
---

# What's new

Get a quick overview of what has been added, changed, improved, or deprecated in version 3.12.0 released 8th November 2022.

> You can find all the associated versions for this release on our [GitHub Release](https://github.com/boomerang-io/roadmap/releases/tag/3.12.0) as well as install via our Helm chart

## Workflow

- Resolved issue with setting of output parameters on workflows with multiple set output parameter tasks by refactoring output properties to allow for more reliable saving
- Fixed output parameters being shown without quotes on output

## Tasks & Extensions

- Fixed import task yaml error

## APIs & Events

- Added a new  API `workflow/teams/{teamId}/workflows`
- Speed up `/teams` API performance when team list is large in size

## Management & Administration

- Resolved issue with Admins not able to view all workflows

## Installing

- Tekton is no longer tighly coupled with a Boomerang Flow installation. See [Deprecations](/docs/boomerang-flow/introduction/known-issues-limitations#deprecations). We now recommend Tekton 0.29 or above.

## Stablity and Security
- Fixed issue with not being able to open any pages with flow.client.web versions 3.10.0 and 3.11.0
- Increased a number of minor dependent package versions across all parts of the solution thanks to Snyk and Dependabot.
- Documented how to contribute to the [Flow Loader project](https://github.com/boomerang-io/flow.loader)






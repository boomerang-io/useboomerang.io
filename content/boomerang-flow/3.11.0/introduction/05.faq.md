---
title: Frequently Asked Questions
index: 5
---

# Frequently asked questions

## How long does a Workflow take to execute?

A Workflow can take any amount of time. A Workflow generally starts executing a Task within three seconds. A simple Workflow with a single Task usually takes less then 15 seconds end-to-end.

## Does enabling the Workflow option for persistent storage have a performance impact?

Enabling the Workflow option for persistent storage results in a small performance impact, as the system works behind the scenes to spin up storage prior to executing any Tasks on the Workflow.

In tests, this has taken from 5 - 10 seconds of additional time.

## Are there any time limits defined or that can be set?

We do not yet have customizable limits or timeouts implemented in Flow.

## Can I create my own Tasks?

Yes. There are two ways this can be done

1. You can bring your own containers and run them through the use of the **Custom** Task in the Workflow Editor.
2. You can define a Team Task and use that in your Workflow. These Tasks can also be imported from the Tekton Task Hub.

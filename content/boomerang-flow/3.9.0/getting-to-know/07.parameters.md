---
title: Parameters
index: 6
---

# Parameters

Parameters are an important aspect of Boomerang Flow, allowing for a powerful inheritance model, and can be set and represent the many different parts of the application. They are available throughout a Workflow or Task and are substituted at execution time.

## Parameter Syntax

You can reference parameters in a Task using the `$()` syntax.

There are a number of caveats with parameters.

- Must only contain alphanumeric characters, hyphens (-), and underscores (\_).
- Must begin with a letter or an underscore (\_).

## Parameter Availability

The following table lists the parameters and when they are available to be substituted in an execution. Additionally, parameters have an inheritance order based on the layering order indicated below. For example, defining a parameter with the same name at the Team and Workflow level will lead the Workflow parameter to override and replace the value for the Team parameter, unless referenced directly using scope.

The substitution is performed by the Workflow service when a Workflow is executed.

![Parameter Layering](./assets/img/Boomerang-Flow-Parameters.png)

| Parameter Scope | Available When?                                                                                                          | Syntax                                    | Example                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------ |
| Global          | Throughout the Workflow lifecycle. These are defined in Boomerang Flow by Administrators.                                | `$(global.params.<parameter>)`            | `$(global.params.slackChannel)`                  |
| Team            | Throughout the Workflow lifecycle. These are defined in Boomerang Flow by teams.                                         | `$(team.params.<parameter>)`              | `$(team.params.slackChannel)`                    |
| Workflow        | Throughout the Workflow lifecycle. Created and set by a user through Editor inputs.                                      | `$(Workflow.params.<parameter>)`          | `$(Workflow.params.slackChannel)`                |
| System          | Specific reserved parameters available at the execution of a Workflow.                                                   | `$(system.params.<parameter>)`            | `$(system.params.Workflow-activity-id)`          |
| Params          | The flattened parameters with all inheritance and substitution resolved.                                                 | `$(params.<parameter>)`                   | `$(params.slackChannel)`                         |
| Task Results    | At completion of a Task execution, these parameters can be referenced by other Tasks during the same Workflow execution. | `$(Task.<Task name>.results.<parameter>)` | `$(Task.My Wait For Event.results.eventPayload)` |

Although Tasks themselves have input parameters, these are defined as part of the Task template and are only able to be referenced within the Task template or by the Task code itself.

## System Parameters

The following are the reserved parameters provided by Boomerang Flow.

| Parameter                   | Syntax                                                                                    | Description                                                                                                                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Task-name                   | `$(system.params.Task-name)`<br>`$(params.Task-name)`                                     | This is the user-specified name of the executing Task. It is unique to a Workflow.                                                                                                           |
| Task-id                     | `$(system.params.Task-id)`<br>`$(params.Task-id)`                                         | This is the unique identifier for the established Task in this particular Workflow.                                                                                                          |
| Task-type                   | `$(system.params.Task-type)`<br>`$(params.Task-type)`                                     | This is the categorization of a particular Task. Options are `template`, `decision`, `customTask`, `approval`, `setwfproperty`, `manual`, `eventwait`, `acquirelock`, and `releaselock`.     |
| Workflow-id                 | `$(system.params.Workflow-id)`<br>`$(params.Workflow-id)`                                 | This is the unique identifier for this Workflow.                                                                                                                                             |
| Workflow-name               | `$(system.params.Workflow-name)`<br>`$(params.Workflow-name)`                             | This is the user-specified name for the Workflow.                                                                                                                                            |
| Workflow-version            | `$(system.params.Workflow-version)`<br>`$(params.Workflow-version)`                       | This is the revision or version of the Workflow currently being executed.                                                                                                                    |
| Workflow-activity-id        | `$(system.params.Workflow-activity-id)`<br>`$(params.Workflow-activity-id)`               | This is the unique identifier for the particular execution of the Workflow.                                                                                                                  |
| Workflow-activity-initiator | `$(system.params.Workflow-activity-initiator)`<br>`$(params.Workflow-activity-initiator)` | This is the user ID of the initiator of this activity.                                                                                                                                       |
| trigger-type                | `$(system.params.trigger-type)`<br>`$(params.trigger-type)`                               | This is the trigger that created this Workflow activity or execution.                                                                                                                        |
| trigger-webhook-url         | `$(system.params.trigger-webhook-url)`<br>`$(params.trigger-webhook-url)`                 | This is the URL including domain name and context for the webhook endpoint. It is useful if you programmatically want to provide a callback URL from an endpoint triggered by your Workflow. |
| trigger-wfe-url             | `$(system.params.trigger-wfe-url)`<br>`$(params.trigger-wfe-url)`                         | This is the URL, including domain name and context, for the wait for event endpoint.                                                                                                         |
| trigger-event-url           | `$(system.params.trigger-event-url)`<br>`$(params.trigger-event-url)`                     | This is the URL, including domain name and context, for the event endpoint.                                                                                                                  |

### System Token Parameters

A subset of System parameters are tokens, which allow you to dynamically reference a token programmatically in your Workflow. This can be useful if you are sending a wait for event endpoint in an email body and need to dynamically provide the token that will be used to authenticate.

| Parameter      | Syntax                          | Description                                                                            |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------------- |
| `<tokenlabel>` | `$(system.tokens.<tokenlabel>)` | The specific token using the token label (set at creation time) to retrieve the token. |

## Result Parameters

All Tasks can have result parameters, which as mentioned above, can be used by other Tasks in the Workflow. They are also available at the completion of a Workflow using the execution status API.

### Standard Tasks

Some Standard Tasks will output result parameters.

### Custom Tasks

See [Custom Task architecture](/docs/boomerang-flow/architecture/overview) for more information.

As this Task is a bring-your-own container, we have provided two mechanisms for setting result parameters.

| Property Type        | Location            | Description                                                                                                                                                            |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Environment Variable | `/lifecycle/env`    | Any key value pair in the format of an environment variable can be placed in this file. At the termination of the worker, these will be turned into result parameters. |
| Files                | `/lifecycle/<file>` | Any file in the `/lifecycle` directory at termination of the worker will be turned into a base64-encoded parameter. The key will be the filename.                      |

## Comparison to Tekton Parameters

Boomerang Flow parameters are very similar to what you will find in Tekton<sup>®</sup> parameters and will be familiar to some of our users.

| Tekton | Example | Boomerang Flow | Example                                                     |
| ------ | ------- | -------------- | ----------------------------------------------------------- |
| -      | -       | Global         | `$(global.params.<parameter>)` or `$(params.<parameter>)`   |
| -      | -       | Team           | `$(global.params.<parameter>)` or `$(params.<parameter>)`   |
| -      | -       | Pipeline       | `$(params.<param name>)`                                    |
| -      | -       | Workflow       | `$(Workflow.params.<parameter>)` or `$(params.<parameter>)` |
| -      | -       | Context        | `$(context.pipeline.name)`                                  | System | `$(system.params.Workflow-name)` or `$(params.<parameter>)` |
| -      | -       | Task           | `$(params.<param name>)`                                    | Task | `$(params.<param name>)` |

Reference:

- [Using variable substitution](https://github.com/tektoncd/pipeline/blob/master/docs/Tasks.md#using-variable-substitution)
- [Variable Substitutions Supported by Tasks and Pipelines](https://github.com/tektoncd/pipeline/blob/master/docs/variables.md)

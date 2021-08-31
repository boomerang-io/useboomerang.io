---
title: Tasks
index: 6
---

# Task Execution and Frameworks

Following on from the [infrastructure architecture](/docs/boomerang-flow/architecture/infrastructure), the following describes the the Task executor architecture and the Task frameworks available.

> Note: we also refer to Tasks as Workers

## Task Execution

Boomerang Flow uses Tekton TaskRuns to create a powerful dynamic Task execution system based on Kubernetes and tightly coupled into the experience. This experience will spin up TaskRuns, and Kubernetes Pods, for every Task in the workflow and map to Configmaps, Secrets, and Persistent Volumes to achieve the end to end automation based on a Workflow DAG.

### Design guidelines

The current worker design abstracts the complexities of the automation away from the end user by providing a Drag and Drop interface and even providing extensibility through a Task Management interface. Ensuring that users do not need to learn about Kubernetes, Tekton, or YAML to bring new tasks.

We design the implementation so that overrides can be provided by the end user, as necessary, to allow some flexibility or customization in the automation. As well as a powerful parameter layering system giving the end users ultimate extensibility.

## Frameworks

Boomerang Flow mainly focuses on providing no-code prebuilt Tasks, however also have the extensibility for you to bring your own:

- use our Boomerang Worker Interfaces framework, which comes with a number of prebuilt functions
- import one of the prebuilt Tekton<sup>®</sup> Catalog Tasks
- define and build your own Task, based on any Docker<sup>®</sup> image

### Worker Interfaces

These frameworks are node modules that enable worker developers to use a prebuilt CLI and Common Core functions to easily drop in and run any command.

These frameworks can be found [here on Boomerangs GitHub](https://github.com/boomerang-io/worker.interfaces).

#### CLI

The Worker CLI provides two pieces of functionality:

- A node module providing an execution and wrapper - Once imported, all you need to do is drop a file or script into specific folders to be imported and available.
- A node package executable (npx) to initialize new worker repositories - This prompts users with questions that build out everything they need.

| Summary              |                                             |
| :------------------- | :------------------------------------------ |
| Type                 | Custom                                      |
| Platform Owner       | Tyson Lawrie, Tim Bula, and Benjamin Ruby   |
| Platform Version     | 0.8.5                                       |
| Languages            | Node.js                                     |
| Dependent Middleware | None                                        |
| Implementation       | Node Module (npm) and Node Executable (npx) |

**What's next**

Nothing at this time. We are actively looking for enhancement and change requests.

**Considerations**

N/A

#### Core

Worker Core is a node package that provides common helper methods. They are:

- `common` - methods that can be used by Task developers to enhance and speed the ease of their development
- `log` - logging utilities that use Chalk to output nice values in the log for the user
- `utils` - utility functions to help plugin authors retrieve, resolve, and set Task parameters

| Summary              |                                           |
| :------------------- | :---------------------------------------- |
| Type                 | Custom                                    |
| Platform Owner       | Tyson Lawrie, Tim Bula, and Benjamin Ruby |
| Platform Version     | 1.3.5                                     |
| Languages            | Node.js                                   |
| Dependent Middleware | None                                      |
| Implementation       | Node Module (npm)                         |

**What's next**

- Enhance the available common methods by harvesting current worker Tasks.

**Considerations**

N/A

### Prebuilt Tekton Catalog Tasks

To allow a higher productivity in designing and building your Workflows, you can now use the Tekton Catalog Tasks found [here on GitHub](https://github.com/tektoncd/catalog).

Create a new Boomerang Task using the definition of Tekton Catalog Tasks, through the new `yaml` view section. You can even extend the newly created Boomerang Tasks though the UI's **Definition Fields** and **Result Parameters** sections.

**Considerations**

- The platform currently support Tekton Tasks that define a single step inside their specification.

### Custom Built Tasks

You are not bound to any programming language to create your own custom Boomerang Tasks, as long as you can run your code as a Docker<sup>®</sup> container.

As an example, we've created the platform's Box<sup>®</sup> Boomerang Tasks based on Java <sup>®</sup> Spring Boot technology, found [here on GitHub](https://github.com/boomerang-io/worker.box).

**Considerations**

- In order for the custom Boomerang Tasks to be able to pass the result parameters down to the following Tasks in the Workflow, the Docker container needs to follow the Tekton Task results design.

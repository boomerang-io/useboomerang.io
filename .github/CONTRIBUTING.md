# Contributing

We welcome all our users to contribute to the documentation. While you can create an issue to identify a change or enhancement needed, we encourage you to raise a PR with the fix to make it faster and easier to be incorporated.

## How to write content

1. Write documentation `.md` files in the `content` directory.
2. Add frontmatter for the `title` of the document. _See existing documents for reference._

```file
---
title: What's New
index: 2
---
```

| Key   | Type   | Purpose                                                                                           | Required | Default Value            |
| ----- | ------ | ------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| title | string | Used to build the link to document using kebabCase version of value. Used for sidenav navigation. | no       | filename of the document |
| index | string | Specify where this doc should be shown in its category.                                           | no       | order in the folder      |

**Note**

- If title is not provided, it will default to the filename of the document.
- If index is not provided, it will default to the order in the folder.

## Recommended Structure

If you are a solution team creating a new topic of content we recommend that you have an introduction section to cover the basics of:

1. Overview
2. Getting Started
3. What's New
4. Known Issues and Limitations

The folder structure to match the above would be:

```file
content
 |__ solution
   |__ version
     |__ introduction
       |__ 00.overview.md
       |__ 01.getting-started.md
       |__ 02.whats-new.md
       |__ 03.known-issues.md
```

from here you can create additional topics such as architecture or detailed usage scenarios and information

```file
content
 |__ solution
   |__ version
     |__ category
       |__ document.md
```

e.g.

```file
content
 |__ boomerang
   |__ 1.0.0
     |__ architecture
       |__ overview.md
```

## Content Configuration

The home page and Doc sidenav are driven by the `contentConfig.js`. It contains the follows properties:

| Key                 | Type  | Purpose                                                          | Required |
| ------------------- | ----- | ---------------------------------------------------------------- | -------- |
| solutions           | array | Configure home page "cards" and order categories in Doc sidenav. | yes      |
| homeNavigationLinks | array | Configure home page links to specific docs.                      | no       |

### Solutions

The value for this property is an array of objects of the following shape:

```js
  title: "Boomerang",
  description: "Learn all about this stuff"
  path: "/boomerang/overview/welcome",
  solution: "boomerang",
  categoryOrder: ["introduction", "architecture"]
```

| Key           | Value  | Usage notes                                                                                                                                                                                                                                                                | Required |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| title         | string | Value for title on Card element on home page.                                                                                                                                                                                                                              | yes      |
| description   | string | Value for description on Card element on home page.                                                                                                                                                                                                                        | no       |
| path          | string | Use the [kebab case](https://lodash.com/docs/4.17.11#kebabCase) of the frontmatter `title` of the doc if it is provided. If not, use the kebab case of the filename. The `version` is not required. It will automatically redirect to the most recent version of that Doc. | yes      |
| solution      | string | Must match the name of the folder in the project according to the documented folder structure.                                                                                                                                                                             | yes      |
| categoryOrder | array  | Allows you to show categories in the sidenav in a specified order. All categories in the solution do **not** need be included. Default is the order in the folder in [Alpine Linux](https://alpinelinux.org/).                                                             | no       |

\*\* Note pay special attention to the path usage notes

### Home Navigation Links

```js
{
  text: "Getting Started",
  path: "/docs/boomerang/overview/getting-started"
}
```

| Key  | Value  | Usage notes                                                               | Required |
| ---- | ------ | ------------------------------------------------------------------------- | -------- |
| text | string | The link text that is displayed.                                          | yes      |
| path | string | Follows the same rules as the `path` property for the `solutions` object. | yes      |

### Linking to other docs

Doc in the same solution. Note that you do **NOT** prefix the link with a `/`.

`[Doc Name](kebabcase-of-doc-title)`

Doc in a different solution. Note that you do **NOT** need to include the version but **DO** include the `/`.

`[Doc Name](/docs/solution-name/category-name/kebabcase-of-doc-title`

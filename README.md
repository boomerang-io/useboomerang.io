# Boomerang.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/f6dc5880-9a97-4b71-942c-347957ab6eed/deploy-status)](https://app.netlify.com/sites/useboomerangio/deploys)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used on the landing page
│   │   └── theme           # Header & Footer
│   └── pages               # Pages
├── static                  # Icons, favicon & SVG illustrations
└── content                 # Documentation for the Boomerang solutions
    ├── boomerang-bosun     # Documentation for each Bosun version
    └── boomerang-flow      # Documentation for each Flow version
```

## Prerequisites

### [Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

### Python

```sh
brew install python
```

## Installing

Installing the dependencies

```bash
yarn install
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

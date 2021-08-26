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

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

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

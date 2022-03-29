const path = require('path')
const config = require('./data/config')
const contentConfig = require('./contentConfig')
console.log(path.resolve(__dirname, 'src/components'))

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/BMRG_APP_ROOT_CONTEXT',
  siteMetadata: {
    author: config.author,
    title: 'Boomerang',
    docsContext: '/docs',
    docsLocation:
      'https://github.com/boomerang-io/useboomerang.io/tree/main/content',
    githubUrl: 'https://github.com/boomerang-io/useboomerang.io',
    siteUrl: 'https://www.useboomerang.io/',
    homeTitle: 'Boomerang',
    homeDescription: 'Documentation for Boomerang Flow and Boomerang Bosun',
    linksConfig: contentConfig.linksConfig,
    solutionsConfig: contentConfig.solutionsConfig,
    footerLinksConfig: contentConfig.footerLinksConfig,
    standaloneMode: true,
    socialLinks: config.socialLinks,
    navLinks: [
      {
        name: 'Flow',
        url: '/flow',
      },
      {
        name: 'Docs',
        url: '/docs',
      },
    ],
  },
  plugins: [
    {
      resolve: '@boomerang-io/gatsby-theme-boomerang',
      options: { lunrSearch: true },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //     head: true,
    //   },
    // },
  ],
}

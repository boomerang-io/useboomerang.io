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
    title: '',
    docsLocation:
      'https://github.ibm.com/essentials-core/core.app.docs/tree/main/content',
    githubUrl: 'https://github.ibm.com/essentials-core/core.app.docs',
    siteUrl: 'https://launch.boomerangplatform.net/docs',
    headerTitle: 'Boomerang Docs',
    description: 'Documentation for Boomerang',
    solutions: contentConfig.solutions,
    homeNavigationLinks: contentConfig.homeNavigationLinks,
    standaloneMode: true,
    navLinks: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Docs',
        url: '/docs',
      },
      {
        name: 'Contact',
        url: '/contact',
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    // {
    // 	resolve: 'gatsby-plugin-manifest',
    // 	options: {
    // 		name: config.defaultTitle,
    // 		short_name: 'starter',
    // 		start_url: '/',
    // 		background_color: config.backgroundColor,
    // 		theme_color: config.themeColor,
    // 		display: 'minimal-ui',
    // 		icon: './static/favicon/favicon.png',
    // 	},
    // },
    'gatsby-plugin-offline',
  ],
}

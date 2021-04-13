const config = {
  linksConfig: [
    {
      title: 'Quick links',
      links: [
        {
          title: 'Getting Started',
          path: '/docs/boomerang-flow/introduction/overview',
        },
        {
          title: 'Tutorials',
          path: '/docs/boomerang-flow/tutorials/git-hub-issues-bot',
        },
        {
          title: 'Installing',
          path: '/docs/boomerang-flow/installing/pre-requisites',
        },
      ],
    },
    {
      title: 'Discover Boomerang Flow',
      links: [
        {
          title: 'Boomerang Flow',
          description: 'Cloud-native workflow orchestration',
          path: '/docs/boomerang-flow/introduction/overview',
          image: 'flow',
        },
      ],
    },
    {
      title: 'Discover Boomerang Bosun',
      links: [
        {
          title: 'Boomerang Bosun',
          description: 'Policy-based CICD gating',
          path: '/docs/boomerang-bosun/introduction/overview',
        },
      ],
    },
  ],
  solutionsConfig: [
    {
      title: 'Boomerang',
      solution: 'boomerang',
      categoryOrder: ['introduction'],
    },
    {
      title: 'Boomerang Flow',
      solution: 'boomerang-flow',
      categoryOrder: [
        'introduction',
        'architecture',
        'getting-to-know',
        'installing',
      ],
    },
    {
      title: 'Boomerang Bosun',
      solution: 'boomerang-bosun',
      categoryOrder: ['introduction', 'architecture'],
    },
  ],
  footerLinksConfig: [
    {
      link: 'https://www.useboomerang.io//',
      title: 'useboomerang.io/',
      type: 'website',
    },
    {
      link: 'https://twitter.com/useboomerangio/',
      title: 'Follow Boomerang on Twitter',
      type: 'twitter',
    },
  ],
}

module.exports = config

const config = {
  linksConfig: [
    {
      title: 'Quick links',
      links: [
        {
          title: 'Getting Started with Boomerang Flow',
          path: '/docs/boomerang-flow/introduction/overview',
        },
        {
          title: 'Tutorials for how to use Boomerang Flow',
          path: '/docs/boomerang-flow/tutorials/git-hub-issues-bot',
        },
        {
          title: 'Installing your own Boomerang Flow',
          path: '/docs/boomerang-flow/installing/installing',
        },
      ],
    },
    {
      title: 'Discover Boomerang Flow',
      links: [
        {
          title: 'Introduction',
          description:
            'Get to know Boomerang Flow, an event driven cloud-native workflow orchestration engine.',
          path: '/docs/boomerang-flow/introduction/overview',
        },
        {
          title: 'Architecture',
          description:
            'Provides the architecture, the patterns, technologies, and implementation.',
          path: '/docs/boomerang-flow/architecture/overview',
        },
        {
          title: 'Getting to Know',
          description: 'Familiarize yourself with the functionality available',
          path: '/docs/boomerang-flow/getting-to-know/workflows',
        },
        {
          title: 'How to Guide',
          description: 'Deep dive into how to perform different functions.',
          path: '/docs/boomerang-flow/how-to-guide/managing-workflows',
        },
        {
          title: 'Installing',
          description:
            'Learn what it takes, and how, to install your own instance.',
          path: '/docs/boomerang-flow/installing/installing',
        },
        {
          title: 'Tutorials',
          description: 'Explore practical examples on how to implement.',
          path: '/docs/boomerang-flow/tutorials/github-issues-bot',
        },
      ],
    },
    {
      title: 'Discover Boomerang Bosun',
      links: [
        {
          title: 'Introduction',
          description:
            'Get to know Boomerang Bosun, a policy-based continuous delivery gating system.',
          path: '/docs/boomerang-bosun/introduction/overview',
          image: 'automation-control-center',
        },
        {
          title: 'Architecture',
          description:
            'Provides the architecture, the patterns, technologies, and implementation.',
          path: '/docs/boomerang-bosun/architecture/overview',
          image: 'process-delivery-accelerator',
        },
      ],
    },
  ],
  solutionsConfig: [
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
      link: 'https://www.useboomerang.io/',
      title: 'useboomerang.io',
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

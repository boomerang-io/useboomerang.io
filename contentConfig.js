const config = {
  solutions: [
    {
      title: 'Boomerang',
      description:
        'Collection of open-source projects focused on cloud-native development and automation',
      path: '/docs/boomerang/introduction/overview',
      solution: 'boomerang',
      categoryOrder: [
        'introduction',
        'architecture',
        'getting-to-know',
        'installing',
      ],
    },
    {
      title: 'Boomerang Flow',
      description: 'Cloud-native workflow orchestration',
      path: '/docs/boomerang-flow/introduction/overview',
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
      description: 'Policy-based CICD gating',
      path: '/docs/boomerang-flow/introduction/overview',
      solution: 'boomerang-bosun',
      categoryOrder: [
        'introduction',
        'architecture',
        'getting-to-know',
        'installing',
      ],
    },
  ],
  docsQuickLinks: [
    {
      text: 'Getting Started',
      path: '/docs/boomerang-flow/introduction/overview',
    },
    {
      text: 'Tutorials',
      path: '/docs/boomerang-flow/tutorials/git-hub-issues-bot',
    },
    {
      text: 'Installing',
      path: '/docs/boomerang-flow/installing/pre-requisites',
    },
  ],
}

module.exports = config

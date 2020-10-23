module.exports = {
  siteMetaData: {
    title: 'Ulka',
    description: 'Documentation site for ulkajs',
    domain: 'https://ulkajs.github.io',
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  plugins: [
    'ulka-source-ejs',
    'ulka-plugin-sitemap',
    {
      resolve: 'ulka-plugin-autolink-headers',
      options: {
        hLevels: [1, 2, 3],
      },
    },
  ],
  contents: [
    {
      path: 'docs',
      generatePath: 'docs',
      template: 'docs.ulka',
      name: 'docs',
    },
    {
      path: 'tutorial',
      generatePath: 'tutorial',
      template: 'docs.ulka',
      name: 'tutorial',
    },
  ],
}

---
title: 'Configs'
page: 2
links:
  - title: 'What is ulka config file ?'
    link: '#what-is-ulka-config-file'
  - title: 'Understanding the config'
    link: '#understanding-the-config'
---

> This section is all about the `ulka-config.js` file that we added in previous section.

## What is ulka config file ?

Ulka config file is javascript file which exports object consisting of special keys with values which tells ulka to how and where to generate static html files.

<br />

## Understanding the config

We added something in ulka-config.js in previous section. How let's understand what each key is for.

```js
// ulka-config.js

module.exports = {
  siteMetaData: {
    title: 'UlkaJs',
    description: 'This is a starter for ulka js',
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  plugins: [],
  contents: {
    path: 'contents',
    generatePath: 'blog',
    template: 'blog.ulka',
  },
}
```

### siteMetaData

You can provide info about the site you are developing in siteMetaData. It will be available as variable in all files with `.ulka` extension.

### buildPath

buildPath is a folder relative to your project root directory where you want to generate your static html files.

### templatesPath

templatesPath is a folder inside `src` directory where templates files are located.

### pagesPath

pagesPath is a folder inside `src` directory where pages files are located.

### contents

contents accepts array of object. This tells ulka where to look for contents files, which template to use from `templatesPath` and path to generate the static files.

### plugins

plugins are described [here](/docs/plugins). We will adding some plugins in our portfolio app.

> We will get into pagesPath, templatesPath and contents more on upcoming sections.

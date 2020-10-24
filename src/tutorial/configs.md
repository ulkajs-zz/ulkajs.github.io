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

We added something in ulka-config.js in previous section. Now let's understand what each key is for.

```js
// ulka-config.js

module.exports = {
  siteMetaData: {
    title: 'Roshan Acharya',
    description: 'Hello, I am fullstack web developer from Nepal.',
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  plugins: [],
  contents: [
    {
      path: 'contents',
      generatePath: 'blog',
      template: 'blog.ulka',
      name: 'blog',
    },
  ],
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

contents accepts array of objects with four keys.

- path: It is the path to the contents from src directory
- generatePath: It is the path where html from contents is generated.
- template: It is the name of the template in templatesPath.
- name: Unique identifier of the contents.

### plugins

plugins are described [here](/docs/plugins). Later we will be adding some plugins to portfolio site.

> We will get into pagesPath, templatesPath and contents more on upcoming sections.

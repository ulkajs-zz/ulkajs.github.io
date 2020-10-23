---
title: 'Installation and setup'
page: 1
links:
  - title: 'Requirements'
    link: '#requirements'
  - title: 'Creating new project'
    link: '#creating-new-project'
---

> Welcome to ulkajs. This tutorial will guide you through creating a ulka site. Together we will create this [portfolio](https://something.thats.remaining.to.build) from scratch.

## Requirements

- Nodejs

  Visit [https://nodejs.org/](https://nodejs.org/) and download nodejs labelled as with LTS.

- Git

  Visit [https://git-scm.com/](https://git-scm.com/) and download git for your operating system. You don't need to know git but ulka uses git behind the scenes to create a new ulka project.

<br />

## Creating new project

Open your terminal and navigate to any folder where you want to create this project. Now create a new folder `my-portfolio`. Name doesn't matter, you can name it anything and navigate to that folder from your terminal.

```bash
mkdir my-portfolio
cd my-portfolio
```

To install `ulka` we need to create `package.json` files. So, let's create `package.json` file using npm.

```bash
npm init -y
```

Now, we can install `ulka` in our project.

```bash
npm i ulka
```

Before going to the next step, let's add some scripts to package.json to make our life a bit easier. Open package.json and replace scripts in package.json file with the following.

```json
"scripts": {
    "develop": "ulka develop",
    "build": "ulka build",
    "serve": "ulka serve"
},
```

Now, create `ulka-config.js` in your root directory and add the folloing content to the file.

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
  contents: {
    path: 'contents',
    generatePath: 'blog',
    template: 'blog.ulka',
  },
}
```

We will discuss about this `ulka-config` file and what's going on this file in next section.

---
title: 'Project Directory'
page: 3
---

> In this section we will discuss about the project directory.

`ulka-live-server` will look for changes in src directory. So, `ulka` requries `src` directory in the root of your project.

Let's create the src directory. Inside src directory create folders named `pages`, `templates` and `contents`.

These folders should be named as the value of `pagesPath`, `templatesPath` and `contents[0].path` from ulka-config.js.

In your `ulka-config.js`, you have this configuration. If you change these values then you should create the folder with the same name.

```js
module.exports = {
  templatesPath: 'templates',
  pagesPath: 'pages',
  contents: [
    {
      path: 'contents',
    },
  ],
}
```

Now, your project directory should look like this

```bash
├── node_modules
├── src
│   ├── pages
│   ├── templates
│   └── contents
├── ulka-config.js
├── package-lock.json
└── package.json
```

---
title: 'Quickstart'
page: 2
---

> This quick start is not intended for developers who are just getting into ulkajs. For step by step guide to create new ulka project, head to our [tutorial](/tutorial)!

<br />

## Creating a new project

```bash
npx ulka create ulka-site ulkajs/ulka-starter-default -i npm

cd ulka-site

npx ulka develop
```

Above command will download the default starter from github, install all the dependencies and start the ulka development server.

<br />

## Creating production build

```
npx ulka build
```

This command builds all the files into build path specified in `ulka-config.js`

<br />

## Serving the production build.

```
npx ulka serve
```

<br />

## Installing ulka globally

You can install ulka globally but it is not recommended as ulka is not completely ready and new versions with betters features will be released in shortly. You would never want to miss those, would you ?. If yes 😠 please go ahead and run the following command.

```
npm i -g ulka
```

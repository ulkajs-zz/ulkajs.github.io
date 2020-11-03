---
title: 'Global variables'
page: 6
---

Ulka will add some variables and functions to the context while rendering each file.

Open `pages/index.ulka` and at the last of the file add the following content.

```ulka
\{% console.log(this) %}
```

Make sure you have your development server running. If not enter `npm run develop` or `npx ulka develop` in your terminal.

A object with a lot of keys will be logged on the terminal. Some of them are functions and some of them are variables related to that file.

---

One of the key is `info` which includes the configs and some info about building process. Let's see how can you use that info in our `pages/index.ulka` file.

First of all remove the `\{% console.log(this) %}` code from `pages/index.ulka` file.

Now, let's edit the title of the page. In our `ulka-config.js` we have `siteMetaData.title` as `Roshan Acharya` or may be you have your own name. Let's output that title in our page title.

`index.ulka`

```ulka
<head>
    <title>Home | \{% info.configs.siteMetaData.title %}</title>
</head>
```

If you save the file and open your browser then you will see the title as `Home | Roshan Acharya`

Now, Let's do the same in `blog.ulka` and `about.ulka`

`about.ulka`

```ulka
<head>
    <title>About | \{% info.configs.siteMetaData.title %}</title>
</head>
```

`blog.ulka`

```ulka
<head>
    <title>Blog | \{% info.configs.siteMetaData.title %}</title>
</head>
```

> This was like the introduction to global variables in ulka. We will get into other variables and fuction in upcoming sections.

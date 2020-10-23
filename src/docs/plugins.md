---
title: 'Plugins'
page: 3
links:
  - title: 'What are ulka plugins ?'
    link: '#what-are-ulka-plugins'
  - title: 'Using ulka plugins'
    link: '#using-ulka-plugins'
  - title: 'Passing options to plugins'
    link: '#passing-options-to-plugins'
---

## What are ulka plugins ?

Ulka plugins are scripts that lets you to customize the data and the site. Plugins can add, modify and remove the data or files, plugins can add new features to the site, plugins can do anything you have on your mind.

## Using ulka plugins

Using ulka plugins is very straight forward. All you need to do is download the plugin and pass it to the plugins array in `ulka-config.js`

For eg: <br />
If you want to generate sitemap for your site, then there is a plugin for ulka called `ulka-plugin-sitemap`

To install it run the following command in root of your project.

```
npm i ulka-plugin-sitemap
```

Then in your `ulka-config.js` add `ulka-plugin-sitemap` to the plugins array

```js
// ulka-config.js

module.exports = {
    ...
    plugins: [`ulka-plugin-sitemap`]
}
```

<br />

## Passing options to plugins

Some plugins accepts options from the users. In that case you can pass the object and pass the name of plugins in the `resolve` key and options in the `options` key.

```js
// ulka-config.js

module.exports = {
    ...
    plugins: [
        {
            resolve: `ulka-plugin-sitemap`,
            options: {
                lastmod: true,
            }
        }
    ]
}

```

---
title: 'Using plugins'
page: 10
---

> Ulkajs supports plugins. To know more about ulka plugins. Visit [here](/docs/plugins)

For now let's use a plugin called `ulka-plugin-reading-time` in our site.
The complete instruction to use this particular plugin can be found [here](https://github.com/ulkajs/ulka-plugins/tree/main/ulka-plugin-reading-time#readme)

<br />

First of all we need to install the plugin.

```
npm i ulka-plugin-reading-time
```

To use it, we just need to pass it to plugins array in `ulka-config.js` file.

`ulka-config.js`

```js
module.exports = {
  plugins: ['ulka-plugin-reading-time'],
}
```

This plugin will insert a new key readingTime to the `values.fields` of each content. We can use that to display the reading time of our blog.
Let's goto file `templates/blog.ulka` and use that.

```ulka
<span class="blog-date">\{% new Date(values.frontMatter.date).toDateString() %}</span>

<!-- Change the above code in templates/blog.ulka to following  -->

<span class="blog-date">
\{% new Date(values.frontMatter.date).toDateString() %} | \{% values.fields.readingTime.text %}
</span>
```

If you navigate to any of your blog (for eg: `/blog/post-1`), then you can see there the reading time of that particular blog.

We can't cover every plugins in this tutorial. So, what you can do is look at the documentation of each plugins.

> Visit [/plugins](/plugins) to find all the plugins supported by ulka.

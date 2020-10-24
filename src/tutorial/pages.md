---
title: 'Pages'
page: 5
links:
  - title: 'Pages folder ?'
    link: '#pages-folder'
  - title: 'Creating pages'
    link: '#creating-pages'
  - title: 'Adding contents'
    link: '#adding-contents'
---

> In this section we will create some pages for our portfolio site.

## Pages folder ?

By default ulka will look for `*.ulka` files inside `configs.pagesPath` directory. All the found files are rendered and html files is generated from those files. Don't worry about the `.ulka` files yet. We will get into that soon.

**For eg:** If your pages folder have files as follows.

```bash
index.ulka

about\
    about-me.ulka

    about-you.ulka
```

Then ulka will generate the html files in `configs.buildPath` as follows.

```bash
index.html

about\
    about-me\
        index.html

    about-you\
        index.html
```

<br />

## Creating pages

Now, let's create pages for our site.

In the pages directory, create a new file `index.ulka`
And write something in that file, something like "Hello World". After that open your terminal and make sure you are in your project directory. If you are using `vscode` then you can press Ctrl and backticks at the same time to open the integrated terminal.

Then enter `npm develop`(or npx ulka deveop) in the terminal. This will start the live-reloading development server in port 3000 or any port available in your machine.

Now, open you browser and navigate to the url shown in your terminal. In browser you will see the content you have written in `index.ulka`. Now let's create about.ulka and blog.ulka and fill them with some dummy content (We will write some valid content later).
Now, if you navigate to `/about` or `/blog` in your browser you will see your dummy content.

If you following this tutorial then your project directory should look like this.

```bash
├── node_modules
├── src
│   ├── pages
│   |   ├── index.ulka
│   |   ├── about.ulka
│   |   └── blog.ulka
│   ├── templates
│   └── contents
├── ulka-config.js
├── package-lock.json
└── package.json
```

<br />

## Adding contents

Now let's replace dummy data inside out pages files with some html.

```html
<!-- index.ulka -->

<html>
  <!-- Header -->
  <!-- content -->
  <!-- footer -->
</html>
```

```html
<!-- about.ulka -->

<html>
  <!-- Header -->
  <!-- Content -->
  <!-- Footer -->
</html>
```

```html
<!-- blog.ulka -->

<html>
  <!-- Header -->
  <!-- Content -->
  <!-- Footer -->
</html>
```

We haven't done anything fancy yet. It's just pure html.

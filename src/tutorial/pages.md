---
title: 'Pages'
page: 4
links:
  - title: 'Pages folder ?'
    link: '#pages-folder'
  - title: 'Creating pages'
    link: '#creating-pages'
  - title: 'Adding contents'
    link: '#adding-contents'
---

> In this section we will create some pages for out portfolio site.

## Pages folder ?

By default ulka will look for `*.ulka` files inside `configs.pagesPath` directory. All the found files are rendered and html files in generated from those files. Don't worry about the `.ulka` files yet. We will get into that soon.

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
And write something in that file, something like "Hello World". After that open terminal and navigate into the folder. If you are using `vscode` then you can press Ctrl and backticks at the same time to open the integrated terminal.

Then enter `npm start` in the terminal. This will start the live-reloading development server in port 3000 or any port available and will also open browser.

In browser you will see the content you have written in index.ulka. Now let's create about.ulka and blog.ulka and fill them with some dummy content.
Now, if you navigate to `/about` or `/blog` you will see your dummy content.

Now, your project directory should look like this.

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

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body class="dark">
    <div class="container">
      <main>
        <nav>
          <div class="title">
            <a href="/">ulka js</a>
          </div>
          <ul id="nav-links">
            <li><a href="/about">about</a></li>
            <li><a href="/blog">blog</a></li>
          </ul>
        </nav>

        <h2>Hey, I am Roshan 👋</h2>
        <blockquote>creator of ulka js</blockquote>
        <br />
        If you have any queries regarding ulka ssg or this starter template dm
        me at
        <a
          style="text-decoration: underline;"
          href="https://twitter.com/acharyaroshanji"
          >twitter</a
        >
        <br />
        <br />
        You can find this starter template at
        <a
          style="text-decoration: underline;"
          href="https://github.com/ulkajs/ulka-starter-default"
          >Github</a
        >
      </main>
      <footer>&copy; 2020, Ulka Js</footer>
    </div>
  </body>
</html>
```

```html
<!-- about.ulka -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
  </head>
  <body class="dark">
    <div class="container">
      <main>
        <nav>
          <div class="title">
            <a href="/">ulka js</a>
          </div>
          <ul id="nav-links">
            <li><a href="/about">about</a></li>
            <li><a href="/blog">blog</a></li>
          </ul>
        </nav>
        <h1>This is about me.</h1>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
        maxime?
        <br />
        <blockquote>
          Yeah, that's all about me. Not complicated at all.
        </blockquote>
      </main>
      <footer>&copy; 2020, Ulka Js</footer>
    </div>
  </body>
</html>
```

```html
<!-- blog.ulka -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog</title>
  </head>
  <body class="dark">
    <div class="container">
      <main>
        <nav>
          <div class="title">
            <a href="/">ulka js</a>
          </div>
          <ul id="nav-links">
            <li><a href="/about">about</a></li>
            <li><a href="/blog">blog</a></li>
          </ul>
        </nav>
        <div id="blogs"></div>
      </main>
      <footer>&copy; 2020, Ulka Js</footer>
    </div>
  </body>
</html>
```

Let's not focus in styling for now. We will style our page later.

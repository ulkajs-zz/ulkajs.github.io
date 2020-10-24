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

By default ulka will look for `*.ulka` files inside `configs.pagesPath` directory. All the found files are rendered and html files are generated from those files. Don't worry about the `.ulka` files yet. We will get into that soon.

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
And write something in that file, something like "Hello World". After that open your terminal and make sure you are in your project directory.

Then enter `npm develop`(or `npx ulka deveop`) in the terminal. This will start the live-reloading development server in port 3000. If port 3000 is taken the ulka will choose any port available in your machine.

Now, open you browser and navigate to the url shown in your terminal. In browser you will see the content you have written in `index.ulka`.

Let's create `about.ulka` and `blog.ulka` inside pages directory and fill them with some dummy content. If you navigate to `/about` or `/blog` in your browser you will see your dummy content.

If you are following this tutorial then your project directory should look something like this.

```bash
├── node_modules
├── src
│   ├── pages
│   │   ├── index.ulka
│   │   ├── about.ulka
│   │   └── blog.ulka
│   ├── templates
│   └── contents
├── ulka-config.js
├── package-lock.json
└── package.json
```

<br />

## Adding contents

Now let's replace dummy data inside our pages files with some html.

`index.ulka`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <div class="container">
      <main>
        <nav>
          <div class="title">
            <a href="/">coderosh</a>
          </div>
          <ul id="nav-links">
            <li><a href="/about">about</a></li>
            <li><a href="/blog">blog</a></li>
          </ul>
        </nav>

        <h2>Hey, I am Roshan 👋</h2>
        <blockquote>creator of ulka js</blockquote>
        <br />
        This is my portfolio. yayyy!!!
      </main>
      <footer>&copy; 2020, coderosh</footer>
    </div>
  </body>
</html>
```

<br />

`about.ulka`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>About</title>
  </head>
  <body>
    <div class="container">
      <main>
        <nav>
          <div class="title">
            <a href="/">coderosh</a>
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
      <footer>&copy; 2020, coderosh</footer>
    </div>
  </body>
</html>
```

<br />

`blog.ulka`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Blog</title>
  </head>
  <body>
    <div class="container">
      <main>
        <nav>
          <div class="title">
            <a href="/">coderosh</a>
          </div>
          <ul id="nav-links">
            <li><a href="/about">about</a></li>
            <li><a href="/blog">blog</a></li>
          </ul>
        </nav>
        <div id="blogs">
          <!-- list of blog goes here -->
        </div>
      </main>
      <footer>&copy; 2020, coderosh</footer>
    </div>
  </body>
</html>
```

We haven't done anything fancy yet. It's just pure html.

---
title: 'Importing'
page: 8
links:
  - title: Why use $import
    link: '#why-use-dollarimport'
  - title: Passing variables
    link: '#passing-variables'
  - title: 'Importing markdown'
    link: '#importing-markdown'
  - title: 'Importing images'
    link: '#importing-images'
  - title: 'Importing other files'
    link: '#importing-other-files'
---

> In this section we will see how we can import a file from other file.

Every pages files has access to `$import` function which allows you to import file from different file to current file.

## Why use \$import ?

If you have noticed then we have repeated same code in different files. For eg: `<nav>...</nav>`. It's a good practise to separate repeated code into different file. Also if you wan't to change something in nav then you have to go through all the files and do the same changes. So, let's separate nav to different file.

Inside `src` folder create a new folder named `partials` (you can name it anything). Inside partials folder create a new file called `nav.ulka` and add the following content to the file.

```html
<nav>
  <div class="title">
    <a href="/">coderosh</a>
  </div>
  <ul id="nav-links">
    <li><a href="/about">about</a></li>
    <li><a href="/blog">blog</a></li>
  </ul>
</nav>
```

Now let's use this component to other ulka files.

Open `pages/index.ulka`, `pages/about.ulka`, `pages/blog.ulka`, `templates/blog.ulka` replace the nav with the following.

```
\{% $import('../partials/nav.ulka') %}
```

<br />

## Passing variables

Sometimes you want to pass variables to the partial.

For eg:
We want to highlight `about` in nav when we are in `/about`. To highlight certain links nav need to know the file which imports it.

For that we can pass second argument to \$import function.

Open `nav.ulka` and make the following changes.

```
<nav>
  <div class="title">
    <a style="\{% path === '/' ? 'color:crimson': '' %}" href="/">coderosh</a>
  </div>
  <ul id="nav-links">
    <li><a style="\{% path === '/about' ? 'color:crimson': '' %}" href="/about">about</a></li>
    <li><a style="\{% path === '/blog' ? 'color:crimson': '' %}" href="/blog">blog</a></li>
  </ul>
</nav>
```

Above code checks for path with respective anchors and adds a style of color on true.

If you save nav.ulka right now, you are going to get error in your terminal about path not being defined.
Now let's goto `pages/blog.ulka`, `pages/about.ulka`, `pages/index.ulka` and `templates/blog.ulka` and pass an object as second argument to `$import` function.

`pages/blog.ulka`

```
\{% $import('../partials/nav.ulka', { path: "/blog" }) %}
```

`pages/about.ulka`

```
\{% $import('../partials/nav.ulka', { path: "/about" }) %}
```

`pages/index.ulka`

```
\{% $import('../partials/nav.ulka', { path: "/" }) %}
```

`templates/blog.ulka`

```
\{% $import('../partials/nav.ulka', { path: "/blog" }) %}
```

After changing these four files your error should be gone. If not restart the server using `npx ulka develop`.

And if you navigate to the any valid path then the respective nav link should be highlighted.

---

Now we learned about importing ulka from another file. Let's see how can we use \$import to import other format of files.

## Importing markdown

```
\{% $import('../contents/index.md') %}
```

The above code with return the html rendered from the markdown.

<br />

## Importing images

```
\{% $import('../images/img.png') %}
```

Above code will return a base64 url of the image.

<br />

## Importing other files

```
\{% $import('../files/some.txt') %}
```

Above code will return the plain text.

If file isn't a image or the ext of file isn't .ulka or .md then the \$import function will act like `fs.readFileSync('your_path', "utf-8")`

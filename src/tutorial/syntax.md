---
title: 'Ulka syntax'
page: 4
links:
  - title: 'Variables'
    link: '#variables'
  - title: 'Loops'
    link: '#loops'
  - title: 'Conditionals'
    link: '#conditionals'
  - title: 'Importing Modules'
    link: '#importing-modules'
---

Ahhh.... a new templating language.

Don't worry, you are going to like this because there is nothing like a new templating language about ulka, it's all javascript. You write variables, loops, conditions, functions all in javascript. Javascript code you write inside ulka is executed in node's `vm` instance. So, you can write pure nodejs code.

Ulka uses [ulka-parser](https://github.com/ulkajs/ulka-parser) to render `*.ulka` files.

Almost every templating engine has a syntax or tag which indicates a block where you can write that templating language. In ulka you can write javascript inside two curly braces and percent signs:

```ulka
\{% /* I am javascript */ %}
```

- If what we write inside `\{% %}` is javascript then do I even need to read this section ?

  No, but i still recommend you yo go through this section.

<br />

## Variables

```ulka
\{% const name = "Roshan Acharya" %}

\{% console.log(name) %} // Roshan Acharya
```

In ulka constant variables are not exacly constant.

```ulka
\{%
    const name = "Roshan"
    name = "coderosh"
    name = 12
%}
```

The above code not throw any error because before running the javascript [ulka-parser](https://github.com/ulkajs/ulka-parser) will replace all `const` and `let` with `var` keyword.

<br />

## Loops

```ulka
\{% const langs = ["javascript", "typescript", "graphql"]; %}

<div>
    \{%
        langa.map(lang => `<h1>I love ${lang}.</h1>`)
    %}
</div>
```

This above code will output.

```html
<div>
  <h1>I love javascript.</h1>
  <h1>I love typescript.</h1>
  <h1>I love graphql.</h1>
</div>
```

If javascript inside the ulka tag returns array then the array is joined by empty space (`""`).

<br />

## Conditionals

```ulka
\{% const ulkaIsAwesome = true %}

\{% ulkaIsAwesome ? `<h1>😍 You are also awesome, thank you.</h1>`: `<h1>💔😥</h1>` %}
```

The above code will output.

```html
<h1>😍 You are also awesome, thank you.</h1>
```

If you wan't to use `if/else` statement then you can use `IIFE`.

```ulka
\{%
    (() => {
        if(true){
            return "<h1>You are awesome.</h1>";
        }else {
            return "<h1>You are still awesome.</h1>";
        }
    })()
%}
```

The above code will output.

```html
<h1>You are awesome.</h1>
```

<br />

## Importing modules

You can import nodejs standard modules, npm modules or your own commonjs module using require.

```ulka
\{%
    const fs = require('path')
    path.parse("/some/path/index.js")
%}

\{%
    const dayjs = require('dayjs')
    dayjs().format()
%}

\{%
    const data = require('./data')
    console.log(data)
%}
```

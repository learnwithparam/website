---
title: Styling a react app using Emotion CSS in JS library - An introduction to Emotion
date: '2019-08-13'
modifiedDate: '2019-08-13'
published: false
page: false
series: 'Hooked with react'
category: ['Series']
tags: ['React', 'JavaScript', 'CSS in JS', 'Emotion']
description: How to style your react app using emotion library. It has several ways to style the app. We will learn how to create global styles, styled components and CSS in JS through set of emotion libraries.
---

> Consider this as a standalone article. You don't need to go through everything in the series if you already know react and basics of react hooks.

This blog post will be an introduction to emotion. We style a react app and meanwhile learn the concepts of styled components.

So far, We have created a react app which search google books and load it on the page and also have a books detail page for each books,

You can see it in action here,

https://codesandbox.io/s/books-detail-page-by2nj

#### Install emotion

There are two packages, one is `core` and one which powers the styled components `@emotion/styled`. We will see examples for both.

```bash
yarn add @emotion/core
yarn add @emotion/styled
```

### Global styles in emotion

Before starting any site styles, we always need some reset to normalize browser default styles. I am going to use `normalize.css`. Lets install that,

```bash
yarn add normalize.css
```

There are several ways to add external stylesheet in `create-react-app`. I am going to use an unusual technique to showcase how it can be done using emotion.

Emotion has a `Global` component, which will create global styles for your app. Lets add it in our search page.

```jsx
/* App.js */

// Adding global CSS
import { Global, css } from "@emotion/core";
// importing the text from normalize.css file
import normalize from "normalize.css";

...

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      ...
    </>
  );
};

...

```

Here we have added the normalize css along with background color for body element. We can add any common global CSS like this in emotion. But it is an anti-pattern to add common CSS when you can always extract out styles along with the component and reuse shared components when needed.

### Styling the header using emotion styled react components

- logo text
- extending container
- input with hover, focus elements
- button component

### Styling loader component using CSS in JS

- css props
- hack to make it work on `create-react-app`
- refactoring loader to make it reusable on both the pages

### Shared error component using emotion without react

- Error text will be a separate file

### Media queries in emotion to style the page for responsiveness

- mobile layout

### Theming to share common colors and styling the cards

- color

### Sharing styled components

- container
- header

Hope this article helps you to learn emotion library and its capabilities.

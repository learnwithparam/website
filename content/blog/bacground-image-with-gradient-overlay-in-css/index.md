---
title: Background image with gradient overlay in CSS
date: '2019-04-09'
modifiedDate: '2019-04-09'
published: true
page: false
series: 'CSS Nuggets'
tags: ['CSS']
---

Background images with overlay are very common UI feature. It will be seen more on Hero, Cards components.

There are several ways to achieve it. Most preferred way is to make use of CSS pseudo elements to assign a background color with proper opacity. This method doesn't need extra HTML elements and it works in all modern browsers.

## Background image with Overlay

```scss
.bg-img-overlay {
  width: 600px;
  height: 600px;
  position: relative;
  // Image as background
  background: url('https://unsplash.it/600x600') center center no-repeat;
  background-size: cover;

  &:before {
    // Pseudo element will only render if it has a content property
    content: '';
    // Overlay should occupy the full width and height of parent image container
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // Overlay background-color
    background-color: #000000;
    // Overlay opacity, else overlay won't be transparent and show the image
    opacity: 0.6;
  }
}
```

https://codepen.io/Param-Harrison/pen/yrgXvy

> Credits to [unsplash](https://unsplash.com) and their contributors for generously providing images

## Background image with gradient Overlay

Its same as above. Only change will be, `background-color` of the overlay need to be replaced with `background-image` with linear gradient.

```scss
.bg-img-overlay {
  background: ...;
  &:before {
    ...
    // Overlay background-color
    background-color: linear-gradient(to bottom right, #002f4b, #dc4225);
    ...
  }
}
```

https://codepen.io/Param-Harrison/pen/EvEmmW

> Note: I have used `vw` and `vh` for width and height to make it look beautiful in codepen. You can change the image width and height property and see the example working for different sizes.

Its very simple and useful technique in creating many UI components 😎

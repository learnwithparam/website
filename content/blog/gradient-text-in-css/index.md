---
title: Gradient text style using CSS
date: '2019-04-03'
modifiedDate: '2019-04-06'
published: true
page: false
category: ['Tutorial']
tags: ['CSS']
---

Gradient backgrounds started the trend, nowadays websites have more gradient colors for many elements after gradient become widely supported on modern browsers.

One such aspect is, styling text with gradient color. Let see it in action

```scss
.gradient-text {
  // set the background color
  background: linear-gradient(to right, #ff8a00 0%, #da1b60 100%);
  // background color masked along the text and clip away the rest
  -webkit-background-clip: text;
  // make fill color to transparent so that masked background color will be shown
  -webkit-text-fill-color: transparent;
}
```

### Browser compatibility

- This is only supported in webkit based browsers. For other browsers, color property can be the fallback option to render color related to the gradient color.
- `-webkit-text-fill-color` is a non standard CSS, so have fallback color property to support every browser without causing accessibility issues on non supported browsers.

https://codepen.io/Param-Harrison/pen/pGgGxp

Apart from IE, all major browser support this solution. Hope you learn a trick to show a text with gradient color on your site 😋

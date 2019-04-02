---
title: Vanilla JS equivalent for jQuery Ready
date: '2019-01-26T18:44:46.156Z'
published: true
tags: ["You don't need jQuery"]
---

> jQuery has solved the problems of neutralizing side effects in JS rendering across different browsers for last decade. Now web browsers and rendering engines are much more smarter and increasingly support standard javascript API.

Document ready function is the starting point for browser javascript for more than decades. With growing trends in modern web development and much better browser support for vanilla JS API's, We can replace reduce jQuery dependency on our sites.

```javascript
// Longer version in jQuery
$(document).ready(function() {
  // DOM events and DOM manipulations
});
```

```javascript
// Shorter version in jQuery
$(function() {
  // DOM events and DOM manipulations
});
```

Lets see the example of ready function in vanilla JS

```javascript
function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function() {
  // your code here
});
```

This snippet is supported on modern browsers and old IE browsers too. You can restrict support based on requirement.

`DOMContentLoaded` only waits till the DOM element gets loads, not wait for stylesheet, images and other network calls. Next time if you use jquery on a site, make sure to evaluate whether you need extra 30+ kb on page load just for basic JS operations 😎

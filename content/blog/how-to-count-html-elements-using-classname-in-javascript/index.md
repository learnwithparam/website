---
title: Vanilla JS equivalent for counting number of child elements using className
date: '2019-08-10'
modifiedDate: '2019-08-10'
published: true
page: false
series: You don't need jQuery
category: 'Series'
tags: ['jQuery', 'JavaScript']
description: How to count the number of child elements using classnames in javascript. It is very easy with jQuery, but do you know how to do it in javascript, lets learn it today.
---

Sometimes, we learn lot of bigger things but miss on small learnings. I want to create small posts on vanilla JS to do things without libraries or frameworks on simple pages.

It is very easy to count number of elements using jquery. First we will see it in jQuery and then on vanilla JS.

```html
<ul>
  <li class="li-node">Children 1</li>
  <li class="li-node">Children 2</li>
  <li class="li-node">Children 3</li>
  <li class="li-node">Children 4</li>
  <li class="li-node">Children 5</li>
</ul>
```

### Count using jQuery

```javascript
$('.li-node').length;
```

### Count using Vanilla JS

```javascript
document.querySelectorAll('.li-node').length;
```

`document.querySelectorAll` select all the elements with class name and returns an array of html element, then we can use the array `length` property to find the count.

https://codepen.io/Param-Harrison/pen/ZgqpWd

Hope you learned a simple trick in vanilla JS 😎

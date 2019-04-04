---
title: Scale elements on hover using CSS
date: '2019-04-02T10:36:08.652Z'
published: true
tags: ['CSS Nuggets']
---

Often we get a requirement to scale images on hover or content block on hover, it can be achieved using CSS easily using `transform` property

```scss
// Growing in size
.grow:hover {
  transform: scale(1.2);
}
// shrinking in size
.shrink:hover {
  transform: scale(0.8);
}
```

Here `transform: scale` property alone can't help the effect to be smooth, in order to get smooth effect, we need to add some `transition` to the elements.

```scss
.grow,
.shrink {
  transition: all 0.3s ease-in-out;
}
```

#### Check out this solution in codepen

https://codepen.io/Param-Harrison/pen/MLypze

#### some of the practical use cases in UI

- scaling avatar images on hover
- scaling images inside card components
- scaling quotes block in articles

This technique has wide range of browser support without vendor prefixes. Feel free to use it next time when needed in your UI 👍

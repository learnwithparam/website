---
title: Center align content vertically and horizontally in CSS
date: '2019-04-04T08:12:03.284Z'
published: true
tags: ['CSS Nuggets']
---

Center aligning content are usual need in development. There are several ways to achieve it depends on the use cases.

Some of the techniques in CSS (without any scripts) are

- using **CSS transform**
- using **flexbox**

## CSS transform

```scss
.content {
  position: relative;
  top: 50%;
  left: 50%;
  // shifts or translate the center point (X, Y) by (X - 50% of outerWidth, Y - 50% of outerWidth)
  transform: translate(-50%, -50%);
}
```

#### Check out this solution in codepen

https://codepen.io/Param-Harrison/pen/ErPyva

#### Edges cases with this approach

- It works very well for centering content block with **fixed width** in both directions ✅
- For non fixed width, the content block assumes 100% of parent's width. It expands the whole width of parent container horizontally. You can check this by removing width for content in codepen example ❌
- this technique won't work if the content is **inline** level element, it only works for **block level** elements ❌

## Modern flexbox way

```scss
.parent {
  display: flex;
  // centering along main axis - X axis - Horizontal
  justify-content: center;
  // centering along cross axis - Y axis - Vertical
  align-items: center;
}
```

#### Check out this solution in codepen

https://codepen.io/Param-Harrison/pen/ZwQBxR

> **Note**: main and cross axis depends on `flex-direction` property. By default flex-direction is `row`. If it is set as `column`, then main axis is Y and cross axis is X.

This approach works on almost every use cases perfectly

- fixed width of content block ✅
- non fixed width of content block ✅
- content can be inline level element or block level element ✅

#### some of the practical use cases in UI

- Modals
- Hero Header section (jumbotron section)
- Video background with content
- Cards with unequal heights and centrally aligned content

Flexbox is so powerful and you can easily develop more styles and components using it. Its supported on all major browsers, no excuse to not use it 😊

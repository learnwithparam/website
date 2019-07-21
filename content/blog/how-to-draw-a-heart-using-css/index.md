---
title: How to draw a heart using CSS3
date: '2019-07-18'
modifiedDate: '2019-07-18'
published: true
page: false
category: ['Tutorial']
tags: ['CSS']
series: 'Drawing and animate heart shape using CSS3'
description: We can learn how to use border radius and transform property to draw a Heart shape using CSS
---

This is part 1 of drawing and animating heart shape using CSS3. In this article, we will learn how to draw the heart shape first using pure CSS tricks

Shapes like heart are achievable using pure CSS because it contains curved rounded corners at the top and slanting lines in the bottom.

Lets get into how we can create it step by step

- Create a simple square container (50px X 50px)
- rotate the container 45deg. This will make the bottom slanting lines
- Now in-order to make the two upper curves in the heart shape, we can make use of pseudo `before` and `after` element.

Lets dig into the code and see how it goes step by step.

#### Creating Heart container

A 50 X 50 square which will then be rotate 45deg using CSS transform property. This inverted square will look like a diamond shape.

```scss
.heart {
  background-color: #fff;
  // Square with size 50px
  width: 50px;
  height: 50px;
  position: relative;
  // Rotate 45deg to make it looks like diamond
  transform: rotate(45deg);
}
```

https://codepen.io/Param-Harrison/pen/MNwXYE

#### Create the pseudo elements

Create the same size pseudo element with border radius 50%. Now these element won't be visible because its hidden under the Heart container.

Inorder to make it visible, change the top and left position for the respective psuedo elements.

- left for the `before` element
- top position for the `after` element

We need to move half the size of heart container to get the heart shape.

```scss
.heart {
  &::before,
  &::after {
    position: absolute;
    content: '';
    // Pseudo elements of same size as container
    width: 50px;
    height: 50px;
    background-color: #fff;
    // It will make the pseudo element as circle
    border-radius: 50%;
  }

  &::before {
    // Only reveal half the circle to look like left side top of heart
    left: -25px;
  }

  &::after {
    // Only reveal half the circle to look like right side top of heart
    top: -25px;
  }
}
```

https://codepen.io/Param-Harrison/pen/BXaqXP

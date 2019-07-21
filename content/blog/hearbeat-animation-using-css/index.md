---
title: Heart beat animation using CSS
date: '2019-07-21'
modifiedDate: '2019-07-21'
published: true
page: false
category: ['Tutorial']
tags: ['CSS']
series: 'Drawing and animate heart shape using CSS3'
description: Learn how to CSS animations on a element using keyframes and animation property. Here, we learn how to create a heart beat animation using CSS3
---

In the first part, we learned [how to draw heart shape using CSS3](/blog/how-to-draw-a-heart-using-css)

Now lets see, how to animate it to create a heart beat animation.

These are the steps to create the animation

- Create a keyframe animation for heart beat
- scale the heart to bigger and smaller size using transform property at different intervals.
- Create a infinite animation on the container using the created keyframe.

#### Creating the CSS keyframes for animating heart

Inorder to give the heart throbbing effect, we scale the heart at different intervals. Its upto us to play around the intervals to get the desired effect.

> Keep in mind, while drawing the heart shape, we have rotated the container with 45deg. We need to keep that in our keyframe transform, else the shape with be tilted during animation

```scss
@keyframes animateHeart {
  // scale down and scale up faster in irregular intervals to get the throbbing effect
  0% {
    transform: rotate(45deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
}
```

#### Add the keyframes to the Heart container

Here animation property accepts three values,

```scss
.heart {
  transform: rotate(45deg);
  // animation: <animation-name> <animation-duration> <animation-iteration-count>
  animation: animateHeart 1.2s infinite;
}
```

1. keyframes which we defined earlier `animateHeart` is the `animation-name`
2. `animation-duration` defines how long do we need to run each animation. If we define 2s, then each time it runs for 2s
3. `animation-iteration-count` will run that many times. If we define it as `infinite`, then it will run the animation infinitely after every X seconds which is defined in the `animation-duration` column

Checkout the codepen for complete code along with the heart shape.

https://codepen.io/Param-Harrison/pen/MNwXJr

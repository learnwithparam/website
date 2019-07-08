---
title: Different types of routers in react router
date: '2019-04-12'
modifiedDate: '2019-04-12'
published: true
page: false
series: 'Deep dive into React Router'
category: ['Series']
tags: ['React', 'JavaScript']
description: There are several types of router supported by react router package. We will see the use cases for each types briefly in this article.
---

In the [part 1](/blog/basic-routing-in-react-router/), we discussed about basic routing. We have used `BrowserRouter` as our router.

There are few more different types of router in react router. Here we will see when to use those routers.

## MemoryRouter

```jsx
// https://example.com (same url for all routes)
import { MemoryRouter as Router } from 'react-router-dom';
```

- A router which doesn't change the URL in your browser instead it keeps the URL changes in memory
- It is very useful for testing and non browser environments ✅
- But in browser, It doesn't have history. So you can't go back or forward using browser history ❌

https://codesandbox.io/s/wnq10opj68

## HashRouter

```jsx
/*
  Hashed routes, you can go in history.
  https://example.com/#/
  https://example.com/#/about
*/
import { HashRouter as Router } from 'react-router-dom';
```

- A router which uses client side hash routing.
- Whenever, there is a new route get rendered, it updated the browser URL with hash routes. (eg., `/#/about`)
- Hash portion of the URL won't be handled by server, server will always send the `index.html` for every request and ignore hash value. Hash value will be handled by react router.
- It is used to support legacy browsers which usually doesn't support HTML pushState API ✅
- It doesn't need any configuration in server to handle routes ✅
- This route isn't recommended by the team who created react router package. Use it only if you need to support legacy browsers or don't have server logic to handle the client side routes ❌

In their own words,

> As this technique is only intended to support legacy browsers, we encourage you to configure your server to work with `BrowserHistory` instead.

https://codesandbox.io/s/yq6onnlj4v

## BrowserRouter

```jsx
/*
  You can go in history
  https://example.com/
  https://example.com/about
*/
import { BrowserRouter as Router } from 'react-router-dom';
```

- The widely popular router and a router for modern browsers which user HTML5 pushState API. (i.e., `pushState`, `replaceState` and `popState` API).
- It routes as normal URL in browser, you can't differentiate whether it is server rendered page or client rendered page through the URL.
- It assumes, your server handles all the request URL (eg., `/`, `/about`) and points to root `index.html`. From there, BrowserRouter take care of routing the relevant page.
- It accepts `forceRefresh` props to support legacy browsers which doesn't support HTML5 pushState API ✅

https://codesandbox.io/s/9j8l8325qy

Hope these examples and post helps to understand the basics of different types of routing in react router. Next we will move on to more advanced features in react router 🤗

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series)

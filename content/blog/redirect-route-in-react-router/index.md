---
title: Redirect routes in react router
date: '2019-06-18'
modifiedDate: '2019-06-18'
published: false
page: false
series: 'Deep dive into React Router'
tags: ['React', 'React Router']
---

Redirecting is used primarily to check whether the user is authorized to visit this page, if not redirect them to relevant page.

Its very easy to do it in react applications using react routers `Redirect` component.

Lets see a basic example of how redirect component works in react router. Lets build a simple page which redirects to different pages based on the condition.

We will extend our router example by adding,

- Auth route page
- It will redirect to logged in page if the props `isLoggedin` is true
- It will display a simple message as not logged in if the props `isLoggedin` is false

Lets add the route first,

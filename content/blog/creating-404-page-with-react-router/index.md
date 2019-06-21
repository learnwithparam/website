---
title: Creating 404 page in react using React Router
date: '2019-05-08'
modifiedDate: '2019-05-08'
published: true
page: false
series: 'Deep dive into React Router'
category: ['Series']
tags: ['React', 'JavaScript']
---

We have learned how to create [dynamic URL in react router](/blog/dynamic-pages-in-react-router/) and also we learned how to handle [query params in react router](/blog/how-to-handle-query-params-in-react-router/) and pass those values to the page component in our previous posts.

In this part, we will learn how to show a 404 page if there is no route matching the URL.

You can find the last part and the latest codebase with codesandbox [here](/blog/how-to-handle-query-params-in-react-router/)

Run the application and visit any non-existing route, for example `/404-not-found`

Currently, you wouldn't see any page component rendered. Let's handle it and show a default page if there is no route which matches the path.

It's fairly simple to achieve in react router. Inside react router component, create a route without path defined. And make sure to place the code at the bottom of all routes, so that router will check all the routes and fallback if no match found.

```jsx{5-9,21}
// App.js

...

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        ...
        <Link to="/users">Users</Link>
        <Link to="/search?q=react">Search</Link>
        ...
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={NoMatchPage} />
      </Router>
    </section>
  );
};

...
```

Visit any random URL, you will see a simple 404 page. But wait, lets check whether other pages work normally without breaking. It won't!

Check on `about` link, you will see both about and 404 page get rendered. Because first router matched the exact route for `/about` path and then it traverses to the bottom and load the 404 route since this route have no path defined.

React router provide a component called `Switch` to break once a route get resolved and not load any other route component below it.

Its fairly easy to implement. Enclose all the route inside `Switch` component. lets do it and make the 404 page works without error.

```jsx{4,12,17}
// App.js

...
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
...

const App = () => {
  return (
    <section className="App">
      <Router>
        ...
        <Switch>
          <Route exact path="/" component={IndexPage} />
          ...
          <Route exact path="/search" component={SearchPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </section>
  );
};

...

```

This `Switch` component will check for the matching route, if a route is already matched, it breaks checking the next routes. By this way, we will avoid rendering 404 route for all pages.

https://codesandbox.io/s/m4n21l3m38

Thats it folks, Hope you learned a trick of creating 404 page for your react app using react router 🤗

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series) and the code for this section [here](https://github.com/learnwithparam/react-router-series/commit/b3d80a2e92e1bccdcfba219d086e782b5f762a4c)

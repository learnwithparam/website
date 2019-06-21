---
title: How to pass props to the route component in React router
date: '2019-06-17'
modifiedDate: '2019-06-17'
published: true
page: false
series: 'Deep dive into React Router'
category: ['Series']
tags: ['React', 'JavaScript']
---

We have seen several examples and use cases in react router. One among them is passing props to the route component directly.

Its very easy to achieve in react router, Lets create a new route for passing props to the component.

```jsx{4-8,16,19}
// App.js
...

const PropsPage = () => {
  return (
    <h3>Props Page</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        ...
        <Link to="/404-not-found">404</Link>
        <Link to="/props">Passing Props</Link>
        <Switch>
          ...
          <Route exact path="/props" component={PropsPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

export default App;
```

Right now, we just added the component and new page. Lets pass a props `title` to the page.

There are two ways to pass props. First one is easy way,

## Passing function as a component props in Route component

```jsx
...

const PropsPage = ({ title }) => {
  return (
    <h3>{title}</h3>
  );
};

...

<Route exact path="/props-through-component" component={() => <PropsPage title={`Props through component`} />} />

```

This will work but this is not the recommended way by react router. Why? Because

- Internally, react router use `React.createElement` to render the component passed to the component props. If we pass a function to it, it will create a new component on every render instead of just updating the existing component.
- In a small apps with fairly non complex pages, it won't impact the performances. But for large apps with multiple state changes within the page will degrade the performance of the page due to unnecessary re-rendering.

React router provides an easy solution for this case. Instead of passing function through `component` props, we can pass it through `render` props. While passing our own props, we also need to pass the default props send to the render props by react router. Lets see it in our example,

```jsx
...

<Link to="/props-through-render">Props through render</Link>
...

<Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />

```

This is the recommended way to pass props in react router.

Its that simple. If you want to see the whole example, check it out here.

https://codesandbox.io/s/props-in-component-react-router-g2im5

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series) and the code for this section [here](https://github.com/learnwithparam/react-router-series/commit/45efaedd0f0b2e74f231fe131f1bea327a0a96ac)

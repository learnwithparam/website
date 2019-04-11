---
title: Basic Routing in React using React Router
date: '2019-04-10'
modifiedDate: '2019-04-10'
published: true
series: 'Deep dive into React Router'
tags: ['React', 'React Router']
---

React is widely used library for client side web applications. In any web applications, there will be multiple pages. Routing the URL properly and load different pages based on route parameters is a general requirement.

There is an awesome npm package which takes all the complexity to serve the purpose of routing in React. `react-router-dom` is one of the widely used react library.

## Basic routing

Lets create two simple pages

- Home page (`/`)
- About page (`/about`)

Create a simple react app using `create-react-app`.

```jsx
// App.js
import React from 'react';

const App = () => {
  return (
    <section className="App">
      <h1>React Routing Example</h1>
    </section>
  );
};

export default App;
```

Lets create two pages. In simple terms two functional react component.

```jsx
// App.js
...

const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};

const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

...
```

Before diving deep into react router code, First lets understand, what are all needed for routing a page in react application.

- There will be links to navigate between pages
- Define each Routes to the pages
- Define a Router which will check whether the requested URL exist in the defined Routes

Lets create the links and routes using react router's `Link` and `Route` components.

```jsx{3,9-14}
// App.js
...
import { Link, Router as BrowserRouter, Route } from 'react-router-dom';
...

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route path="/" component={IndexPage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </section>
  );
};
```

Let's go through each line separately

```jsx
import { Link, Router as BrowserRouter, Route } from 'react-router-dom';
```

Here we are importing three components,

- `Link` component will create HTML link to the pages.
- `Route` component will define the routes.
- `Router` component will handle the logic of routing. When user click the link, it check whether this link exist in route definition. If it exists, then the router will change the URL in browser and route will render the correct component.

> BrowserRouter is one type of router, it is also the widely used router. It uses HTML5 push state underneath the component to route your pages.
> We will discuss in more details about different types of router later in this series.

```jsx
<Router>
  // Link with URL
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</Router>
```

`Router` should be the parent component enclosing `Link` and `Route`. So that it can handle the Routing. If we place the Link or Route outside it won't work. It will throw an error.

`Link` accept `to` props which defines the URL it want to link.

#### Why do we need Link component, why not a HTML anchor tag with href?

- HTML `a` tag will create a server side link. So each time, a user click on the route, it won't check the router or the routes. Instead it simply redirect the page in the browser to that route.
- Whereas Link, check the router and the router check the route and load the component without reloading the page in the browser. Thats why it is called as client side routing. It doesn't load the page from the server while clicking on the Link component.

```jsx
// Route with definition
<Route path="/" component={IndexPage} />
```

Here `Route` have path and component props. `component` props helps to render the component when user comes to this route. `path` props define the url path to be matched when user visits the page.

If you go ahead and check whether our routes are working, it will work. But it have a small glitch.

If you click about link, it will render both `IndexPage` and `AboutPage` component in its page. Why 🤔

Because the path defined for about is `/about`. Here router traverses through the route definitions from top to bottom. First checks the Route with path `/` and the about URL have `/`, so it renders that component. And then it checks the next Route `/about`, that also matches, so it renders About component.

How to match exact route? Its very simple, the question itself have the answer 😎. Use `exact` props in Route.

```jsx{9-10}
...

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
    </section>
  );
};

...
```

`exact` prop will help to match the route only if the whole route matches as it is, else it won't render the component.

Now both the component will render fine and the Link will work properly.

Thats all folks, you have already completed the part 1 of Deep dive into React Router series. Hope you enjoyed and learned few things for your next big react app 🤗

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series) and the codebase for this section [here](https://github.com/learnwithparam/react-router-series/commit/3db2531748a6f314f108c4b1024118c2d89e41a3)

---
title: How to handle query params in React Router
date: '2019-04-22'
modifiedDate: '2019-04-22'
published: true
page: false
series: 'Deep dive into React Router'
tags: ['React', 'React Router']
---

In [part 3](/blog/dynamic-pages-in-react-router/), we learned how to create dynamic URLs in react router. In this part, we will learn how to handle query params in the URL.

Lets create a new route for search page with query params,

```jsx{3-7,16,21}
// App.js
...
const SearchPage = () => {
  return (
    <h3>Search Page</h3>
  );
}

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/search?q=react">Search</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/search" component={SearchPage} />
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

...
```

Its our usual way of creating a link, route definition and a component. If you closely look at it, there is no difference between static route and route with query params.

We don't need to define query params in the route definition because by default it will be handled by the react router and send the query params into a props to the component.

It won't match the path if we define the path like this `/search/?q=:searchValue`. You can try it in the codesandbox.

Now, we need to access all the query params we pass to the URL in the component. In our previous [part](/blog/dynamic-pages-in-react-router/), we talked about how react router pass two params `match` and `location`.

- For dynamic routes, react router pass the route params to `match` props
- For routes with query param, the info about query params will be send through `location` props

Lets see, what information it sends in the `location` props

```jsx
...

const SearchPage = ({ match, location }) => {
  return (
    <p>
      <strong>Location Props: </strong>
      {JSON.stringify(location, null, 2)}
    </p>
  );
}

...
```

You can see on the search page,

```json
Location Props: { "pathname": "/search", "search": "?q=react", "hash": "", "key": "allc40" }

```

You can clearly see, react router pass the query params info in `location.search`. If you add more query params, you with get everything in the same string value. eg., `?q=react&limit=3`

In order to get each value, you can use your own helper library or query params npm package so that you can get the values as nice key value pair objects.

> One such package is `yarn add qs`. But there are many, you can choose which one suits your URL

Lets show the `location.search` value in the component.

```jsx
const SearchPage = ({ match, location }) => {
  return (
    <p>
      <strong>Query Params: </strong>
      {location.search}
    </p>
  );
};
```

https://codesandbox.io/s/n7q6kw9n8m

Thats it folks, see you in next blog posts soon. Keep supporting and help me teach more and learn more 🤗

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series) and the code for this section [here](https://github.com/learnwithparam/react-router-series/commit/9c3e6a38528f34269158da6b24fade7a862299ec)

---
title: Dynamic pages in react router
date: '2019-04-15'
modifiedDate: '2019-04-15'
published: true
series: 'Deep dive into React Router'
tags: ['React', 'React Router']
---

In [part 1](/blog/basic-routing-in-react-router/), we learn how to create basic static pages in react router. Now we are going to learn how to create dynamic URLs in react router.

We are going to create two routes,

- Users Route (static routes to display all links to individual users)
- User Route - Each user will be identified by their unique ID and the URL will pass this ID and the component will display the proper user content

Lets create a dummy `users` data

```jsx
const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];
```

Lets create a new routes for all users and single user in our App.js file.

```jsx{4-8,16,18}
// App.js
...

const UsersPage = () => {
  return (
    <h3>Users Page</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

...
```

We have created a link to users page and also the the route definition for users page along with its associated component (`UsersPage`).

Lets add links to each users in the UsersPage (`/user/1`, `/user/2`, `/user/3`)

```jsx
// userId will be Array index + 1
const UsersPage = () => {
  return (
    <>
      <h3>Users Page</h3>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};
```

> `<></>` this is short form for `<React.Fragment></React.Fragment>`. You can read more about fragments [here](https://reactjs.org/docs/fragments.html)

Now we have the users page with links. If you click on the link, it will lead to no page because we didn't create a route definition for each user.

We can create each separate route definition like this

```jsx
<Route exact path="/user/1" component={UserPage1} />
<Route exact path="/user/2" component={UserPage2} />
```

NO! 😱. I am just lying, we all know, this won't scale for dynamic pages with more dynamic data. Lets see how to create dynamic route definitions in react router. Its very easy.

```jsx
<Route path="/user/:userId" component={UserPage} />
```

Here `:userId` is the dynamic route params in the route definition. It get passed to the component. You can get access to the props called `userId` in `UserPage` component.

Lets add this code in our example.

```jsx{4-8,19}
// App.js
...

const UserPage = () => {
  return (
    <h3>User Page</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

...
```

Now our user page URL is working. But the page doesn't display any information about the user. Let's display the information.

### How to get access to the route params in the component

React router pass two props to all the component

- `match` props
- `location` props

Lets just check what information those props have by consoling it in the component

```jsx{3,8,12}
// App.js

const UserPage = ({ match, location }) => {
  return (
    <>
      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
    </>
  );
};
```

Now lets see what those props have,

```jsx
/*
  URL: /user/1
  userId: 1
*/

// Match Props
{ "path": "/user/:userId", "url": "/user/1", "isExact": true, "params": { "userId": "1" } }

// Location Props
{ "pathname": "/user/1", "search": "", "hash": "", "key": "7e6lx5" }
```

If we closely look at the content, our interested `userId` params is in `match.params.userId`.

Lets use the params in the `UserPage` component and display information about the User.

```jsx
...

// Getting the userId from match props and display the user from the users array
const UserPage = ({ match, location }) => {
  const { params: { userId } } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {users[userId - 1].name}
      </p>
    </>
  );
};

...
```

https://codesandbox.io/s/p3ozwy018j

```jsx
// Object destructuring in JavaScript
const {
  params: { userId },
} = match;
```

> We have used object destructuring in the code. You can read more about it [here](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm)

Thats it folks, we have successfully finished developing dynamic routes and know how to access the route params in the component for dynamic routes. Hope you are enjoying this series, stay tuned for more advanced features 🤗

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series) and the code for this section [here](https://github.com/learnwithparam/react-router-series/commit/f6935df3e43e250ecdc6aa036e09f384b7548231)

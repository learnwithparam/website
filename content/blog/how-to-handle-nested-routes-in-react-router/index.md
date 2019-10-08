---
title: Learn how to handle nested routes and nested content using react router
date: '2019-10-03'
modifiedDate: '2019-10-03'
published: true
page: false
series: 'Deep dive into React Router'
category: 'Series'
tags: ['React']
description: Most of the SaaS single page applications have nested routes. We will see how to build nested routes in a react application using react router library
---

So far, we have seen most of the basic use cases for react router. Today, we will see, how to handle nested routing in react router. Before dive deep into the example. FIrst lets understand, what is nested routes?

#### Example for nested routes

- Basic route,

```bash
www.example.com/users
```

This route shows all users

- First level nested routes,

```bash
www.example.com/user/param
www.example.com/user/miguel
```

These example routes shows specific user. Here `param` and `miguel` are the `userId` used to retrieve data about the specific user.

- Second level nested routes,

```bash
www.example.com/user/param/details
www.example.com/user/param/employer
www.example.com/user/miguel/details
www.example.com/user/miguel/employer
```

`www.example.com/user/param/employer`
This route retrieves basic information about the user and also specific employer information about the user.
So basically, this is nested routes. Second level routes are dependent on the first level route parameter (`userId: param`)

Lets get started with the actual example using react router. We are going to show users and then show their details in a tab layout.

### Nested routes using react router

For the example, we are going to use some example data

```jsx
const users = [
  {
    name: 'Param',
    description:
      'Guy who writes lorem ipsum all the time when he needs content placeholder',
    tabs: [
      {
        name: 'personal',
        content: {
          firstname: 'Param',
          lastname: 'Harrison',
        },
      },
      {
        name: 'employer',
        content: {
          name: 'Jobbatical',
          city: 'Tallinn, Estonia',
        },
      },
    ],
  },
  {
    name: 'Miguel',
    description:
      'the best guy doing deployment in his own clusters of kubernetes world',
    tabs: [
      {
        name: 'personal',
        content: {
          firstname: 'Miguel',
          lastname: 'Medina',
        },
      },
      {
        name: 'employer',
        content: {
          name: 'Skype',
          city: 'Arizona, US',
        },
      },
      {
        name: 'other',
        content: {
          country: 'Mexico',
          age: 30,
        },
      },
    ],
  },
];
```

So basically this example data have few users and each user have different number of tabs, each tab have a name and content to show inside the tab.

We are going to build these routes using the data,

_First level routes_

- https://y5pt4.csb.app/user/Param
- https://y5pt4.csb.app/user/Miguel

_Second level routes (showing tabs)_

- https://y5pt4.csb.app/user/Param/tab/personal
- https://y5pt4.csb.app/user/Param/tab/employer
- https://y5pt4.csb.app/user/Miguel/tab/personal
- https://y5pt4.csb.app/user/Miguel/tab/employer
- https://y5pt4.csb.app/user/Miguel/tab/other

#### Showing first level route using react router

```jsx
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// App have the first level route defined and the userName param is passed to the UserPage component
function App() {
  return (
    <div className="App">
      <Router>
        <h3>Top level routes</h3>
        <ul className="unlist">
          {users.map((user, index) => {
            return (
              <li key={index}>
                <Link to={`/user/${user.name}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
        <Route path="/user/:userName" component={UserPage} />
      </Router>
    </div>
  );
}
```

- We loop through the user data and show link to go to each user details page.
- Also define the route schema for users. `userName` is the param passed to `UserPage` component.

```jsx
const UserPage = ({ match }) => {
  // Get the userName params from the match props passed by react router
  const {
    params: { userName },
  } = match;
  const user = users.find(({ name }) => name === userName);

  // Basic info about the particular user with `userName`
  return (
    <div>
      User Name: <strong>{user.name}</strong>
      <p>{user.description}</p>
    </div>
  );
};
```

- `UserPage` component will just show the basic information of the particular user.
- React router pass the match props, we retrieve the user info using the userName value from our data.

### Showing nested routes as tab links

```jsx
const UserPage = ({ match }) => {
  ...

  /*
  - match props provide the current URL through match.url - `user/param`
  - match props provide the current path through match.path - `user/:userName`
  */

  return (
    <div>
      ...
      <p>Dyanmic nested route</p>
      <ul className="unlist">
        {user.tabs.map((tab, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/tab/${tab.name}`}>{tab.name}</Link>
            </li>
          );
        })}
      </ul>
      {/* Define the nested Route inside the component, If the route matches this path, it will display the content of the component at the same location - nested content */}
      <Route path={`${match.path}/tab/:tabName`} component={TabPage} />
    </div>
  );
};
```

- `match` props from react-router provides the current url through `match.url`
- `match.url` can be used to construct the nested routes.
- Here we construct the nested routes using each user tabs info from the data.
- `match.path` provides the pathname. This will be used to define the nested route schema.

Why to use `match.path` instead of `match.url`?

Because `match.path` contains the actual path - i.e., `user/:userName`. whereas `match.url` is resolved url - i.e., `user/Param`

Thats why, `match.url` is used in `Link` and `match.path` is used for `Route` definition.

```jsx
// `${match.path}/tab/:tabName` - match.path provides the current path and then we add the nested route schema to it. Here the nested route is `tab/:tabName`
<Route path={`${match.path}/tab/:tabName`} component={TabPage} />
```

- `tabName` is the route param, we pass to `TabPage` component. It uses it to find the exact tab and display the content of the tab. Lets see it in code,

### Showing nested routes and nested content

Lets write the `TabPage` component,

```jsx
const TabPage = ({ match }) => {
  // we get the params - userName and tabName from match props
  const {
    params: { userName, tabName },
  } = match;

  // find the tab using both the params
  const tab = users
    .find(({ name }) => name === userName)
    .tabs.find(({ name }) => name === tabName);

  // Show the content for that particular tab
  return (
    <div>
      Tab Name: <strong>{tab.name}</strong>
      <h6>Tab content: </h6>
      <ul>
        {Object.keys(tab.content).map((key, index) => {
          return (
            <li key={index}>
              <span>{key} : </span>
              <strong>{tab.content[key]}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
```

- match props will share all the params in the URL `userName`, `tabName`
- find the tab in our data using both the parameters
- Show the info from the tab contents

Thus, we have shown nested routes and nested content through this example.

See the example in action here,

https://codesandbox.io/s/nested-routes-react-router-y5pt4

In our next tutorial, we will see how to highlight the routes when selected in react router.

Hope you learned some trick to use react router for your nested routing needs. Stay tuned for more content I share through [twitter](https://twitter.com/learnwithparam) and subscribe to my email newsletter 🤗

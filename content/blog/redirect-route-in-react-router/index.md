---
title: Redirect routes in react router
date: '2019-07-25'
modifiedDate: '2019-07-25'
published: true
page: false
series: 'Deep dive into React Router'
category: ['Series']
tags: ['React', 'JavaScript']
description: Redirecting a page based on some condition is an usual need in a react web application. React router provides an easy way to achieve it. Lets learn how to do that in this article.
---

Redirecting is used primarily to check whether the user is authorized to visit this page, if not redirect them to relevant page.

Its very easy to do it in react applications using react routers `Redirect` component.

Lets see a basic example of how redirect component works in react router. Lets build a simple page which redirects to different pages based on the condition.

We will extend our router example by adding,

- Simple page demonstrating `/old-route` to `/new-route`

#### Simple Redirect example

Adding the redirect route to our react router example,

In this example. We will create two URL

- `/old-route` is the old URL which will be redirected to new URL `/new-route` using react router's `Redirect` component.

```jsx
// Import Redirect component from react-router
import { Route, Redirect } from 'react-router';

// Pass from URL and to URL for the Redirect component
<Redirect from="/old-route" to="/new-route" />
// Handle the to Route and load new page
<Route exact path="/new-route" component={RedirectPage} />

// Add link to the old route and see the page displays the new url onClick
<Link to="/new-route">Redirecting to New page</Link>

// Page component
const RedirectPage = () => {
  return (
    <h3>Redirect Page</h3>
  );
};
```

Now check the example for simple redirect route here

https://codesandbox.io/s/redirect-route-simple-yewt5

You can see the old URL in the link is redirected to new URL and the new URL get shown in the browser.

### Complex redirect example based on props

For this, we will build a small page which,

- redirects to dashboard if the props `isLoggedin` is true or
- display a simple message as not logged in if the props `isLoggedin` is false

Lets build the page first,

```jsx
const AuthPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  } else {
    return <h3>User not loggedin</h3>;
  }
};

const DashboardPage = () => {
  return <h3>Dashboard Page</h3>;
};
```

Lets define the route for `Auth` page and `Dashboard` page,

```jsx
// Route definition for Dashboard
<Route exact path="/dashboard" component={DashboardPage} />
// Route definition for not loggedin page by passing IsLoggedIn props as false
<Route exact path="/auth-not-loggedin" render={(props) => <AuthPage {...props} isLoggedIn={false} />} />
// Route definition for loggedin page by passing IsLoggedIn props as true. This route will automatically redirect to dashboard because of the condition
<Route exact path="/auth-loggedin" render={(props) => <AuthPage {...props} isLoggedIn={true} />} />


// Lets add the links to navigate to these pages
<Link to="/auth-not-loggedin">Not Loggedin</Link>
<Link to="/auth-loggedin">User Loggedin</Link>
```

Hola, you can check it now. The route redirects and change the browser URL to dashboard when we pass the `isLoggedIn` props as `true`. And displays a simple not loggedin message if the props is not set.

You can check out the functionality here,

https://codesandbox.io/s/redirect-route-complex-x6o6v

Thats it folks, hope this helps you understand how redirect in react router works. See you soon with more on react series 🤗

You can checkout the codebase for this series [here](https://github.com/learnwithparam/react-router-series) and the code for this section [here](https://github.com/learnwithparam/react-router-series/commit/e354527b3c43917112e36101fbd4f5f66924252e)

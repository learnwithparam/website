---
title: How to sync props to state properly in React Hooks
date: '2019-08-02'
modifiedDate: '2019-08-02'
published: true
page: false
category: 'Tutorial'
tags: ['React', 'JavaScript']
description: It is easy to pass props to state in react hooks, but do you know how to sync props changes to state changes after initialization. It is also easy, lets see that in this article.
---

First of all, you need to atleast know the basic of `useState` and `useEffect`. So that you can understand the example better.

We are going to see two cases

1. How to pass props to state in React Hooks
2. How to sync props to state in React Hooks

### Passing props to state using useState Hooks

```jsx
import React, { useState } from 'react';

const Profile = props => {
  const [profileState, setProfileState] = useState(props);
  return (
    <div>
      <p>
        <strong>Name:</strong>
        {profileState.name}
      </p>
      <p>
        <strong>Email:</strong>
        {profileState.email}
      </p>
    </div>
  );
};

export default Profile;
```

Its a simple component which accepts `props`. We pass this props as `initialState` to useState.

Now, what will happen if the props get changed and does the state get changed and re-render?

No, it won't. The state will remain the same, `useState` won't initialize on props change. Let see it in example.

```jsx
const App = () => {
  const [state, setState] = useState({
    name: 'Param',
    email: 'param@gmail.com',
  });

  const handleChange = () => {
    setState({
      name: 'Vennila',
      email: 'vennila@gmail.com',
    });
  };

  return (
    <div className="App">
      <Profile {...state} />
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
};
```

Click on the button, it won't change the profile. You can console the props updated but not the UI.

```jsx
const Profile = props => {
  const [profileState, setProfileState] = useState(props);
  console.log(profileState, props);

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {profileState.name}
      </p>
      <p>
        <strong>Email: </strong>
        {profileState.email}
      </p>
    </div>
  );
};
```

The console will show this after the button gets clicked

```jsx
// profileState - { name: "Param", email: "param@gmail.com" }
// props - { name: "Vennila", email: "vennila@gmail.com" }
```

Even though the props get updated, the useState didn't reset the state.

### How to sync props to state in React Hooks

This is perfect use case for `useEffect`. Whenever `props` change, we will set the state inside useEffect.

Lets change the example and see,

```jsx
...

  useEffect(() => {
    setProfileState(props);
  }, [props]);

...

```

In this way, whenever props get changed, it will set as the state inside useEffect. useEffect is primarily to handle side effects and this is one of those example for using it.

Check out the example here

https://codesandbox.io/s/props-to-state-react-hooks-o2wd2

Thats all folks, we will see more examples and use cases for react hooks soon 😋

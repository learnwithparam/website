---
title: Error handling while using native fetch API in JavaScript
date: '2019-09-16'
modifiedDate: '2019-09-16'
published: true
page: false
category: 'Tutorial'
tags: ['JavaScript']
description: We will see, how to handle fetch API errors using promises and async await syntax in JavaScript
---

Fetch API is very powerful. We can easily send Ajax request using browser fetch API. But it has its own disadvantages too.

One major disadvantage is error handling when using fetch.

Example,

```js
fetch(url).then((response) => {
  // Always gets a response, unless there is network error
  // It never throws an error for 4xx or 5xx response 😟
}).catch((error) => {
  // Only network error comes here
});
```

- It always gets a response, unless there is a network error
- All 4xx, 5xx don't get into catch block

### Error handling in fetch API using promises

First lets see, without handling errors,

```js
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(jsonResponse => {
    // do whatever you want with the JSON response
  });
```

- this is bad, because even if the url sends a 404, we send that as response without breaking it.

We can rectify it by throwing error and allow only response which has status code between 200 and 299.

```js
fetch(url)
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then((jsonResponse) => {
    // do whatever you want with the JSON response
  }).catch((error) => {
    // Handle the error
    console.log(error);
  });
```

This will fix the problem, you can even extract out the checking status part as a function which returns a promise or throw error.

```js
function CheckError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

// Now call the function inside fetch promise resolver
fetch(url)
  .then(CheckError)
  .then((jsonResponse) => {
  }).catch((error) => {
  });
```

### How to handle fetch errors using async-await syntax

It is same as promises, only the syntax will change. First we will see without error handling,

```js
const response = await fetch(url);
const jsonResponse = await response.json();
console.log(jsonResponse);
```

example with error handling,

```js
const response = await fetch(url);
if (response.status >= 200 && response.status <= 299) {
  const jsonResponse = await response.json();
  console.log(jsonResponse);
} else {
  // Handle errors
  console.log(response.status, response.statusText);
}
```

Hope you learnt some tricks in using fetch API, stay tuned for more JavaScript tricks 😇

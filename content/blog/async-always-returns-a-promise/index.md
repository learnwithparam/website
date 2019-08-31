---
title: Async functions always return a promise - Lets deep into the Async world
date: '2019-08-31'
modifiedDate: '2019-08-31'
published: true
page: false
category: 'Tutorial'
tags: ['JavaScript']
description: Async await become integral part of any modern application in Javascript. We have used async for all asynchronous operation and return the promise ourself. But do you know, how async works? Lets see it in detail.
---

Async functions are a way to make the asynchrounous operation synchronously by awaiting for the resopnse. Lets see it in the example straight away,

```js
// Normal async function - Returning promise
const getCats = async () => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve([
          {
            name: 'tiger',
          },
          {
            name: 'jimmy',
          },
        ]),
      2000
    )
  );
};

// Self envoking async function
(async () => {
  console.log(getCats()); // Promise { <pending> }
  const cats = await getCats();
  console.log(cats); // [ { name: 'tiger' }, { name: 'jimmy' } ]
})();
```

As you can see, we are returning a promise in our example.

Now lets see the next example by returning direct JSON array,

```js
// async function - Returning JSON
const getCatsJson = async () => {
  return [
    {
      name: 'tiger',
    },
    {
      name: 'jimmy',
    },
  ];
};

// Self envoking async function
(async () => {
  console.log(getCatsJson()); // Promise { [ { name: 'tiger' }, { name: 'jimmy' } ] }
  const catsJson = await getCatsJson();
  console.log(catsJson); // [ { name: 'tiger' }, { name: 'jimmy' } ]
})();
```

As you can check the console log, even though we returned a JSON object from the async function. It was wrapped as a promise. So we still need to await and resolve the promise.

You can always resolve the async without await using promise way,

```js
getCatsJson().then(console.log); // [ { name: 'tiger' }, { name: 'jimmy' } ]
```

You can check the examples here,

https://codesandbox.io/s/async-promise-return-value-fpis9

Hope, this helps you to understand how async returns the value by wrapping it as a Promise 😋

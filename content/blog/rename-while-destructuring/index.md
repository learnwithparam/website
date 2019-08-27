---
title: Rename variables while destructuring
date: '2019-08-27'
modifiedDate: '2019-08-27'
published: true
page: false
category: 'Tutorial'
tags: ['JavaScript']
description: Destructuring is a great feature and has many use cases. Today, we will see how to rename a variable while destructuring and some use cases for it.
---

In my last tutorial, I covered destructuring in JavaScript briefly. If you haven't know, what is destructuring and how to set default values while destructuring. Please check it out [here](/blog/default-values-while-destructuring-in-javascript/)

Before jumping on to renaming inside destructuring, we will see few of the cases when this is needed.

- When the object returned from server doesn't have better key names. Example,

```js
const obj = {
  prop1: 'Param',
  prop2: 26,
};
```

In the above snippet, nobody knows what is prop1 and prop2 without knowing the details of the backend. If we destructure and use the same variable, it will make the front end code unreadable and undebuggable later on.

- When there is similar object props in two different objects. Example,

```js
const obj1 = {
  name: 'Param',
  age: 26, // same key `age` present in obj2
};

const obj2 = {
  firstName: 'Ahmed',
  lastName: 'John',
  age: 29, // same key `age` present in obj1
};
```

Now, both the object have `age` key, we can't destructure both the variable as age. Instead, we need to rename either one of those.

Lets see how to do that,

for the example 1, this is how it can be destructured and renamed.

```js
const { prop1: name, prop2: age } = obj;
console.log(name, age); // Param, 26
```

for the example 2,

```js
const { age: ageOfParam, ...restOfParam } = obj1;
const { age: ageOfAhmed, ...restOfAhmed } = obj2;

console.log(ageOfParam, ageOfAhmed); // 26, 29
```

Is in't it the syntax very easy to use? 😎

```js
// Syntax

const { propKey: NewVariableName } = Object;
```

Destructuring is very powerful in javascript, it has lot of use cases and make the developers life easier with several usecases.

Checkout the examples here,

https://codesandbox.io/s/rename-while-destructuring-6qrob

---
title: Default values while Destructuring in JavaScript
date: '2019-08-18'
modifiedDate: '2019-08-18'
published: true
page: false
category: 'Tutorial'
tags: ['JavaScript']
description: Destructuring object or array are great features in es6. There are several use cases for it. In this article, we will learn how to set default values while destructuring.
---

Just before showing the example, we will see how to do destructuring in basic examples

#### Destructuring Objects

```js
// for simple object
const obj = {
  name: 'Param',
  city: 'Tallinn',
  age: 20,
  company: 'Learn with Param OU',
};

const { name, age, ...rest } = obj;

console.log(name); // Param
console.log(age); // 20
console.log(rest); // { city: 'Tallinn', company: 'Learn with Param OU', }
```

#### Destructuring Arrays

```js
const personArr = [
  {
    name: 'Param',
  },
  {
    name: 'Ahmed',
  },
  {
    name: 'Jesus',
  },
];

const [first, ...restOfArr] = personArr;

console.log(first); // { name: 'Param' }
console.log(restOfArr); // [{ name: 'Ahmed' }, { name: 'Jesus' }]
```

### Destructuring not defined variable

What will happen if we destructure an undefined key in the object. Example,

```js
const firstObj = {
  name: 'Param',
  city: 'Tallinn',
  age: 20,
  company: 'Learn with Param OU',
};

const { firstName, city } = firstObj;

console.log(firstName); // undefined
console.log(city); // Tallinn
```

### Default value while destructuring

Now we can pass in default value while destructuring, it will take the default if it is undefined. Example,

```js
const secondObj = {
  firstName: 'Param',
  country: 'Estonia',
};

const { lastName = 'Harrison', country } = secondObj;

console.log(lastName); // Harrison
console.log(country); // Estonia
```

Here in this example, even though `lastName` is not defined in object, it takes the default value we assigned while destructuring.

This will be very useful when you want to have default values set in your application even if there is no value in the object.

#### Edge case while setting default value in destructuring

This has an edge case though, destructuring will work well with default value if the value is undefined. It won't work for other non true values, for example `null`, `0`, 'false'.

Let see it in example,

```js
const edgeCase = {
  why: undefined,
  what: null,
  how: 0,
  where: false,
};

const {
  why = 'why',
  what = 'what',
  where = 'where',
  how = 'how',
  notFound = 'Not Found',
} = edgeCase;

console.log(why); // why
console.log(what); // null
console.log(how); // 0
console.log(where); // false
console.log(notFound); // Not Found
```

Hope you enjoyed and learnt some tricks about destructuring in javascript 😎

Checkout the whole example here,

https://repl.it/@ParamHarrison/destructuring-with-default-values

---
title: How to group an array of objects through a key using Array reduce in javascript
date: '2019-08-06'
modifiedDate: '2019-08-06'
published: true
page: false
category: ['Tutorial']
tags: ['JavaScript']
description: Understand how to group an array of objects using one of its key. We will achieve this function using array reduce in javascript.
---

Often we use `Array.map`, `Array.filter` and `Array.findIndex`. There are several other methods available in javascript Array.

We will see basic example of `Array.reduce` before diving into creating the `groupBy` function using array reduce.

### How reduce works

> In plain english, it reduce the array into single value. The single value can be number, string, object or another array.

Lets see an usual example of array reduce,

```js
// Person array with name and Age
const person = [
  {
    name: 'Jim',
    color: 'blue',
    age: 22,
  },
  {
    name: 'Sam',
    color: 'blue',
    age: 33,
  },
  {
    name: 'Eddie',
    color: 'green',
    age: 77,
  },
];

// Add their sum of ages
const sumOfAges = person.reduce((sum, currentValue) => {
  return sum + currentValue.age;
}, 0);

console.log(sumOfAges); // 132
```

- `reduce` accept initial value, here in our sum of ages, we pass `0` as the initial value
- `reduce` iterate over each value and add the sum each time with their previous sum value. Thus we return the sum at each step and that sum get added with the next age value.
- the final sum value will be returned at the end of iteration.

### How to groupBy using reduce in Javascript

For the person array, lets group the objects using the color value. In our object, there are two blue color object and one green color object.

```js
// Accepts the array and key
const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

// Group by color as key to the person array
const personGroupedByColor = groupBy(person, 'color');
```

Steps to create the `groupBy` function,

- create an object as initial value for our result object
- inside the array reduce, create an array for each distinct key value and push the currentValue if the key value present in the currentValue

```js
// this step of code can be restructured to multiple lines, see below for the multi line code
(result[currentValue[key]] = result[currentValue[key]] || []).push(
  currentValue
);

// This is how the above code in multiple line
if (!result[currentValue[key]]) {
  result[currentValue[key]] = [];
}
result[currentValue[key]].push(currentValue);
```

the end result after grouping will look like this,

```json
{
  "blue": [
    {
      "name": "Jim",
      "color": "blue",
      "age": 22
    },
    {
      "name": "Sam",
      "color": "blue",
      "age": 33
    }
  ],
  "green": [
    {
      "name": "Eddie",
      "color": "green",
      "age": 77
    }
  ]
}
```

You can checkout the example here,

https://codesandbox.io/s/groupby-using-array-reduce-8zmi7

`console.log` at each step to understand better about how array reduce handle each iteration.

This is how the object get created at each iteration

```js
// Initial value for `result`
{}
// After first iteration
{ blue: [ { name: 'Jim', color: 'blue', age: 22 } ] }
// After second iteration
{ blue:
   [ { name: 'Jim', color: 'blue', age: 22 },
     { name: 'Sam', color: 'blue', age: 33 } ] }
// After final iteration
{ blue:
   [ { name: 'Jim', color: 'blue', age: 22 },
     { name: 'Sam', color: 'blue', age: 33 } ],
  green: [ { name: 'Eddie', color: 'green', age: 77 } ]}
```

Hope you learned a trick of how to use array reduce and also how to create `groupBy` function using array reduce 😎

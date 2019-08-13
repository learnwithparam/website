---
title: Union of objects in javaScript based on unique value - Merging worlds using javaScript
date: '2019-08-13'
modifiedDate: '2019-08-13'
published: true
page: false
category: ['Tutorial']
tags: ['JavaScript']
description: In modern javascript, its very easy to merge two objects, but do you know how to merge more complex objects or arrays based on unique values on two different objects. Lets leran that technique together.
---

In this tutorial, we will see examples of

- Merging of two or more objects
- Merging of object into an Array
- Merging two arrays
- Union of objects based on unique key
- Union of objects in an array based on unique key value

### Merging of two or more objects using object destructuring

Using es6 object destructuring, it is very easy to merge two objects.

```javascript
const firstObj = { name: 'Vennila' };
const secondObj = { age: 26 };
// object destructuring to merge two objects
const mergedObj = { ...firstObj, ...secondObj };
console.log(mergedObj);
// result - { name: 'Vennila', age: 26 }
```

What if both the object has same key, it simply merge the last objects value and have only one key value.

```javascript
const firstObjWithSameKey = { name: 'Vennila', age: 26 };
const secondObjWithSameKey = { name: 'Param', city: 'Tallinn' };

const mergedObjWithSameKey = {
  ...firstObjWithSameKey,
  ...secondObjWithSameKey,
};
console.log(mergedObjWithSameKey);
// result - { name: 'Param', age: 26, city: 'Tallinn' }
```

### Merge objects into an array of objects

So far we have seen basic examples, now lets get one step deeper. How to merge objects into an array of objects. It uses the same technigue of destructuring but with the arrays.

```javascript
const arrayOfObj = [
  {
    name: 'Ironman',
  },
  {
    name: 'Spiderman',
  },
];
const objToMergeInArray = {
  name: 'Captain America',
  from: 'Marvel Universe',
};
const mergedArrayOfObj = [...arrayOfObj, objToMergeInArray];
console.log(mergedArrayOfObj);
/* result
[ 
  { name: 'Ironman' },
  { name: 'Spiderman' },
  { name: 'Captain America', from: 'Marvel Universe' } 
] 
*/
```

### Merging two arrays

Merging two different array of objects is same as above, only difference will be, you need to destructure both the arrays.

```javascript
[...arrayOfFirstObj, ...arrayOfSecondObj];
```

### Union of two objects based on key

We already covered this, its that simple. If the values are matched automatically, the objects will take the last value and merge the object. See example of `mergedObjWithSameKey`. It merged the name property and display the last object's name value.

### Union of objects in an array based on unique key value

This is where it gets interesting. Take this example

```javascript
const firstArr = [
  {
    id: 'marvel',
    winner: 'Captain America',
  },
  {
    id: 'DC',
    winner: 'Aquaman',
  },
];

const secondArr = [
  {
    id: 'freelancer',
    winner: 'Wonder women',
  },
  {
    id: 'marvel',
    winner: 'Param', //why not
    strenths: ['fly', 'fight', 'speed'],
  },
];
```

if you check both the array, both have the key value `id: marvel`. How to merge both the objects and show the result like this

```javascript
// expected result

const mergedArray = [
  {
    id: 'marvel',
    winner: 'Param', //why not
    strenths: ['fly', 'fight', 'speed'],
  },
  {
    id: 'DC',
    winner: 'Aquaman',
  },
  {
    id: 'freelancer',
    winner: 'Wonder women',
  },
];
```

Lets do it using modern javascript techniques.

Before doing it, we need to understand one javascript object type called `Set`.

> Set is a new object type introduced in es6, it is used to create collection of distinct values.

We are going to use Set to merge our arrays, lets see it in action.

> Set is a new object type introduced in es6, it is used to create collection of distinct values.

#### Simple example for Set

```javascript
// Simple example for Set
const a = [44, 33, 22];
const b = [33, 22, 11];
const AandB = [...a, ...b];
console.log(AandB); // [ 44, 33, 22, 33, 22, 11 ]
const distinctValuesInAandBSet = new Set(AandB);
console.log(distinctValuesInAandBSet); // Set { 44, 33, 22, 11 }
const setToArray = [...distinctValuesInAandBSet];
console.log(setToArray); // [ 44, 33, 22, 11 ]
```

This is very straightforward example, we just merge a one dimensional array and create the distinct set of values out of it by using `Set`.

Lets use the same principle for our array of objects.

```javascript
const mergedArray = [...secondArr, ...firstArr];
// mergedArray have duplicates, lets remove the duplicates using Set
let set = new Set();
let unionArray = mergedArray.filter(item => {
  if (!set.has(item.id)) {
    set.add(item.id);
    return true;
  }
  return false;
}, set);
console.log(unionArray);
/*
[ { id: 'freelancer', winner: 'Wonder women' },
  { id: 'marvel',
    winner: 'Param',
    strenths: [ 'fly', 'fight', 'speed' ] },
  { id: 'DC', winner: 'Aquaman' } ]
*/
```

In the `mergedArray`, second array was destructured first because, we are using filter to filter out the values from one array if the `id` value is already present in the second array.

I heard you, this is not purely union all the content. It doesn't deep merge all the key values from both the array.

Even though it is `unionBy` value of `id`. This example doesn't work for all use cases.

for example, what if we need to merge the two different object only by `id` value. This example will just return the result of second array object, but it won't get the property from first array object

```javascript
const firstArray = [
  {
    id: 'marvel',
    winner: 'Captain America',
    weakness: ['emotion'],
  },
];

const secondArray = [
  {
    id: 'marvel',
    name: 'Param',
  },
];
```

A true `unionBy` value should return

```javascript
/* expected result
  [
    {
      id: "marvel",
      winner: "Captain America",
      weakness: ["emotion"],
      name: "Param",
    }
  ]
  */

/* Our actual result
  [
    {
      id: "marvel",
      name: "Param",
    }
  ]
  */
```

We will see how to do `unionBy` key values and also deep merge the object from two arrays in next tutorial.

For this article, we already achieved how to merge objects and how to union array of objects based on key values in javascript.

But the drawback with this approach is,

- it filters out the unique key values from first array
- it also changes the ordering inside the array, not exactly merge with same ordering

https://codesandbox.io/s/union-of-objects-de8uc

Stay tuned, hope you enjoy this tutorial 😋

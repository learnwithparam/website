---
title: Do you know spread operator in Javascript object is mutable?
date: '2019-12-30'
modifiedDate: '2019-12-30'
published: true
page: false
category: 'Tutorial'
tags: ['JavaScript']
description: Spread operator becomes the defacto solution for creating immutable object in javascript. But make sure to have the caution, spread operator does mutate objects in specific cases. We will see it briefly.
---

We often see simple example of cloning an object using spread operator. Even though, it is true that spread operator help to clone a simple object without mutating.

For example,

```js
// Simple object
const simpleObject = {
  firstName: 'param',
  lastname: 'Harrison',
  isMarried: true,
};
// Cloned simple object
const clonedSimpleObject = { ...simpleObject };

simpleObject.firstName = 'ABC';
clonedSimpleObject.firstName = 'XYZ';

console.log(simpleObject.firstName === clonedSimpleObject.firstName); // False
```

Here we have successfully created a simple object which is not mutated using spread operator.

#### Partially mutated object

Let's see a complex object example which mutates partially. We will create a nested object with primitive data types and non primitive data types like array

```js
const nestedObject = {
  firstName: 'Param',
  like: ['coffee', 'tea', 'javascript'],
};

// Clone using simple spread operation
const clonedNestedObject = { ...nestedObject };

nestedObject.like.push('sleeping');
clonedNestedObject.like.push('swimming');
clonedNestedObject.firstName = 'Vennila';

console.log(nestedObject.like === clonedNestedObject.like); // True
console.log(nestedObject.like, clonedNestedObject.like); // Both are same array - ["coffee", "tea", "javascript", "sleeping", "swimming"]
console.log(nestedObject.firstName === clonedNestedObject.firstName); // False
```

Here we create a `nestedObject` and cloned it using spread operator. Then add values to the array field in both the objects.

If we check the console, both array field are same with same reference.

> Only the primitive data types won't get mutated by default when you apply spread operation.

Then how to make sure non primitive data types like objects and arrays can be deep cloned without mutation?.

It is possible using spread operator but it will be more verbose. Let's see it in action.

#### Deep cloning using spread operator

Let's take the same example as before.

```js
const nestedObject = {
  firstName: 'Param',
  like: ['coffee', 'tea', 'javascript'],
};

const deepClonedObject = {
  ...nestedObject,
  like: [...nestedObject.like],
};

deepClonedObject.like.push('reading');
console.log(nestedObject.like === deepClonedObject.like); // False
console.log(nestedObject.like); // ["coffee", "tea", "javascript", "sleeping", "swimming"]
console.log(deepClonedObject.like); // ["coffee", "tea", "javascript", "sleeping", "swimming", "reading"]
```

Here we spread the nested array and objects to deep clone it without referencing it.

> For non primitive data types, it is neccessary to apply spread operator for every level of nesting to deep clone the object

Now, we have successfully deep cloned the object without mutating it. But if your object is very deeply nested, it will be painful to clone it this way.

There is no other straight forward solution in JS either. We will see some of the libraries in JS which solves this mutation issues in next articles

You can checkout the example here,

<iframe height="400px" width="100%" src="https://repl.it/@ParamHarrison/spread-operator-mutation?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Hope you enjoyed and learnt one of the essential trick in JavaScript 😎

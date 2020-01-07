---
title: How to select fields in a document in MongoDB
date: '2020-01-05'
modifiedDate: '2020-01-05'
published: true
page: false
series: 'Mongodb Bootcamp: Beginners to Advanced'
category: 'Series'
tags: ['MongoDB']
description: MongoDB is really easy to work with. Today, we will see how to select only few fields out of a large document using mongo query
---

Let's assume we have a collection with lot of data in a single document. We have a `countries` collection. We are going to select just few fields we want,

```js
// Query without selection
db.posts.find({});
// Result will look like
[
  {
    _id: ObjectId('5e14ba178e47a9a3b8b7af52'),
    name: 'Estonia',
    shortName: 'EST',
    cities: ['Tartu', 'Tallinn', 'Viljandi'],
  },
  {
    _id: ObjectId('5e14ba3c8e47a9a3b8b7af5a'),
    name: 'India',
    shortName: 'IND',
    cities: ['Chennai', 'Mumbai', 'Delhi'],
  },
  {
    _id: ObjectId('5e14ba558e47a9a3b8b7af62'),
    name: 'United states of America',
    shortName: 'USA',
    cities: [],
  },
  {
    _id: ObjectId('5e14ba6a8e47a9a3b8b7af67'),
    name: 'Sweden',
    shortName: 'SE',
  },
];
```

Now, I want to select only the `name` field and display only the result with `name` field.

Inorder to do that, we need to first understand the mongoDB query syntax

```js
db.countries.find(
  // For basic filtering based on the key values passed
  {},
  // for selecting the fields
  {}
);
```

You can pass the second parameter to the `find` method. It will work for `findOne` too.

Now let's select the `name` field.
Here you need to learn one more trick, The key will be the field you want to select, what about the value?
Value will be `1` for selecting a field. `0` for deselecting a field.

Let's see it as example

#### Selecting only country name field

```js
// Query with name selection
db.posts.find({}, { name: 1 });

// Result will look like
[
  {
    _id: ObjectId('5e14ba178e47a9a3b8b7af52'),
    name: 'Estonia',
  },
  {
    _id: ObjectId('5e14ba3c8e47a9a3b8b7af5a'),
    name: 'India',
  },
  {
    _id: ObjectId('5e14ba558e47a9a3b8b7af62'),
    name: 'United states of America',
  },
  {
    _id: ObjectId('5e14ba6a8e47a9a3b8b7af67'),
    name: 'Sweden',
  },
];
```

Here we have successfully selected only the `name` field. Wait? there is also the `_id` field without we pass it explicitly?

by default, mongo query will always include the `_id` field.

#### Deselecting any field

Let's deselect the `_id` field itself, it's the same way,

```js
// Query with name selection and _id deselection
db.posts.find({}, { name: 1, _id: 0 });

// Result will look like
[
  {
    name: 'Estonia',
  },
  {
    name: 'India',
  },
  {
    name: 'United states of America',
  },
  {
    name: 'Sweden',
  },
];
```

Hope you find this tutorial series helpful. Next we will learn more into this series. Share it with your groups and happy learning 🤗

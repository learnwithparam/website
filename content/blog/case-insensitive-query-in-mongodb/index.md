---
title: How to find a document in mongo using partial value of a field
date: '2019-11-15'
modifiedDate: '2019-11-15'
published: true
page: false
category: 'Tutorial'
tags: ['MongoDB']
description: It's very easy to find a document in mongoDB by value, but do you know how easy is to find a document using case insensitive string
---

MongoDB find syntax is pretty simple. Lets have a collection named `users` and find all the documents in the collection,

```js
// Query
db.users.find({});

// Result
[
  {
    email: 'one@email.com',
    name: 'One for like and comment',
  },
  {
    name: 'Two for Comments',
  },
  {
    email: 'three@email.com',
    name: 'Three for Like',
  },
];
```

If we need to filter by some field then,

```js
// Query
db.users.find({ name: 'One for like and comment' });

// Result
[
  {
    email: 'one@email.com',
    name: 'One for like and comment',
  },
];
```

What if we need to filter by the field but we don't know the exact case or exact value. Let's see the example

- list all the document which has a word `like` in the field `name`

#### Filter document using regular expression

It can be easily achieved using regular expression instead of string value,

```js
// Query
db.users.find({ name: /like/ });

// Result
[
  {
    email: 'one@email.com',
    name: 'One for like and comment',
  },
];
```

Here `/like/` is the regex which will find all the word which match `like`. But this query is case sensitive. It won't match `Like`. But its very easy to write case insensitive query,

```js
db.users.find({ name: /like/i });

// Result
[
  {
    email: 'one@email.com',
    name: 'One for like and comment',
  },
  {
    email: 'three@email.com',
    name: 'Three for Like',
  },
];
```

Adding `i` at the end of regex denotes match the word irrespective of the case. (uppercase, lowercase, etc).

We can use any regex based search to filter the values in mongoDB. We will learn more regex and mongoDB tricks soon.

MongoDB is very powerful and it provides a lot of methods to query what you exactly want. Hope you find this tutorial helpful 🤗

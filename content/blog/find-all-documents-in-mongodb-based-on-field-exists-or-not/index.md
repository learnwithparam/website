---
title: How to find a document in a mongo collection based on whether a field exists or not
date: '2019-10-29'
modifiedDate: '2019-10-29'
published: true
page: false
category: 'Tutorial'
tags: ['MongoDB']
description: In NoSQL, you can save different document in a single collection. Now you want to find documents with specific field. how do you find that? There is an easy way, we will see it in example.
---

MongoDB find syntax is pretty simple. Lets have a collection named `users` and find all the documents in the collection,

```js
// Query
db.users.find({});

// Result
[
  {
    email: 'one@email.com',
    name: 'one',
  },
  {
    firstName: 'two',
  },
  {
    email: 'three@email.com',
    firstName: 'three',
  },
];
```

If we need to filter by some field then,

```js
// Query
db.users.find({ email: 'one@email.com' });

// Result
[
  {
    email: 'one@email.com',
    name: 'one',
  },
];
```

What if we need to filter all the documents based on specific field. For example,

- list all the document which don't have `email` field
- list all documents which have `firstName` field

#### Filter document which don't have email field

It can be easily achieved using `$exists` operator on the field.

```js
// Query
db.users.find({ email: { $exists: false } });

// Result
[
  {
    firstName: 'two',
  },
];
```

#### Filter document which have firstName field

```js
// Query
db.users.find({ firstName: { $exists: true } });

// Result
[
  {
    firstName: 'two',
  },
  {
    email: 'three@email.com',
    firstName: 'three',
  },
];
```

MongoDB is very powerful and it provides a lot of methods to query what you exactly want. Hope you find this tutorial helpful 🤗

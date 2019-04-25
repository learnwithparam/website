---
title: Refactor the book search app and separate components, Part 3
date: '2019-04-25'
modifiedDate: '2019-04-25'
published: true
page: false
series: 'Hooked with react'
tags: ['React', 'React Hooks']
---

Until [part 2](/blog/error-handling-in-react-hooks/), we have created a book search app and handled the loading and error state. Now we are going to see how we can split the app structure into components.

We have written the whole app in `App.js`. Its still a small example, so there is no real need to split it into folders. This post will just showcase how to split the large applications without causing mess to debug later on.

There is no common best practices for folder structure, it depends mainly on two factors

- How big is the project?
- How large is your team?

For large projects and large teams, feature or domain based folder structure will work well.
For small projects, file type based folder structure will work easily.

You can read more about it in react docs [here](https://reactjs.org/docs/faq-structure.html)

My personal opinion is to keep it simple, flat and scale only when you need. You should always refactor to sophisticated folder structure when each file grows in length.

Lets move on to the code,

In out books search application, we can create these components

- BookSearchForm
- Loader
- BooksList
- Books

Lets create a component folder and also create three JS files for our component.

```jsx
// booksSearchForm.js
import React from 'react';

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        <span>Search for books</span>
        <input
          type="search"
          placeholder="microservice, restful design, etc.,"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button type="submit">Search</button>
      </label>
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;
```

We have split the component into its own file and pass the necessary functions and state values as props.

Now in App.js

```jsx{5,13}
// App.js
import React, { useState } from 'react';
import axios from 'axios';

import BookSearchForm from './components/bookSearchForm';
import './App.css';
...

const App = () => {
  ...
  return (
    <section>
      <BookSearchForm

        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      {
        loading && <div style={{color: `green`}}>fetching books for "<strong>{searchTerm}</strong>"</div>
      }
      ...
    </section>
  )
}
```

Lets split the other components as well in the same way.

```jsx
// Loader.js
import React from 'react';

const Loader = ({ loading, searchTerm }) => {
  return (
    <>
      {loading && (
        <div style={{ color: `green` }}>
          fetching books for "<strong>{searchTerm}</strong>"
        </div>
      )}
    </>
  );
};

export default Loader;
```

As for BooksList and Book component, I didn't split into files and put it in same file. Will split it when the functionality grows.

```js
// booksList.js
import React from 'react';

// Separate the UI specific transforming logic to utils folder
import { bookAuthors } from '../utils';

const Book = ({ book }) => {
  return (
    <li>
      <div>
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${
            book.id
          }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>{bookAuthors(book.volumeInfo.authors)}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      </div>
      <hr />
    </li>
  );
};

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BooksList;
```

And add all these together in `App.js`

```jsx
return (
  <>
    <BookSearchForm
      onSubmitHandler={onSubmitHandler}
      onInputChange={onInputChange}
      searchTerm={searchTerm}
      error={error}
    />
    <Loader searchTerm={searchTerm} loading={loading} />
    <BooksList books={books} />
  </>
);
```

https://codesandbox.io/s/rl20opm2l4

Thats it folks, we have successfully split all our components. We can optimize it further by moving around states. Thats for next part.

We will see,

- how to manage state and
- Different ways to manage state (custom hooks, useReducer)
- why we are managing all state in App.js instead of the components itself in more detail

Checkout the codebase for this part 3 [here](https://github.com/learnwithparam/books-series-react-hooks/commit/e08570665b6954f30054ca6c4b3a09b15323ff12) and the whole series codebase can be referred [here](https://github.com/learnwithparam/books-series-react-hooks).

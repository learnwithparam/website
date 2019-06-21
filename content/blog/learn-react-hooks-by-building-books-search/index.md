---
title: Hooked with React - Learn by building a book search app using react and its siblings, Part 1
date: '2019-04-14'
modifiedDate: '2019-04-14'
published: true
page: false
series: 'Hooked with react'
category: ['Series']
tags: ['React', 'JavaScript']
---

Lets build a simple books search page using google books API in react. While developing it, we will explore react hooks, css modules and testing in react application.

This will be a multipart series.

1. Basic books search page using react and google books API
2. Error Handling and loading state for the application
3. Refactoring the code to separate components
4. Create book detail page using react router
5. Revisiting state management
6. Styling the page with Emotion (styled components)
7. Lazy loading components and pages
8. Testing the app using jest and other kids

## React app setup

Create a react app using `create-react-app` cli.

```bash
npx create-react-app books-search-react-hooks
```

Install `prettier` for formatting

```bash
yarn add --dev prettier pretty-quick husky
```

Lets add the precommit hooks configuration in package.json

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}
```

## Creating the search UI

Lets remove the default content in `App.js` and add form for searching the google books API.

```jsx
// App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <section>
      <form>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="microservice, restful design, etc.,"
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
  );
};

export default App;
```

## Search input state using useState hooks

Lets add the local state for search input using `useState` hooks.

```jsx{2,6-9,16}
// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input

            type="search"
            placeholder="microservice, restful design, etc.,"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
  );
}

...
```

## Axios data call for books API

Let's add the form submission to call google books API. API for google books querying

```bash
https://www.googleapis.com/books/v1/volumes?q=<searchTerm>
```

Lets add the logic to call the API. First add `axios` package for Ajax request.

```bash
yarn add axios
```

```jsx{3,9,11-16,18-24,28}
// App.js
...
import axios from 'axios';
...

const App = () => {
    ...

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    const fetchBooks = async () => {
        // Ajax call to API using Axios
        const result = await axios.get(`${API_URL}?q=${searchTerm}`);
        // Books result
        console.log(result.data);
    }

    // Submit handler
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call fetch books async function
        fetchBooks();
    }

    return {
        ...
        <form onSubmit={onSubmitHandler}>
        ...
    }
}
```

- first we prevent the default browser behavior of refreshing the page after form submission
- then call the function `fetchBooks` which calls the google books API
- Asynchronous books API get called using async-await and log the result to console

👏 congrats, we already fetched the API with query. Lets populate the result in a state and update our UI with search result.

## Updating books search result to state

```jsx{3,7}
// App.js

const [books, setBooks] = useState({ items: [] });

const fetchBooks = async () => {
  const result = await axios.get(`${API_URL}?q=${searchTerm}`);
  setBooks(result.data);
};
```

## UI for books search result

```jsx{12-29}
// App.js
...

const App = () => {
  ...

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        ...
      </form>
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

...
```

- displayed the image, title and published date for the book
- for image, we used the default image url from google books based on book ID

Lets display the books author. Each books have multiple author, it will come as an array in the result. So we will concatenate separately with this logic.

```js
let authors = ['Param', 'Vennila', 'Afrin'];
bookAuthors(authors);
// Param, Vennila and Afrin
let authors = ['Param', 'Afrin'];
bookAuthors(authors);
// Param and Afrin
```

The bookAuthors function takes the array of authors as input and concatenate the string based on the above mentioned logic.

```jsx
// App.js

const bookAuthors = authors => {
  if (authors.length <= 2) {
    authors = authors.join(' and ');
  } else if (authors.length > 2) {
    let lastAuthor = ' and ' + authors.slice(-1);
    authors.pop();
    authors = authors.join(', ');
    authors += lastAuthor;
  }
  return authors;
};
```

Add the authors info to the list.

```jsx{17}
// App.js

const App = () => {
  ...

  return (
    <section>
      ...
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                ...
                <div>
                    <h3>{ book.volumeInfo.title }</h3>
                    <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                </div>
                ...
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

...
```

Awesome, we have completed our first part of the series with simple react app using react hooks. Checkout the codesandbox example [here](https://codesandbox.io/s/1qm1m9zpnl)

https://codesandbox.io/s/1qm1m9zpnl

Hope this series help you to build your next big react app 😅. Stay tuned for the next parts of the series 🤗

Checkout the codebase for this part 1 [here](https://github.com/learnwithparam/books-series-react-hooks/commit/580ff2b1585bcdb162ad4b5878e0aa0d726aa761) and the whole series codebase can be referred [here](https://github.com/learnwithparam/books-series-react-hooks).

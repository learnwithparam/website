---
title: Hooked with React - Using react router in our react application to route a dynamic page
date: '2019-06-12'
modifiedDate: '2019-06-12'
published: true
page: false
series: 'Hooked with react'
category: 'Series'
tags: ['React']
description: Creating book details page using react router in our book search application - Part 4
---

We have already created the books list page for our book search page. Now lets create another page for each book using react router.

You can check the app in action here,

https://codesandbox.io/s/rl20opm2l4

## Creating books detail page

First lets create the routes using react router in App.js and load two pages

- Index page which is our current search page which shows the books list
- Books detail page which will be identified through unique ID

Moving all our logic to index page. Create a new folder called `pages` and create a file called `searchPage.js`

```js
import React, { useState } from 'react';
import axios from 'axios';

import BookSearchForm from '../components/bookSearchForm';
import Loader from '../components/loader';
import BooksList from '../components/booksList';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

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
};

export default SearchPage;
```

and refactor the `App.js` file

```js
import React from 'react';

import SearchPage from './pages/searchPage.js';
import './App.css';

const App = () => {
  return (
    <>
      <SearchPage />
    </>
  );
};

export default App;
```

Add `react-router-dom` package and render the search page through routes

```bash
yarn add react-router-dom
```

```js{2,7-8,11-16}
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPage from './pages/searchPage.js';
import './App.css';

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
};

export default App;
```

Lets create the details page and route through our react router. Create a new file `bookDetailPage.js` in `pages` folder

```js
import React from 'react';

const BookDetailPage = () => {
  return <div>Book details page</div>;
};

export default BookDetailPage;
```

Add the route to the `App.js`. Here the path will have the route params `bookId` to identify the book through its ID.

```js
<Route path="/book/:bookId" exact component={BookDetailPage} />
```

Now get the book ID in `BookDetailPage` through props send by react-router. If you want to see details of how it works, refer my blog post about [dynamic pages in react router](/blog/dynamic-pages-in-react-router/).

Route params are send through a props called `match`.

```js
import React from 'react';

const BookDetailPage = ({ match }) => {
  const {
    params: { bookId },
  } = match;

  return (
    <div>
      Book details page: <strong>{bookId}</strong>
    </div>
  );
};

export default BookDetailPage;
```

## Link the details page from books list component

Add a link to go to details page in `BooksList` component.

```jsx
import { Link } from "react-router-dom";

...

<Link to={`/book/${book.id}`}>Show details</Link>
```

> `Link` is used because, it uses client side routing. HTML `a` tag will refresh the page and hit the server to load the new URL

Alright, we have done linking between the pages. Now we need to show details about the book in the details page. For that,

- we need to call the API with book ID and fetch the details and render the output. Lets do it.
- While calling the API, we need to set `loading` state.
- If API throws error, we need to set `error` state.
- If API returns content, then set the `book` state.

Here is the code for books detail page,

- It uses `useEffect` react hooks to call the book detail API only when the page mounts. To know more about useEffect hook, check this official docs [here](https://reactjs.org/docs/hooks-effect.html).

```js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BookDetail from '../components/bookDetail';

const BookDetailPage = ({ match }) => {
  const {
    params: { bookId },
  } = match;
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBook = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchBook();
  }, [bookId]);

  return (
    <>
      <Link to={`/`}>Go back to search books</Link>
      {loading && (
        <div style={{ color: `green` }}>
          loading book detail for book ID: <strong>{bookId}</strong>
        </div>
      )}
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
      {book && <BookDetail book={book} />}
    </>
  );
};

export default BookDetailPage;
```

It uses a new component `BookDetail` to render the books detail. `bookDetail.js` contains

```js
import React from 'react';

import { bookAuthors } from '../utils';

const BookDetail = ({ book }) => {
  const createDescMarkup = description => {
    return { __html: description };
  };

  return (
    <section>
      <div>
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3>
            <strong>Title:</strong> {book.volumeInfo.title}
          </h3>
          <p>
            <strong>Authors:</strong> {bookAuthors(book.volumeInfo.authors)}
          </p>
          <p>
            <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
          </p>
          <p>
            <strong>Publisher:</strong> {book.volumeInfo.publisher}
          </p>
          <p>
            <strong>Page Count:</strong> {book.volumeInfo.pageCount}
          </p>
          <div
            dangerouslySetInnerHTML={createDescMarkup(
              book.volumeInfo.description
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
```

Now we have successfully rendered the whole page. You can go back to search page and search for any books and check their details.

Try it out here,

https://codesandbox.io/s/books-detail-page-by2nj

Thats it folks, we can further extend these apps with styles and testing. I would either write it as continuation or as separate blog post soon 😎

Checkout the codebase for this part 4 [here](https://github.com/learnwithparam/books-series-react-hooks/commit/de644a750b935268c085cc83d5771a9b88e17432) and the whole series codebase can be referred [here](https://github.com/learnwithparam/books-series-react-hooks).

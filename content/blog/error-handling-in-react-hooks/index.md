---
title: Hooked with React - Error handling and loading state in react hooks, Part 2
date: '2019-04-18'
modifiedDate: '2019-04-18'
published: true
page: false
series: 'Hooked with react'
tags: ['React', 'React Hooks']
---

In [part 1](/blog/learn-react-hooks-by-building-books-search/), we created the books search react app. But we didn't handle any errors or have any loading state before fetching the data from API.

In this part, we will see

- error handling
- loading state for API calls
- basic validation for the input

## Error Handling

Right now, we can see the API call error if you click the search button with empty input value. Try it out in our codesandbox [here](https://codesandbox.io/s/1qm1m9zpnl)

This is what the Google books API returns,

```json
{
  "error": {
    "errors": [
      {
        "domain": "global",
        "reason": "queryRequired",
        "message": "Missing query.",
        "locationType": "parameter",
        "location": "q"
      }
    ],
    "code": 400,
    "message": "Missing query."
  }
}
```

Lets handle it in our code,

```jsx{6,11-18}
// App.js
...

const [searchTerm, setSearchTerm] = useState('');
const [books, setBooks] = useState({items: []});
const [error, setError] = useState(false);

let API_URL = `https://www.googleapis.com/books/v1/volumes`;

const fetchBooks = async () => {
  setError(false);
  try {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  }
  catch(error) {
    setError(true);
  }
}

...
```

We created a new state called `error` using `useState`. It was set in the catch block.
`try, catch` is the usual way to handle error for async, await functions.

We also set the error state to false before fetching the API, it is to make sure if the API returns proper value next time, the error won't be displayed because of previous attempt. So clearing the error before attempt fetching again.

> we didn't use the actual error object from API to keep the implementation simple. In real applications, we need to show appropriate error to the end user.

Let's show the error to the user,

```jsx{17-19}
// App.js
...

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
      {
        error && <div style={{color: `red`}}>some error occurred, while fetching api</div>
      }
    </form>
    ...
  </section>
);

...
```

We showed a simple error message to user if the API returns error. Perfect, its working. Lets move on to setting `loading` state. It is similar to how we handled error.

## Loading state

Steps to create the loading state,

- create a state for loading using `useState`
- Set loading state before fetching API and reset it after API finished calling
- Set a loader in the JSX based on the `loading` state value

```jsx{7,12,13,22,23}
// App.js
...

const [searchTerm, setSearchTerm] = useState('');
const [books, setBooks] = useState({items: []});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);

let API_URL = `https://www.googleapis.com/books/v1/volumes`;

const fetchBooks = async () => {
  // set loading Before API operation starts
  setLoading(true);
  setError(false);
  try {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  }
  catch(error) {
    setError(true);
  }
  // After API operation end
  setLoading(false);
}
```

Lets add the loader in the JSX

```jsx{8-10}
...

return (
  <section>
    <form onSubmit={onSubmitHandler}>
      ...
    </form>
    {
      loading && <div style={{color: `green`}}>fetching books for "<strong>{searchTerm}</strong>"</div>
    }
    <ul>
      {
        books.items.map((book, index) => {
          return (
            ...
          );
        })
      }
    </ul>
  </section>
);

...
```

https://codesandbox.io/s/48j0pqr8w9

That works, we have shown the loading state when API fetches and shows the searched books after API finished fetching and loading completes.

Lets add a simple HTML validation to not allow empty string value,

```jsx{6}
<input
  type="search"
  placeholder="microservice, restful design, etc.,"
  value={searchTerm}
  onChange={onInputChange}
  required
/>
```

Thats it folks, we have successfully implemented loading and error state for our books search app.

https://codesandbox.io/s/n47kmr7m9j

Next steps in our series,

- Refactoring the code to separate components
- Talk more on state management
- and many more with styling and testing

Hope this series help you to build your next big react app 😅. Stay tuned for the next parts of the series 🤗

Checkout the codebase for this part 2 [here](https://github.com/learnwithparam/books-series-react-hooks/commit/e4defbf9d8073be796c680c7445278bbc538d5bd) and the whole series codebase can be referred [here](https://github.com/learnwithparam/books-series-react-hooks).

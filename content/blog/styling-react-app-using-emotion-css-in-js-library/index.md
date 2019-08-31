---
title: Styling a react app using Emotion CSS in JS library - An introduction to Emotion
date: '2019-08-16'
modifiedDate: '2019-08-16'
published: true
page: false
series: 'Hooked with react'
category: 'Series'
tags: ['React', 'CSS in JS', 'Emotion']
description: How to style your react app using emotion library. It has several ways to style the app. We will learn how to create global styles, styled components and CSS in JS through set of emotion libraries.
---

> Consider this as a standalone article. You don't need to go through everything in the series if you already know react and basics of react hooks.

This blog post will be an introduction to emotion. We style a react app and meanwhile learn the concepts of styled components.

So far, We have created a react app which search google books and load it on the page and also have a books detail page for each books,

You can see it in action here,

https://codesandbox.io/s/books-detail-page-by2nj

#### Install emotion

There are two packages, one is `core` and one which powers the styled components `@emotion/styled`. We will see examples for both.

```bash
yarn add @emotion/core
yarn add @emotion/styled
```

### Global styles in emotion

Before starting any site styles, we always need some reset to normalize browser default styles. I am going to use `normalize.css`. Lets install that,

```bash
yarn add normalize.css
```

There are several ways to add external stylesheet in `create-react-app`. I am going to use an unusual technique to showcase how it can be done using emotion.

Emotion has a `Global` component, which will create global styles for your app. Lets add it in our search page.

```jsx
/* App.js */

// Adding global CSS
import { Global, css } from "@emotion/core";
// importing the text from normalize.css file
import normalize from "normalize.css";

...

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      ...
    </>
  );
};

...

```

Here we have added the normalize css along with background color for body element. We can add any common global CSS like this in emotion. But it is an anti-pattern to add common CSS when you can always extract out styles along with the component and reuse shared components when needed.

### Styling the header using emotion styled react components

The header will contain a logo in the left and a search input with button on the right side.

A sample styled component syntax in emotion

```jsx
const Header = styled.header`
  background-color: #ffffff;
`;

<Header></Header>;
```

You can also pass props to it

```jsx
const Header = styled.header`
  background-color: ${props => props.bgColor};
`;

<Header bgColor="#FEFEFE"></Header>;
```

You can also extend a component and create new component. It will be useful when we want to share component styles for different components.

```jsx
const Header = styled.header`
  background-color: #ffffff;
`;

const PageHeader = styled(Header)`
  color: #444;
`;

<PageHeader></PageHeader>; // this will have both background color and color
```

Lets use all these learning to style our header.

```jsx
// pages/searchPage.js

...
import styled from "@emotion/styled";

import BookSearchForm from "../components/bookSearchForm";
...

// Its very easy to create a syled component using emotion
const Header = styled.header`
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;

// We can extend a react styled component to create styles on top of it
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h3`
  margin: 0;
`;

// The styles written inside follows same syntax as CSS, so there is no special learning curve for styled components
const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

const SearchPage = () => {
  ...

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Bookie</LogoText>
          <HeaderSearchForm>
            <BookSearchForm
              onSubmitHandler={onSubmitHandler}
              onInputChange={onInputChange}
              searchTerm={searchTerm}
              error={error}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      ...
    </>
  );
};
```

On the search page, we have created logo and header form. Now lets go into header form component and style the forms.

Before that, we will see an example for how to style different states of the HTML element (i.e., hover, active, focus state)

```jsx
const Input = styled.input`
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
`;
```

How to style css classed HTML elements inside our styled component. Its same as SCSS syntax

```jsx
const Element = styled.element`
  outline: 0;

  .css-classname {
    background-color: #ffffff;
  }
`;
```

Now lets use the same examples to style the form elements

```jsx
// components/bookSearchForm.js

...

const Input = styled.input`
  outline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
`;

const Button = styled.button`
  background-color: #2185d0;
  color: #ffffff;
  text-shadow: none;
  background-image: none;
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;
`;

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        type="search"
        placeholder="Search for books"
        value={searchTerm}
        onChange={onInputChange}
        required
      />
      <Button type="submit">Search</Button>
      ...
    </form>
  );
};

```

### Styling loader component using CSS in JS

There are several ways to style components in emotion. You can use CSS in JS styling too with emotion. Lets style our loader component in CSS in JS using emotion library.

Emotion supports `css` props. Lets see an example in action

```jsx
// We have to import jsx, else it won't work on react component
import { css, jsx } from '@emotion/core';

<div
  css={css`
    color: green;
    text-align: center;
    padding: 20px 0;
  `}
>
  {children}
</div>;
```

Here in the above example, we have styled a div element using simple CSS in JS.

If we didn't import jsx, emotion won't compile the CSS, the prop will be taken as another react props.

Lets style our loader component using the same principle

```jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const Loader: React.FunctionComponent<{}> = ({ loading, children }) => {
  return (
    <>
      {loading && (
        <div
          css={css`
            color: green;
            text-align: center;
            padding: 20px 0;
          `}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Loader;
```

If you closely looks at it, we have some wierd syntax done on two lines,

```jsx
/** @jsx jsx */

const Loader: React.FunctionComponent<{}> = { loading, children };
```

The reason is just a hack so that linter won't yell at you saying, `React` is defined but not used. And also the same for `jsx`.

Other than that, the component style is pretty straight forward, it is as similar to styled component but only difference is, we used inline CSS in JS method.

### Shared error component using emotion without react

We can create a component and share it without using react. We will create a error component and share it to multiple files.

```jsx
// errorText.js
import styled from '@emotion/styled';

const ErrorText = styled.div`
  color: red;
  text-align: center;
  padding: 20px 0;
`;

export default ErrorText;
```

Its that simple, we don't need to create small react components when we just need to have a styled components. This will reduce a lot of functional component needs in a real app.

### Media queries in emotion to style the page for responsiveness

Responsive styles are again same as SCSS, we can add media queries to any component. Lets go and make the Header responsive.

```jsx
// pages/searchPage.js

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// components/bookSearchForm.js
const Input = styled.input`
  ... @media (max-width: 778px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  ...border-radius: 3px;
  cursor: pointer;

  @media (max-width: 778px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
```

It is that simple to add media queries. You can add media queries to any styled component and make it responsive. This syntax also works for CSS in JS syntax.

### Theming to share common colors

Now how to share common colors, typography, scales etc. Is there a way?

yes there is, emotion library provides a emotion-theming package. It allows you to create a react `context` and use the themes on whatever component you want. Let see it on our header component.

Lets install the package first

```bash
yarn add emotion-theming
```

Lets create a simple theme file and export it

```jsx
// theme.js

const theme = {
  colors: {
    success: 'green',
    error: 'red',
    white: 'white',
  },
};

export default theme;
```

Now, we can import the theme and use it in our `ThemeProvider` from `emotion-theming` package

```jsx
// App.js

...
import { ThemeProvider } from "emotion-theming";

import theme from "./components/theme";
...

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Router>
        ...
      </Router>
    </ThemeProvider>
  );
};

export default App;

```

As you see we enclosed the whole app with the theme provider and pass the theme object to the theme props.

Now we can use the theme values on any styled component, lets see the example in our header component

```jsx
// Props will have a theme object and here you can use it in any react component which is enclosed inside the ThemeProvider
export const Header = styled.header`
  background-color: ${props => props.theme.colors.white};
`;
```

### Sharing styled components

Now we have seen almost most of the use cases to gets your hands dirty with emotion library. Lets see one last trick of sharing styled components. We already saw how it can be done with error component. Now we will share our header styles so that both search page and details page header looks the same.

```jsx
// components/shared.js

import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: ${props => props.theme.colors.white};
`;

export const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;
```

Now you can import the shared styled component into the pages

```jsx
// pages/searchPage.js, pages/bookDetailPage.js

import { Container, Header } from '../components/shared';
```

https://codesandbox.io/s/styling-with-emotion-gfbni

> I haven't styled the complete app with emotion, only styled parts of it to teach emotion. I will update complete style on codesandbox and repo soon which includes the style for cards and details page.

Checkout the codebase for this part [here](https://github.com/learnwithparam/books-series-react-hooks/pull/1/files) and the whole series codebase can be referred [here](https://github.com/learnwithparam/books-series-react-hooks).

Hope this article helps you to learn emotion library and its capabilities. Its one of the best package for doing styled components or CSS in JS on your react application 😎

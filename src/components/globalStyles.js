import React from 'react';
import { Global, css } from '@emotion/core';

import prismCSS from './../styles/prism.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${prismCSS}
      body {
        background-color: var(--bg);
      }
      a {
        transition: all 0.2s ease-in;
        color: var(--textLink);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      blockquote {
        border-left: 5px solid rgb(87, 62, 222);
        margin: 2rem 0;
        padding-left: 1rem;
      }
    `}
  />
);

export default GlobalStyles;

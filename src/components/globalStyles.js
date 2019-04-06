import React from 'react';
import sanitizeCSS from 'sanitize.css';
import { Global, css } from '@emotion/core';

import prismCSS from './../styles/prism.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${sanitizeCSS}
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
        margin-left: 0;
        margin-top: 1rem;
        padding-left: 1rem;
        font-style: italic;
      }
    `}
  />
);

export default GlobalStyles;

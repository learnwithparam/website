import React from 'react';
import sanitizeCSS from 'sanitize.css';
import { Global, css } from '@emotion/core';

import prismCSS from './../styles/prism.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${sanitizeCSS}
      ${prismCSS}
      a {
        transition: all 0.3s ease-in;
        color: var(--textLink);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    `}
  />
);

export default GlobalStyles;

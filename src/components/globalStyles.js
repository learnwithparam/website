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
        color: var(--textLink);
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    `}
  />
);

export default GlobalStyles;

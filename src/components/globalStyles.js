import React from 'react';
import { Global, css } from '@emotion/core';

import prismCSS from './../styles/prism.css';
import carbonAdsCSS from './../styles/carbon-ads.css';

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
        background: rgb(249, 251, 255);
        margin: 2rem 0;
        padding: 2rem 1.5rem 1rem;
      }
      ${carbonAdsCSS}
    `}
  />
);

export default GlobalStyles;

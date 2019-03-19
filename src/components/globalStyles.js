import React from 'react';
import sanitizeCSS from 'sanitize.css';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${sanitizeCSS}
    `}
  />
);

export default GlobalStyles;

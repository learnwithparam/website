import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    heading:
      'Bitter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", serif',
    body:
      'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    mono: 'Menlo, monospace',
  },
};

export default customTheme;

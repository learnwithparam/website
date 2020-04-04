import React from 'react';
import { Box } from '@chakra-ui/core';

const Announcement = () => {
  return (
    <Box
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      p={3}
      bg="yellow.200"
    >
      My book <strong>API design for beginners</strong> is getting ready.{' '}
      <a
        href="https://leanpub.com/api-design-for-beginners"
        target="_blank"
        rel="noopener noreferrer"
      >
        Subscribe now
      </a>{' '}
      to get your free copies when it get published.
    </Box>
  );
};

export default Announcement;

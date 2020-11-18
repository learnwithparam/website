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
      Our courses website is live at{' '}
      <a
        href="https://jsmates.com?utm_source=learnwithparam&amp;utm_medium=announcement&amp;utm_campaign=learnwithparam"
        target="_blank"
        rel="noopener noreferrer"
      >
        jsmates.com
      </a>{' '}
    </Box>
  );
};

export default Announcement;

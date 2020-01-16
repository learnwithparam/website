import React from 'react';
import { Box } from '@chakra-ui/core';

const FollowMe = () => {
  return (
    <Box as="blockquote" bg="orange.100">
      Follow me on{' '}
      <a
        href="https://twitter.com/learnwithparam"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>
      . I share quick tips, my reading list and also about free workshop and
      webinars around web and mobile development everyday.
    </Box>
  );
};

export default FollowMe;

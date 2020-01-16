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
      <a
        href="https://www.eventbrite.com/e/api-design-for-beginners-using-node-js-and-mongodb-english-tickets-89601978931"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register here
      </a>{' '}
      for my first free workshop on{' '}
      <strong>API design for beginner using Node Js and MongoDB</strong>
    </Box>
  );
};

export default Announcement;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Flex, Box, Text, Heading } from '@chakra-ui/core';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Container, Button } from './commonStyles';

const Input = styled.input`
  color: #2a2a2a;
  width: 100%;
  padding: 0.5rem;
  height: 46px;
  border-radius: 5px;
  border: 1px solid;
`;

const EmailListForm = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email)
      .then(data => {
        setSuccess(true); // TODO: check status and display proper message
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  return (
    <Flex
      flexDirection="column"
      bg="purple.100"
      color="#2a2a2a"
      justifyContent="center"
      alignItems="center"
      py={6}
    >
      <Container>
        <Box py={6}>
          <form onSubmit={handleSubmit}>
            <Heading as="h2" fontSize="3xl" mb={4}>
              Wanna become a Pro Engineer!
            </Heading>
            <Text fontSize="lg" mb={3}>
              Weekly, practical advice on how to become a better Engineer. Read by 210+ engineers, managers, and founders.
            </Text>
            {!success && (
              <Flex py={2} flexDirection={['column', 'row']}>
                <Box flex="0.7">
                  <Input
                    placeholder="Email address"
                    name="email"
                    type="text"
                    onChange={handleEmailChange}
                    required
                  />
                </Box>
                <Box pl={[0, 3]} mt={[3, 0]}>
                  <Button type="submit">Subscribe</Button>
                </Box>
              </Flex>
            )}
          </form>
          {success && (
            <Text as="h4" color="#1fab89">
              Thanks for subscribing to my newsletter!
            </Text>
          )}
        </Box>
      </Container>
    </Flex>
  );
};

export default EmailListForm;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Flex, Box, Text } from '@rebass/emotion';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Container, Button } from './commonStyles';

const Input = styled.input`
  color: #2a2a2a;
  width: 100%;
  padding: 0.5rem;
  height: 50px;
  border-radius: 5px;
  border: 1px solid;
`;

const EmailListForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email)
      .then(data => {
        console.log(data);
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
      bg="#e7f3ee"
      color="#2a2a2a"
      justifyContent="center"
      alignItems="center"
      py={5}
    >
      <Container>
        <Box>
          <form onSubmit={handleSubmit}>
            <Text as="h2">Subscribe to my Newsletter</Text>
            <Text as="p">
              I share best news, articles and projects about JavaScript, React,
              GraphQL and real world development practices
            </Text>
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
          </form>
        </Box>
      </Container>
    </Flex>
  );
};

export default EmailListForm;

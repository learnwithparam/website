import React from 'react';
import { Link } from 'gatsby';
import { Heading, Text, List, ListItem, Box, Flex } from '@chakra-ui/core';

import { Container } from '../components/commonStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <Flex
      bg="#f8f6fc"
      minHeight={`calc(100vh - 300px)`}
      justifyContent="center"
      alignItems="center"
    >
      <Box flex={1}>
        <Container>
          <Heading as="h3" size="lg" py={6}>
            Some universal truth taught by 404,
          </Heading>
          <List styleType="disc" mb={6}>
            <ListItem>Sun sets at west!</ListItem>
            <ListItem>Earth is flat!</ListItem>
            <ListItem>Thor is real and 9 realms exist!</ListItem>
            <ListItem>Last but not least, I am a secret billionaire!</ListItem>
          </List>
          <Text pb={6}>
            <Link to="/blog">
              Don't tell anyone and get back to your normal life!
            </Link>
          </Text>
        </Container>
      </Box>
    </Flex>
  </Layout>
);

export default NotFoundPage;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/core';

import BlogPost from '../components/blogPost';
import { Container, TextCenter, ButtonLink } from '../components/commonStyles';

const BlogWrapper = styled.div`
  padding: 2rem 0;
  h3 {
    margin-top: 2.5rem;
  }
`;

const SectionTitle = styled(Heading)`
  margin-bottom: 2.5rem;
  display: flex;
  @media (max-width: 575.98px) {
    margin-top: 1rem;
  }
  a {
    margin-left: auto;
  }
`;

const ViewAllLink = styled(TextCenter)`
  padding: 3rem 0;
`;

const BlogContainer = ({ posts, sectionTitle }) => {
  return (
    <BlogWrapper>
      <Container>
        {sectionTitle ? (
          <SectionTitle as="h2" fontSize="2xl">
            {sectionTitle}
          </SectionTitle>
        ) : null}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <BlogPost
              key={node.fields.slug}
              title={title}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              modifiedDate={node.frontmatter.modifiedDate}
              description={node.frontmatter.description}
              type={node.frontmatter.type}
              duration={node.frontmatter.duration}
              timeToRead={node.timeToRead}
            />
          );
        })}
        {sectionTitle ? (
          <ViewAllLink>
            <ButtonLink to="/blog">View all articles →</ButtonLink>
          </ViewAllLink>
        ) : null}
      </Container>
    </BlogWrapper>
  );
};

BlogContainer.propTypes = {
  posts: PropTypes.any,
};

export default BlogContainer;

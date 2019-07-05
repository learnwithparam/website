import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import BlogPost from '../components/blogPost';
import { Container, TextCenter, ButtonLink } from '../components/commonStyles';

const BlogWrapper = styled.div`
  padding: 2rem 0;
  h3 {
    margin-top: 2.5rem;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 2.5rem;
  display: flex;
  @media (max-width: 575.98px) {
    margin-top: 1rem;
  }
  a {
    margin-left: auto;
  }
`;

const BlogContainer = ({ posts, sectionTitle }) => {
  return (
    <BlogWrapper>
      <Container>
        {sectionTitle ? (
          <SectionTitle>
            {sectionTitle}
            <ButtonLink to="/blog">View all articles →</ButtonLink>
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
              excerpt={node.excerpt}
              timeToRead={node.timeToRead}
            />
          );
        })}
        {sectionTitle ? (
          <h3>
            <TextCenter>
              <ButtonLink to="/blog">View all articles →</ButtonLink>
            </TextCenter>
          </h3>
        ) : null}
      </Container>
    </BlogWrapper>
  );
};

BlogContainer.propTypes = {
  posts: PropTypes.any,
};

export default BlogContainer;

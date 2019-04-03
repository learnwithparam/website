import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const BlogPostContainer = styled.section`
  padding: 2rem 4rem;
  border-radius: 5px;
  transition: all 0.3s linear;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
    rgba(0, 0, 0, 0.07) 0px 8px 15px;
  transform: translateY(-2px);
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 0.75rem;
  }
  small {
    margin: 0;
    color: #555;
  }
`;

const BlogPost = ({ title, slug, date, excerpt }) => {
  return (
    <BlogPostContainer>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <p>
        <small>{date}</small>
      </p>
      <p>
        {excerpt} <Link to={slug}>Read →</Link>
      </p>
    </BlogPostContainer>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.any,
  excerpt: PropTypes.string,
};

export default BlogPost;

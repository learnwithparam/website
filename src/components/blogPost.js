import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { formatReadingTime } from '../utils/helpers';

const BlogPostContainer = styled.section`
  padding: 2rem 4rem;
  border-radius: 6px;
  transition: all 0.2s ease-in;
  background-color: rgba(255, 255, 255, 0.9);
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
    rgba(71, 63, 79, 0.16) 0px 8px 24px;
  margin-bottom: 1.5rem;
  @media (max-width: 575.98px) {
    padding: 1.5rem 1rem;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    @media (max-width: 575.98px) {
      font-size: 1.2rem;
    }
  }
  small {
    margin: 0;
    color: #828282;
    font-size: 0.9rem;
  }
  .sep {
    margin: 0 0.25rem;
  }
`;

const ContinueReading = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;

const BlogPost = ({
  title,
  slug,
  date,
  modifiedDate,
  timeToRead,
  description,
  type,
  duration,
}) => {
  return (
    <BlogPostContainer>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <p>
        <small>{modifiedDate || date}</small>
        <span className="sep">{` • `}</span>
        {type && type === 'video' ? (
          <small>{formatReadingTime(duration, type)}</small>
        ) : (
          <small>{formatReadingTime(timeToRead)}</small>
        )}
      </p>
      <p>{description}</p>
      <ContinueReading to={slug}>
        Continue {type === 'video' ? 'watching' : 'reading'} →
      </ContinueReading>
    </BlogPostContainer>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.any,
  modifiedDate: PropTypes.any,
  description: PropTypes.string,
  timeToRead: PropTypes.number,
};

export default BlogPost;

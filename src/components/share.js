import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const ShareContainer = styled.section`
  display: inline-block;
  padding: 0rem 0 1.5rem;
  strong {
    margin-right: 0.5rem;
    @media (max-width: 575.98px) {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
  .SocialMediaShareButton {
    display: inline-block;
    cursor: pointer;
    margin-right: 0.5rem;
    vertical-align: middle;
    opacity: 0.8;
    transition: all 0.2s linear;
    &:hover {
      opacity: 1;
    }
  }
`;

const Share = ({
  title,
  description,
  url,
  author,
  hashTags,
  size,
  children,
}) => {
  return (
    <ShareContainer>
      {children}
      <FacebookShareButton quote={title} url={url}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <LinkedinShareButton title={title} description={description} url={url}>
        <LinkedinIcon size={size} round />
      </LinkedinShareButton>
      <TwitterShareButton
        title={title}
        via={author}
        hashtags={hashTags}
        url={url}
      >
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <WhatsappShareButton title={title} url={url}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
    </ShareContainer>
  );
};

Share.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  hashTags: PropTypes.array,
  size: PropTypes.number,
  children: PropTypes.any,
};

Share.defaultProps = {
  size: 42,
};

export default Share;

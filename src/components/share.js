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
  padding: 0rem 0 2rem;
  strong {
    margin-right: 0.5rem;
  }
  .SocialMediaShareButton {
    display: inline-block;
    cursor: pointer;
    margin-right: 0.5rem;
  }
`;

const Share = ({ title, description, url, author, hashTags, children }) => {
  return (
    <ShareContainer>
      {children}
      <FacebookShareButton quote={title} url={url}>
        <FacebookIcon size={42} round />
      </FacebookShareButton>
      <LinkedinShareButton title={title} description={description} url={url}>
        <LinkedinIcon size={42} round />
      </LinkedinShareButton>
      <TwitterShareButton
        title={title}
        via={author}
        hashtags={hashTags}
        url={url}
      >
        <TwitterIcon size={42} round />
      </TwitterShareButton>
      <WhatsappShareButton title={title} url={url}>
        <WhatsappIcon size={42} round />
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
  children: PropTypes.any,
};

export default Share;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, Flex } from '@chakra-ui/core';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share';

const ShareContainer = styled(Box)`
  display: inline-block;
  padding-right: 0.25rem;
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
    <Flex alignItems="center" py={3}>
      <ShareContainer>{children}</ShareContainer>
      <ShareContainer>
        <TwitterShareButton
          title={title}
          via={author}
          hashtags={hashTags}
          url={url}
        >
          <TwitterIcon size={size} round />
        </TwitterShareButton>
      </ShareContainer>
      <ShareContainer>
        <LinkedinShareButton title={title} description={description} url={url}>
          <LinkedinIcon size={size} round />
        </LinkedinShareButton>
      </ShareContainer>
      <ShareContainer>
        <FacebookShareButton quote={title} url={url}>
          <FacebookIcon size={size} round />
        </FacebookShareButton>
      </ShareContainer>
      <ShareContainer>
        <RedditShareButton title={title} url={url}>
          <RedditIcon size={size} round />
        </RedditShareButton>
      </ShareContainer>
      <ShareContainer>
        <WhatsappShareButton title={title} url={url}>
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>
      </ShareContainer>
    </Flex>
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

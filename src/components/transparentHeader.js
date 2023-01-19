import React from 'react';
import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/core';
import { Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';

const HeaderGrid = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  @media (max-width: 575.98px) {
    padding: 1rem 0;
  }
`;

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

const LogoText = styled(Heading)`
  margin: 0;
  line-height: inherit;
`;

const LinkDesktop = styled(Link)`
  @media (max-width: 575.98px) {
    display: none;
  }
`;

const LinkMobile = styled(Link)`
  display: none;
  @media (max-width: 575.98px) {
    display: inline;
    position: relative;
    top: -2px;
  }
`;

const HeaderColumnRight = styled(HeaderColumn)`
  margin-left: auto;
`;

const MenuItem = styled(Link)`
  color: inherit;
  margin-right: 0.25rem;
  font-size: 0.9rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  &:hover {
    background-color: rgb(255, 167, 196, 0.15);
  }
  &.active {
    background-color: rgb(255, 167, 196, 0.3);
  }
`;

const socialIconStyle = {
  width: `30px`,
  height: `30px`,
  marginLeft: `0.5rem`,
};

const TransparentHeader = () => (
  <HeaderGrid>
    <HeaderColumn>
      <LogoText as="h3" fontSize="2xl" textTransform="uppercase">
        <LinkDesktop to="/">
          <Heading as="strong" fontSize="2xl" color="purple.600">
            Learn
          </Heading>{' '}
          <Heading as="strong" fontSize="lg" color="orange.400">
            with
          </Heading>{' '}
          <Heading as="strong" fontSize="2xl" color="teal.600">
            Param
          </Heading>
        </LinkDesktop>
        <LinkMobile to="/">{`{ P }`}</LinkMobile>
      </LogoText>
    </HeaderColumn>
    <HeaderColumnRight>
      <MenuItem to="/blog/" activeClassName="active">
        Blog
      </MenuItem>
      <SocialIcon
        title="Follow me on twitter"
        alt="Twitter follow intent"
        style={socialIconStyle}
        target="_blank"
        rel="noopener noreferrer"
        url="https://twitter.com/intent/follow?screen_name=learnwithparam"
      />
    </HeaderColumnRight>
  </HeaderGrid>
);

export default TransparentHeader;

import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/core';
import { Link } from 'gatsby';

import { Container } from './commonStyles';
import TransparentHeader from './transparentHeader';

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
`;

const links = [
  {
    name: '#react',
    url: '/react/',
    color: '#00d8ff',
  },
  {
    name: '#css',
    url: '/css/',
    color: '#49d091',
  },
  {
    name: '#javascript',
    url: '/javascript/',
    color: '#ffe725',
  },
  {
    name: '#mongodb',
    url: '/mongodb/',
    color: '#ccda46',
  },
];

const StyledLink = styled(Link)`
  color: ${props => (props.color ? props.color : '#ffffff')};
`;

const StyledAnchor = styled('a')`
  color: ${props => (props.color ? props.color : '#ffffff')};
`;

const LinkBox = styled(Box)`
  @media (max-width: 575.98px) {
    font-size: 16px;
  }
  @media (max-width: 374.98px) {
    font-size: 14px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

const Header = () => (
  <>
    <HeaderContainer>
      <Container>
        <TransparentHeader />
      </Container>
    </HeaderContainer>
    <HeaderContainer bg="purple.800">
      <Container>
        <Flex justifyContent="center" flexWrap="wrap">
          {links.map(link => {
            return (
              <LinkBox mx={[2, 3]} key={`link-${link.url}`}>
                {link.external ? (
                  <StyledAnchor
                    href={link.url}
                    color={link.color}
                    target="_blank"
                  >
                    {link.name}
                  </StyledAnchor>
                ) : (
                  <StyledLink color={link.color} to={link.url}>
                    {link.name}
                  </StyledLink>
                )}
              </LinkBox>
            );
          })}
        </Flex>
      </Container>
    </HeaderContainer>
  </>
);

export default Header;

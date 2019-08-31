import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@rebass/emotion';
import { Link } from 'gatsby';

import { Container } from './commonStyles';
import TransparentHeader from './transparentHeader';

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
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
];

const StyledLink = styled(Link)`
  color: ${props => (props.color ? props.color : '#ffffff')};
`;

const Header = () => (
  <>
    <HeaderContainer>
      <Container>
        <TransparentHeader />
      </Container>
    </HeaderContainer>
    <HeaderContainer backgroundColor="#403D99">
      <Container>
        <Flex justifyContent="center">
          {links.map(link => {
            return (
              <Box mx={3} key={`link-${link.url}`}>
                <StyledLink color={link.color} to={link.url}>
                  {link.name}
                </StyledLink>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </HeaderContainer>
  </>
);

export default Header;

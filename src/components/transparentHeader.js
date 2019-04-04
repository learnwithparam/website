import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

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
  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

const LogoText = styled.h3`
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
  }
`;

const HeaderColumnRight = styled(HeaderColumn)`
  margin-left: auto;
`;

const MenuItem = styled(Link)`
  color: inherit;
  margin-left: 0.25rem;
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

const TransparentHeader = () => (
  <HeaderGrid>
    <HeaderColumn>
      <LogoText>
        <LinkDesktop to="/">Learn with Param</LinkDesktop>
        <LinkMobile to="/">{`{ P }`}</LinkMobile>
      </LogoText>
    </HeaderColumn>
    <HeaderColumnRight>
      <MenuItem to="/blog" activeClassName="active">
        Blog
      </MenuItem>
      <MenuItem to="/about" activeClassName="active">
        About
      </MenuItem>
    </HeaderColumnRight>
  </HeaderGrid>
);

export default TransparentHeader;

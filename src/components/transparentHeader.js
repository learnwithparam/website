import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderGrid = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
`;

const HeaderColumn = styled.div`
  display: flex;
  h3 {
    margin: 0;
    line-height: inherit;
  }
  a {
    &:hover {
      text-decoration: none;
    }
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
  border-radius: 0.25rem;
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
      <h3>
        <Link to="/">Learn with Param</Link>
      </h3>
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

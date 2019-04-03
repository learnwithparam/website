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
    a {
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const HeaderColumnRight = styled(HeaderColumn)`
  margin-left: auto;
  > a {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`;

const TransparentHeader = () => (
  <HeaderGrid>
    <HeaderColumn>
      <h3>
        <Link to="/">Learn with {`{ Param }`}</Link>
      </h3>
    </HeaderColumn>
    <HeaderColumnRight>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </HeaderColumnRight>
  </HeaderGrid>
);

export default TransparentHeader;

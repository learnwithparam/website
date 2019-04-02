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
  h4 {
    margin: 0;
    text-transform: uppercase;
  }
`;

const HeaderColumnRight = styled(HeaderColumn)`
  margin-left: auto;
  a {
    font-size: 0.9rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TransparentHeader = () => (
  <HeaderGrid>
    <HeaderColumn>
      <h4>Learn with Param</h4>
    </HeaderColumn>
    <HeaderColumnRight>
      <Link to="/blog">Blog</Link>
    </HeaderColumnRight>
  </HeaderGrid>
);

export default TransparentHeader;

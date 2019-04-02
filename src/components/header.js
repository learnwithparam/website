import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderGrid = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
`;

const HeaderColumn = styled.div`
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

const Header = ({ bgColor = `transparent` }) => (
  <HeaderGrid bgColor={bgColor}>
    <HeaderColumn>
      <h4>Learn with Param</h4>
    </HeaderColumn>
    <HeaderColumnRight>
      <Link to="/blog">Blog</Link>
    </HeaderColumnRight>
  </HeaderGrid>
);

Header.propTypes = {
  bgColor: PropTypes.string,
};

export default Header;

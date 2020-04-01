import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';

const Container = styled(Box)`
  max-width: 860px;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 1199.98px) {
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 767.98px) {
  }
  @media (max-width: 575.98px) {
    padding: 0 1rem;
  }
`;

const TextCenter = styled(Box)`
  text-align: center;
`;

const ButtonLink = styled(Link)`
  font-size: 14px;
  line-height: 1;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: #fff;
  background-color: #ff2e73;
  text-transform: uppercase;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background-color: #d23669;
  }
`;

const Button = styled.button`
  font-size: 14px;
  line-height: 1;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  color: #fff;
  background-color: #ff2e73;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background-image: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background-color: #d23669;
  }
`;

export { Container, TextCenter, ButtonLink, Button };

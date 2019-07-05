import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.div`
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

const TextCenter = styled.div`
  text-align: center;
`;

const ButtonLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.65rem 1rem;
  border-radius: 2rem;
  color: #fff;
  background-color: #ff2e73;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    background-color: #d23669;
  }
`;

export { Container, TextCenter, ButtonLink };

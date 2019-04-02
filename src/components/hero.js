import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container } from './commonStyles';
import TransparentHeader from './transparentHeader';

const HeroContainer = styled.section`
  background: #fcf8f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroGrid = styled.div`
  display: flex;
`;

const HeroColumn = styled.div`
  flex: 1;
  padding: 2rem 0 4rem;
  align-self: center;
`;

const Hero = ({ title, descriptions, image }) => (
  <HeroContainer>
    <Container>
      <TransparentHeader />
      <HeroGrid>
        <HeroColumn>
          <h1>{title}</h1>
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </HeroColumn>
        <HeroColumn>
          <img src={image} alt={title} />
        </HeroColumn>
      </HeroGrid>
    </Container>
  </HeroContainer>
);

Hero.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  image: PropTypes.any,
};

export default Hero;

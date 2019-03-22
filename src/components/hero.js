import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container } from './commonStyles';

const HeroContainer = styled.section`
  background: #fcf8f3;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const HeroGrid = styled.div`
  display: flex;
`;

const HeroColumn = styled.div(props => ({
  flex: props.column ? props.column : 1,
  padding: props.padding ? props.padding : 0,
  alignSelf: `center`,
}));

const Hero = ({ title, descriptions, image }) => (
  <HeroContainer>
    <Container>
      <HeroGrid>
        <HeroColumn padding={`2rem`}>
          <img src={image} alt={title} />
        </HeroColumn>
        <HeroColumn column={0.8} padding={`2rem`}>
          <h1>{title}</h1>
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
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

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
  padding: 2rem 0 4rem 2rem;
  align-self: center;
`;

const HeroColumnImage = styled(HeroColumn)`
  max-width: 450px;
  padding-left: 0;
`;

const Hero = ({ image }) => (
  <HeroContainer>
    <Container>
      <TransparentHeader />
      <HeroGrid>
        <HeroColumnImage>
          <img src={image} alt="Param at Desk" />
        </HeroColumnImage>
        <HeroColumn>
          <h3>{`Hi, I'm Param 👋`}</h3>
          <p>
            I help people to learn web and mobile technologies through
            workshops, webinars and courses.
          </p>
          <p>
            I prefer teaching through practical examples and encourage everyone
            to learn by doing.
          </p>
        </HeroColumn>
      </HeroGrid>
    </Container>
  </HeroContainer>
);

Hero.propTypes = {
  image: PropTypes.any,
};

export default Hero;

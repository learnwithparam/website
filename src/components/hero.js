import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Heading, Text, Box } from '@chakra-ui/core';
import { Container } from './commonStyles';

const HeroContainer = styled(Box)`
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroGrid = styled.div`
  display: flex;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

const HeroColumn = styled.div`
  flex: 1;
  padding: 4rem 0 4rem 2rem;
  align-self: center;
  @media (max-width: 575.98px) {
    padding: 1rem 0 0;
  }
`;

const HeroColumnImage = styled(HeroColumn)`
  padding-left: 0;
`;

const Hero = ({ image }) => (
  <HeroContainer my={6}>
    <Container>
      <HeroGrid>
        <HeroColumnImage>
          <img src={image} alt="Param at Desk" />
        </HeroColumnImage>
        <HeroColumn>
          <Heading as="h3" mb={6} fontSize="2xl">{`Hi, I'm Param 👋`}</Heading>
          <Text fontSize="lg" mb={3}>
            I help people to learn web and mobile technologies through
            workshops, webinars and courses.
          </Text>
          <Text fontSize="lg">
            I prefer teaching through practical examples and encourage everyone
            to learn by doing.
          </Text>
        </HeroColumn>
      </HeroGrid>
    </Container>
  </HeroContainer>
);

Hero.propTypes = {
  image: PropTypes.any,
};

export default Hero;

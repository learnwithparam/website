import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, Heading, Text } from '@chakra-ui/core';
import { Container } from './commonStyles';

const TeachContainer = styled(Box)`
  padding: 5rem 0;
  @media (max-width: 575.98px) {
    padding: 2rem 0 1rem;
  }
`;

const TeachWrapper = styled(Container)``;

const TeachContent = styled.div``;

const TeachUnStyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const TeachList = styled.li`
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s linear;
  display: flex;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
      rgba(0, 0, 0, 0.07) 0px 8px 15px;
    transform: translateY(-2px);
  }
  @media (max-width: 991.98px) {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
      rgba(0, 0, 0, 0.07) 0px 8px 15px;
    &:hover {
      transform: none;
    }
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: 1.2rem 1rem;
    margin: 0 0 1rem 0;
  }
`;

const TeachColumn = styled.div`
  flex: 1;
  align-self: center;
`;

const TeachColumnImage = styled(TeachColumn)`
  padding: 2rem;
  max-width: 300px;
  @media (max-width: 991.98px) {
    max-width: 240px;
  }
`;

const TeachImageFragment = ({ image, title }) => {
  return (
    <TeachColumnImage>
      <img src={image} alt={title} />
    </TeachColumnImage>
  );
};

const TeachSection = ({ title, description, contents }) => {
  return (
    <TeachContainer bg="gray.50">
      <TeachWrapper>
        <TeachContent>
          <Box pb={3}>
            <Heading as="h1" fontSize="4xl" mb={4} textAlign="center">
              {title}
            </Heading>
            <Text fontSize="lg" textAlign="center" mb={6}>
              {description}
            </Text>
          </Box>
          <TeachUnStyledList>
            {contents.map((content, index) => (
              <TeachList key={index}>
                {content.image && index % 2 !== 0 && (
                  <TeachImageFragment {...content} />
                )}
                <TeachColumn>
                  <Heading as="h2" fontSize="2xl" mb={4}>
                    {content.title}
                  </Heading>
                  <Text fontSize="lg" color="gray.700">
                    {content.description}
                  </Text>
                </TeachColumn>
                {content.image && index % 2 === 0 && (
                  <TeachImageFragment {...content} />
                )}
              </TeachList>
            ))}
          </TeachUnStyledList>
        </TeachContent>
      </TeachWrapper>
    </TeachContainer>
  );
};

TeachSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contents: PropTypes.array,
};

export default TeachSection;

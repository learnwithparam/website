import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TextCenter } from './commonStyles';

const TeachContainer = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 5rem 0 4rem;
`;

const TeachUnStyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const TeachList = styled.li`
  width: 480px;
  padding: 2rem;
`;

const TeachSection = ({ title, description, contents }) => (
  <TeachContainer>
    <TextCenter>
      <h1>{title}</h1>
      <p>{description}</p>
    </TextCenter>
    <TeachUnStyledList>
      {contents.map((content, index) => (
        <TeachList key={index}>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </TeachList>
      ))}
    </TeachUnStyledList>
  </TeachContainer>
);

TeachSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contents: PropTypes.array,
};

export default TeachSection;

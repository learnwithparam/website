import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container, TextCenter } from './commonStyles';

const TeachContainer = styled.section`
  background: #f2f6fc;
  padding: 5rem 0;
`;

const TeachContent = styled.div`
  h1,
  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const TeachUnStyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const TeachList = styled.li`
  width: calc(50% - 1rem);
  padding: 2rem;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  background: #ffffff;
  border-radius: 2px;
`;

const TeachSection = ({ title, description, contents }) => {
  return (
    <TeachContainer>
      <Container>
        <TeachContent>
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
        </TeachContent>
      </Container>
    </TeachContainer>
  );
};

TeachSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contents: PropTypes.array,
};

export default TeachSection;

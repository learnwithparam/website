import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container } from './commonStyles';

const TeachContainer = styled.section`
  background: #f2f6fc;
  padding: 5rem 0;
`;

const TeachContent = styled.div`
  > h1,
  > p {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  > h1 {
    margin-top: 0;
  }
  > p {
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
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s linear;
  display: flex;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
      rgba(0, 0, 0, 0.07) 0px 8px 15px;
    transform: translateY(-2px);
  }
`;

const TeachColumn = styled.div`
  flex: 1;
  align-self: center;
`;

const TeachColumnImage = styled(TeachColumn)`
  padding: 2rem;
  max-width: 450px;
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
    <TeachContainer>
      <Container>
        <TeachContent>
          <h1>{title}</h1>
          <p>{description}</p>
          <TeachUnStyledList>
            {contents.map((content, index) => (
              <TeachList key={index}>
                {content.image && index % 2 !== 0 && (
                  <TeachImageFragment {...content} />
                )}
                <TeachColumn>
                  <h2>{content.title}</h2>
                  <p>{content.description}</p>
                </TeachColumn>
                {content.image && index % 2 === 0 && (
                  <TeachImageFragment {...content} />
                )}
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

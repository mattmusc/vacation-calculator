import React from 'react';
import styled from 'styled-components';

const ResultDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  min-width: 8em;
`;

const ResultValueDiv = styled.div`
  font-weight: 500;
  font-size: 1.8em;
  margin: 0 0.25em;
  padding: 0 0.25em;
`;

type ResultProps = {
  value: number,
};

function Result(props: ResultProps) {
  const { value = 0 } = props;

  return (
    <ResultDiv>
      {'You have '}
      <ResultValueDiv>
        {value || 0}
      </ResultValueDiv>
      {' days left!'}
    </ResultDiv>
  );
}

export default Result;

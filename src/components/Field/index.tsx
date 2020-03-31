// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, Component } from 'react';
import styled, { keyframes } from 'styled-components';
import useWindowSize from '../../hooks/core/useWindowSize';

interface AppElementProps {
  width: number
}

const StyledField = styled.div`
  display: flex;
  justify-content: ${(props: AppElementProps) => (props.width > 768 ? 'flex-end' : 'center')};
  align-items: baseline;
  padding: ${(props: AppElementProps) => (props.width > 768 ? '1em' : '0 1em')};
`;

const StyledFieldLabel = styled.div`
  font-size: 1.1em;
  min-width: 4em;
  padding-left: 0.6em;
  border-left: 3px solid rgb(73, 82, 74);
`;

const bbottomAnimation = keyframes`
  from {
    border-bottom-color: rgb(73, 82, 74, 0.0);
  }
  to {
    border-bottom-color: rgb(73, 82, 74, 1.0);
  }
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #F7F8F7;
  height: 3em;

  &:focus {
    border-bottom: 3px solid rgb(73, 82, 74, 1.0);
    animation-name: ${bbottomAnimation};
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
  }

  font-size: 1.3em;
  text-align: center;
  
  min-width: 4em;
  width: 4em;
`;

type FieldProps = {
  label: string | Component,
  value: number,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
};

function Field(props: FieldProps) {
  const {
    label = 'Label', value = 0, onChange = () => {
    },
  } = props;

  const size = useWindowSize();

  return (
    <StyledField width={size.width}>
      <StyledFieldLabel>
        {label}
      </StyledFieldLabel>
      <StyledInput type="text" value={value} onChange={onChange} />
    </StyledField>
  );
}

export default Field;

// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, Component, FocusEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import useWindowSize from '../../hooks/core/useWindowSize';
import { mobileWidth } from '../../constants';

interface AppElementProps {
  width: number
}

const StyledField = styled.div`
  display: flex;
  justify-content: ${(props: AppElementProps) => (props.width > mobileWidth ? 'flex-end' : 'center')};
  align-items: baseline;
  padding: ${(props: AppElementProps) => (props.width > mobileWidth ? '1em' : '0 1em')};
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
  value: number | string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
};

function Field(props: FieldProps) {
  const {
    label = 'Label', value = 0, onChange = () => {
    }, onBlur = () => {},
  } = props;

  const size = useWindowSize();

  return (
    <StyledField width={size.width}>
      <StyledFieldLabel>
        {label}
      </StyledFieldLabel>
      <StyledInput type="number" min="0" max="1000" value={value} onChange={onChange} onBlur={onBlur} />
    </StyledField>
  );
}

export default Field;

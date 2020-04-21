// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import Field from '../../components/Field';
import Result from '../../components/Result';
import { calculateVacationDays } from '../../services/Field';
import { mobileWidth } from '../../constants';

import useFloatInput from '../../hooks/core/useFloatInput';
import useWindowSize from '../../hooks/core/useWindowSize';

import 'typeface-open-sans';
import './App.css';

interface AppElementProps {
  width: number
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top:  ${(props: AppElementProps) => (props.width > mobileWidth ? '2em' : '0')};
  flex-direction: ${(props: AppElementProps) => (props.width > mobileWidth ? 'row' : 'column-reverse')};
`;

const Styledh2 = styled.h2`
  color: #49524a;
  text-align: center;
`;

const StyledFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1em;
  flex: ${(props: AppElementProps) => (props.width > mobileWidth ? '1 1 320px' : '1 1 100px')};
  margin-top: ${(props: AppElementProps) => (props.width > mobileWidth ? '0' : '1em')};
  padding-left: ${(props: AppElementProps) => (props.width > mobileWidth ? '0' : '1em')};
`;

const ResultContainer = styled(StyledFieldsContainer)`
  align-self: center;
  justify-content: center;
  font-weight: 500;
  padding-left: 1em;
  font-size: 1.5em;
  flex: ${(props: AppElementProps) => (props.width > mobileWidth ? '1 1 320px' : '1 1 100px')};
`;

type StringSetter = React.Dispatch<React.SetStateAction<string>>;
type HTMLInputChangeEvent = ChangeEvent<HTMLInputElement>;
type StringInputChangeFn = (setter: StringSetter) => (event: HTMLInputChangeEvent) => void;

function App() {
  const days = useFloatInput(0);
  const pf = useFloatInput(0);
  const rol = useFloatInput(0);

  const size = useWindowSize();

  return (
    <Container>

      <Header>
        <Styledh2>Days of Vacation Calculator</Styledh2>
      </Header>

      <Main width={size.width}>

        <StyledFieldsContainer width={size.width}>
          <Field value={days.value} label="Days" onChange={days.onChange} onBlur={days.onBlur} />
          <Field value={pf.value} label="PF" onChange={pf.onChange} onBlur={pf.onBlur} />
          <Field value={rol.value} label="ROL" onChange={rol.onChange} onBlur={rol.onBlur} />
        </StyledFieldsContainer>

        <ResultContainer width={size.width}>
          <div style={{ display: 'flex' }}>
            <Result value={calculateVacationDays(days.getFloat(), pf.getFloat(), rol.getFloat())} />
          </div>
        </ResultContainer>

      </Main>

    </Container>
  );
}

export default App;

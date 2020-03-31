// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import Field from '../../components/Field';
import Result from '../../components/Result';
import { calculateVacationDays, toNumber } from '../../services/Field';

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
  margin-top:  ${(props: AppElementProps) => (props.width > 768 ? '2em' : '0')};
  flex-direction: ${(props: AppElementProps) => (props.width > 768 ? 'row' : 'column-reverse')};
`;

const Styledh2 = styled.h2`
  color: #49524a;
  text-align: center;
`;

const StyledFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1em;
  flex: ${(props: AppElementProps) => (props.width > 768 ? '1 1 320px' : '1 1 100px')};
  margin-top: ${(props: AppElementProps) => (props.width > 768 ? '0' : '1em')};
  padding-left: ${(props: AppElementProps) => (props.width > 768 ? '0' : '1em')};
`;

const ResultContainer = styled(StyledFieldsContainer)`
  align-self: center;
  justify-content: center;
  font-weight: 500;
  padding-left: 1em;
  font-size: 1.5em;
  flex: ${(props: AppElementProps) => (props.width > 768 ? '1 1 320px' : '1 1 100px')};
`;

type NumberSetter = React.Dispatch<React.SetStateAction<number>>;
type HTMLInputChangeEvent = ChangeEvent<HTMLInputElement>;
type NumberInputChangeFn = (setter: NumberSetter) => (event: HTMLInputChangeEvent) => void;

function App() {
  const [days, setDays] = useState(0);
  const [pf, setPf] = useState(0);
  const [rol, setRol] = useState(0);

  const handleOnChange: NumberInputChangeFn = (setter) => (event) => setter(toNumber(event));

  const size = useWindowSize();

  return (
    <Container>
      <Header>
        <Styledh2>Days of Vacation Calculator</Styledh2>
      </Header>
      <Main width={size.width}>
        <StyledFieldsContainer width={size.width}>
          <Field value={days} label="Days" onChange={handleOnChange(setDays)} />
          <Field value={pf} label="PF" onChange={handleOnChange(setPf)} />
          <Field value={rol} label="R.O.L." onChange={handleOnChange(setRol)} />
        </StyledFieldsContainer>
        <ResultContainer width={size.width}>
          <div style={{ display: 'flex' }}>
            <Result value={calculateVacationDays(days, pf, rol)} />
          </div>
        </ResultContainer>
      </Main>
    </Container>
  );
}

export default App;

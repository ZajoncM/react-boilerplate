import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

interface ResultBoxProps {
  value: number;
}

const ResultBox: FunctionComponent<ResultBoxProps> = ({ value }) => {
  return <Wrapper>{value}</Wrapper>;
};

export default ResultBox;

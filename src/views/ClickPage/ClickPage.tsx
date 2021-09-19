import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, RootState } from 'store';
import { Button } from 'components/atoms/Button/Button';
import { Card } from 'components/molecules/Card/Card';
import { Wrapper, Heading } from './ClickPage.styles';
import ResultBox from 'components/atoms/ResultBox/ResultBox';

const ClickPage: FunctionComponent = () => {
  const count = useSelector((state: RootState) => state.clicker);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Card>
        <Heading>Hello world</Heading>
        <ResultBox value={count} />
        <Button onClick={() => dispatch(increment(1))}>test</Button>
      </Card>
    </Wrapper>
  );
};

export default ClickPage;

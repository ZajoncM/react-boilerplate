import React, { FunctionComponent, useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Card } from 'components/molecules/Card/Card';
import { Wrapper, Heading } from './ClickPage.styles';
import ResultBox from 'components/atoms/ResultBox/ResultBox';

const ClickPage: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <Card>
        <Heading>Hello world</Heading>
        <ResultBox value={value} />
        <Button onClick={() => setValue(value + 1)}>test</Button>
      </Card>
    </Wrapper>
  );
};

export default ClickPage;

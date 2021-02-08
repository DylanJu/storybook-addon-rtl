import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { EventType, Variant } from '@testing-library/react';
import { useChannel, useGlobals } from '@storybook/api';
import { Prefix, PossibleQueries } from 'easy-query-selector';
import { POSSIBLE_QUERIES, VARIANT } from './constants';
import OptionSelector from './components/OptionSelector';
import ResultSelector from './components/ResultSelector';

const Main = styled('main')`
  padding: 10px;
`;

const App: FC = () => {
  const [globals, updateGlobals] = useGlobals();
  const variant: Variant = globals[VARIANT];
  const [prefix, setPrefix] = useState<Prefix>('screen');
  const [eventType, setEventType] = useState<EventType | ''>('click');
  const [possibleQueries, setPossibleQueries] = useState<string[]>([]);

  useEffect(() => {
    updateGlobals({
      [VARIANT]: 'get',
    });
  }, []);

  useChannel({
    [POSSIBLE_QUERIES]: (value: PossibleQueries) => {
      setPossibleQueries(Object.keys(value).map((method) => `${prefix}.${value[method]}`));
    },
  });

  const onPrefixChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefix(e.currentTarget.value as Prefix);
  };

  const onVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateGlobals({
      [VARIANT]: e.currentTarget.value as Variant,
    });
  };

  const onEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEventType(e.currentTarget.value as EventType);
  };

  return (
    <Main>
      <OptionSelector
        prefix={prefix}
        onPrefixChange={onPrefixChange}
        variant={variant}
        onVariantChange={onVariantChange}
        eventType={eventType}
        onEventTypeChange={onEventTypeChange}
      />
      <ResultSelector label="Result" resultOptions={possibleQueries} />
    </Main>
  );
};

export default App;

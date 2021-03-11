import React, { FC, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Variant } from '@testing-library/react';
import { useChannel, useGlobals } from '@storybook/api';
import { Prefix, PossibleQueries } from 'easy-query-selector';
import { POSSIBLE_QUERIES, VARIANT } from './constants';
import { resolvePossibleOptions } from './util';
import OptionSelectBox from './components/OptionSelectBox';
import ResultSelectBox from './components/ResultSelectBox';

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  padding: 10px;
  box-sizing: content-box;

  * {
    box-sizing: content-box;
  }
`;

const App: FC = () => {
  const [globals, updateGlobals] = useGlobals();
  const variant: Variant = globals[VARIANT];
  const [prefix, setPrefix] = useState<Prefix>('screen');

  const [queryOptions, setQueryOptions] = useState<string[]>([]);
  const [eventOptions, setEventOptions] = useState<string[]>([]);

  const [querySelector, setQuerySelector] = useState<string>('');
  const [eventSelector, setEventSelector] = useState<string>('');

  useEffect(() => {
    // set initial variant value
    updateGlobals({
      [VARIANT]: 'get',
    });
  }, []);

  useChannel({
    [POSSIBLE_QUERIES]: (possibleQueries: PossibleQueries) => {
      const [newQueryOptions, newEventOptions] = resolvePossibleOptions(prefix, possibleQueries);
      setQueryOptions(newQueryOptions);
      setQuerySelector(newQueryOptions[0]);
      setEventOptions(newEventOptions);
      setEventSelector(newEventOptions[0]);
    },
  });

  const onPrefixChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefix(e.currentTarget.value as Prefix);
  }, []);

  const onVariantChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateGlobals({
      [VARIANT]: e.currentTarget.value as Variant,
    });
  }, []);

  const onQuerySelectorChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuerySelector(e.currentTarget.value);
  }, []);

  const onEventSelectorChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setEventSelector(e.currentTarget.value);
  }, []);

  return (
    <Main>
      <OptionSelectBox
        prefix={prefix}
        onPrefixChange={onPrefixChange}
        variant={variant}
        onVariantChange={onVariantChange}
      />
      <ResultSelectBox
        label="Queries"
        selected={querySelector}
        options={queryOptions}
        onChange={onQuerySelectorChange}
      />
      <ResultSelectBox
        label="Events"
        selected={eventSelector}
        options={eventOptions}
        onChange={onEventSelectorChange}
      />
    </Main>
  );
};

export default App;

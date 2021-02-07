import React, { FC, useState } from 'react';
// import { FireFunction, FireObject } from '@testing-library/react';
import { useChannel } from '@storybook/api';
import { Prefix, QueryType } from 'easy-query-selector';
import { SUGGEST_QUERY, POSSIBLE_QUERY } from './constants';
import OptionSelector from './components/OptionSelector';
import QuerySuggestion from './components/QuerySuggestion';

const App: FC = () => {
  const [prefix, setPrefix] = useState<Prefix>('screen');
  const [queryType, setQueryType] = useState<QueryType>('get');
  const [selectedQuery, setSuggestQuery] = useState('');
  // const [possibleQuery, setPossibleQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('click');

  useChannel({
    [SUGGEST_QUERY]: (value) => {
      setSuggestQuery(value);
    },
    [POSSIBLE_QUERY]: (value) => {
      console.log('aa', value);
    },
  });

  // const onEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedEvent(e.currentTarget.value);
  // };

  const onPrefixChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefix(e.currentTarget.value as Prefix);
  };

  const onQueryTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryType(e.currentTarget.value as QueryType);
  };

  return (
    <main>
      <OptionSelector
        prefix={prefix}
        onPrefixChange={onPrefixChange}
        queryType={queryType}
        onQueryTypeChange={onQueryTypeChange}
      />
      <QuerySuggestion prefix={prefix} selectedQuery={selectedQuery} />
      <QuerySuggestion prefix={prefix} selectedQuery={selectedEvent} />
    </main>
  );
};

export default App;

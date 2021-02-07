import React, { FC, useState } from 'react';
import { EventType } from '@testing-library/react';
import { useChannel } from '@storybook/api';
import { Prefix, QueryType } from 'easy-query-selector';
import { SUGGEST_QUERY, POSSIBLE_QUERY } from './constants';
import OptionSelector from './components/OptionSelector';
import QuerySuggestion from './components/QuerySuggestion';

const App: FC = () => {
  const [prefix, setPrefix] = useState<Prefix>('screen');
  const [queryType, setQueryType] = useState<QueryType>('get');
  const [eventType, setEventType] = useState<EventType | ''>('click');
  const [selectedQuery, setSuggestQuery] = useState('');

  useChannel({
    [SUGGEST_QUERY]: (value) => {
      setSuggestQuery(value);
    },
    [POSSIBLE_QUERY]: (value) => {
      console.log('aa', value);
    },
  });

  const onPrefixChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefix(e.currentTarget.value as Prefix);
  };

  const onQueryTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryType(e.currentTarget.value as QueryType);
  };

  const onEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEventType(e.currentTarget.value as EventType);
  };

  return (
    <main>
      <OptionSelector
        prefix={prefix}
        onPrefixChange={onPrefixChange}
        queryType={queryType}
        onQueryTypeChange={onQueryTypeChange}
        eventType={eventType}
        onEventTypeChange={onEventTypeChange}
      />
      <QuerySuggestion label="Query" prefix={prefix} selectedQuery={selectedQuery} />
      <QuerySuggestion label="Event" prefix={prefix} selectedQuery={selectedQuery === '' ? '' : eventType} />
    </main>
  );
};

export default App;

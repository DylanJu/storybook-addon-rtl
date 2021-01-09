import React, { FC, useState, useRef, useCallback } from 'react';
import { fireEvent } from '@testing-library/react';
import { useChannel } from '@storybook/api';
import styled from 'styled-components';
import { SUGGEST_QUERY } from './constants';

const Form = styled('form')`
  width: 100%;
`;

const SuggestionQuery = styled('input')`
  width: 100%;
  padding: 5px 10px;
`;

const App: FC = () => {
  const [query, setQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('click');
  const queryRef = useRef<HTMLInputElement>(null);
  const eventsRef = useRef<HTMLInputElement>(null);

  useChannel({
    [SUGGEST_QUERY]: (value) => {
      setQuery(value);
    },
  });

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (value === 'query' && queryRef && queryRef.current) {
      queryRef.current.select();
      document.execCommand('copy');
      queryRef.current.blur();
    }

    if (value === 'selectedEvent' && eventsRef && eventsRef.current) {
      eventsRef.current.select();
      document.execCommand('copy');
      eventsRef.current.blur();
    }
  }, []);

  const onEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(e.currentTarget.value);
  };

  return (
    <div>
      <Form>
        <button type="button" onClick={onClick} value="query">
          button
        </button>
        <label>
          <SuggestionQuery placeholder="click dom" ref={queryRef} type="text" value={`screen.${query};`} readOnly />
        </label>
      </Form>
      <Form>
        <button type="button" onClick={onClick} value="avaliableEvents">
          button
        </button>
        <select value={selectedEvent} onChange={onEventChange}>
          {Object.keys(fireEvent).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <label>
          <SuggestionQuery
            ref={eventsRef}
            type="text"
            value={`fireEvent.${selectedEvent}(screen.${query});`}
            readOnly
          />
        </label>
      </Form>
    </div>
  );
};

export default App;

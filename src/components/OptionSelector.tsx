import React from 'react';
import styled from 'styled-components';
import { fireEvent, EventType } from '@testing-library/react';
import { Prefix, QueryType } from 'easy-query-selector';

const Root = styled('div')`
  display: flex;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
`;

const SelectBox = styled('div')`
  position: relative;
  display: flex;
  box-sizing: border-box;
  margin-right: 10px;
  border-radius: 6px;
`;

const Label = styled('label')`
  padding: 0 12px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 6px 0 0 6px;
  border-right: none;
  font-size: 12px;
  line-height: 27px;
  background-color: rgb(249, 250, 251);
  color: rgb(107, 114, 128);
`;

const Select = styled('select')`
  padding: 6px 32px 6px 12px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0 6px 6px 0;
  background-color: transparent;
  appearance: none;
  outline: none;
  color: rgb(107, 114, 128);
`;

const Arrow = styled('span')`
  position: absolute;
  right: 10px;
  top: calc(50% - 5px);
  display: block;
  width: 5px;
  height: 5px;
  border-right: solid thin gray;
  border-bottom: solid thin gray;
  transform: rotate(45deg);
`;

export interface Props {
  prefix: Prefix;
  onPrefixChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  queryType: QueryType;
  onQueryTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  eventType: EventType;
  onEventTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const prefixOptions: Prefix[] = ['screen', 'cy'];
const queryTypeOptions: QueryType[] = ['get', 'query', 'find'];
const eventOptinos = Object.keys(fireEvent);
eventOptinos.sort((a, b) => a.localeCompare(b));
Object.freeze(eventOptinos);

const optionSelector: React.FC<Props> = ({
  prefix,
  onPrefixChange,
  queryType,
  onQueryTypeChange,
  eventType,
  onEventTypeChange,
}) => {
  return (
    <Root>
      <SelectBox>
        <Label htmlFor="prefix-select">Prefix</Label>
        <Select id="prefix-select" value={prefix} onChange={onPrefixChange}>
          {prefixOptions.map((prefixOption) => (
            <option key={prefixOption} value={prefixOption}>
              {prefixOption}
            </option>
          ))}
        </Select>
        <Arrow />
      </SelectBox>
      <SelectBox>
        <Label htmlFor="query-type-select">Query Type</Label>
        <Select id="query-type-select" value={queryType} onChange={onQueryTypeChange}>
          {queryTypeOptions.map((queryTypeOption) => (
            <option key={queryTypeOption} value={queryTypeOption}>
              {queryTypeOption}
            </option>
          ))}
        </Select>
        <Arrow />
      </SelectBox>
      <SelectBox>
        <Label htmlFor="event-type-select">Event Type</Label>
        <Select id="event-type-select" value={eventType} onChange={onEventTypeChange}>
          {eventOptinos.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </Select>
        <Arrow />
      </SelectBox>
    </Root>
  );
};

export default optionSelector;

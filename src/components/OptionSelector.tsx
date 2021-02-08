import React from 'react';
import styled from 'styled-components';
import { fireEvent, EventType, Variant } from '@testing-library/react';
import { Prefix } from 'easy-query-selector';

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
  variant: Variant;
  onVariantChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  eventType: EventType | '';
  onEventTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const prefixOptions: Prefix[] = ['screen', 'cy'];
const variantOptions: Variant[] = ['get', 'getAll', 'query', 'queryAll', 'find', 'findAll'];
const eventOptinos = Object.keys(fireEvent);
eventOptinos.sort((a, b) => a.localeCompare(b));
Object.freeze(eventOptinos);

const optionSelector: React.FC<Props> = ({
  prefix,
  onPrefixChange,
  variant,
  onVariantChange,
  eventType,
  onEventTypeChange,
}) => {
  return (
    <Root>
      <SelectBox>
        <Label htmlFor="prefix-selector">Prefix</Label>
        <Select id="prefix-selector" value={prefix} onChange={onPrefixChange}>
          {prefixOptions.map((prefixOption) => (
            <option key={prefixOption} value={prefixOption}>
              {prefixOption}
            </option>
          ))}
        </Select>
        <Arrow />
      </SelectBox>
      <SelectBox>
        <Label htmlFor="variant-selector">Variant</Label>
        <Select id="variant-selector" value={variant} onChange={onVariantChange}>
          {variantOptions.map((variantOption) => (
            <option key={variantOption} value={variantOption}>
              {variantOption}
            </option>
          ))}
        </Select>
        <Arrow />
      </SelectBox>
      <SelectBox>
        <Label htmlFor="event-selector">Event</Label>
        <Select id="event-selector" value={eventType} onChange={onEventTypeChange}>
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

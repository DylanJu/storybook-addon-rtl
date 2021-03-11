import React from 'react';
import styled from 'styled-components';
import { Variant } from '@testing-library/react';
import { Prefix } from 'easy-query-selector';
import SelectBox from './SelectBox';

const Root = styled('div')`
  display: flex;
`;

const Box = styled('div')`
  width: 200px;
`;

export interface Props {
  prefix: Prefix;
  onPrefixChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  variant: Variant;
  onVariantChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const prefixOptions: Prefix[] = ['screen', 'cy'];
const variantOptions: Variant[] = ['get', 'getAll', 'query', 'queryAll', 'find', 'findAll'];

const optionSelector: React.FC<Props> = ({ prefix, onPrefixChange, variant, onVariantChange }) => {
  return (
    <Root>
      <Box>
        <SelectBox
          id="prefix-selector"
          label="Prefix"
          selected={prefix}
          options={prefixOptions}
          onChange={onPrefixChange}
          placeholder=""
        />
      </Box>
      <Box>
        <SelectBox
          id="variant-selector"
          label="Variant"
          selected={variant}
          options={variantOptions}
          onChange={onVariantChange}
          placeholder=""
        />
      </Box>
      {/* <SelectBox
        id="event-selector"
        label="Event"
        selected={eventType}
        options={eventOptinos}
        onChange={onEventTypeChange}
        placeholder=""
      /> */}
    </Root>
  );
};

export default optionSelector;

import React from 'react';
import { Prefix, QueryType } from 'easy-query-selector';

export interface Props {
  prefix: Prefix;
  onPrefixChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  queryType: QueryType;
  onQueryTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const prefixOptions: Prefix[] = ['screen', 'cy'];
const queryTypeOptions: QueryType[] = ['get', 'query', 'find'];

const optionSelector: React.FC<Props> = ({ prefix, onPrefixChange, queryType, onQueryTypeChange }) => {
  return (
    <div>
      <select value={prefix} onChange={onPrefixChange}>
        {prefixOptions.map((prefixOption) => (
          <option key={prefixOption} value={prefixOption}>
            {prefixOption}
          </option>
        ))}
      </select>
      <select value={queryType} onChange={onQueryTypeChange}>
        {queryTypeOptions.map((queryTypeOption) => (
          <option key={queryTypeOption} value={queryTypeOption}>
            {queryTypeOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default optionSelector;

import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Prefix } from 'easy-query-selector';

const Form = styled('form')`
  display: flex;
  width: 100%;
`;

const Result = styled('input')`
  width: 100%;
  padding: 5px 10px;
`;

export interface Props {
  prefix: Prefix;
  selectedQuery: string;
}

const QuerySuggestion: React.FC<Props> = ({ prefix, selectedQuery }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    if (ref && ref.current) {
      ref.current.select();
      document.execCommand('copy');
      ref.current.blur();
    }
  }, []);

  return (
    <Form>
      <button type="button" onClick={onClick}>
        Copy
      </button>
      <label htmlFor="result">
        <Result
          id="result"
          placeholder="click dom"
          ref={ref}
          type="text"
          value={`${prefix}.${selectedQuery}`}
          readOnly
        />
      </label>
    </Form>
  );
};

export default QuerySuggestion;

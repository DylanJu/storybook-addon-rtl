import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Prefix } from 'easy-query-selector';

const Form = styled('form')`
  margin: 15px 0;
  width: 100%;
`;

const Label = styled('label')`
  font-size: 12px;
`;

const Paper = styled('div')`
  display: flex;
  margin-top: 5px;
`;

const CopyButton = styled('button')`
  padding: 0 12px;
  background-color: rgb(249, 250, 251);
  border: 1px solid rgb(209, 213, 219);
  border-radius: 6px 0 0 6px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: rgb(107, 114, 128);
`;

const Code = styled('code')<{ active: boolean }>`
  min-width: 300px;
  padding: 8px 12px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0 6px 6px 0;
  border-left: none;
  font-size: 12px;
  color: ${({ active }) => (active ? 'black' : 'rgb(107, 114, 128)')};
  font-style: ${({ active }) => (active ? 'none' : 'italic')};
`;

export interface Props {
  label: string;
  prefix: Prefix;
  selectedQuery: string;
}

const QuerySuggestion: React.FC<Props> = ({ label, prefix, selectedQuery }) => {
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
      <Label htmlFor={label}>{label}</Label>
      <Paper>
        <CopyButton type="button" onClick={onClick}>
          Copy
        </CopyButton>
        <Code id={label} ref={ref} active={selectedQuery !== ''}>
          {selectedQuery ? `${prefix}.${selectedQuery}` : 'Click DOM'}
        </Code>
      </Paper>
    </Form>
  );
};

export default QuerySuggestion;

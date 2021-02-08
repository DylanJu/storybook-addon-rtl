import React, { useRef, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectBox from './SelectBox';

const Form = styled('form')`
  position: relative;
  display: flex;
`;

const CopyButton = styled('button')`
  flex: 0 0;
  padding: 0 12px;
  background-color: rgb(249, 250, 251);
  border: 1px solid rgb(209, 213, 219);
  border-radius: 6px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: rgb(107, 114, 128);
  outline: none;
  cursor: pointer;

  :hover {
    color: #1ea7fd;
  }
`;

const Input = styled('input')`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
`;

export interface Props {
  label: string;
  resultOptions: string[];
}

const ResultQuery: React.FC<Props> = ({ label, resultOptions }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string>('');

  const onClick = useCallback(() => {
    if (ref && ref.current) {
      ref.current.select();
      document.execCommand('copy');
      ref.current.blur();
    }
  }, []);

  const onResultChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setResult(e.currentTarget.value);
  }, []);

  useEffect(() => {
    if (resultOptions.length > 0) {
      setResult(resultOptions[0]);
    } else {
      setResult('');
    }
  }, [resultOptions]);

  return (
    <Form>
      <SelectBox
        id={label}
        label={label}
        selected={result}
        options={resultOptions}
        onChange={onResultChange}
        placeholder="Click DOM"
      />
      <CopyButton type="button" onClick={onClick}>
        Copy
      </CopyButton>
      <Input ref={ref} value={result} readOnly />
    </Form>
  );
};

export default ResultQuery;

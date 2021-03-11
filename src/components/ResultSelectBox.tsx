import React, { useRef, useCallback } from 'react';
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
  selected: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ResultSelectBox: React.FC<Props> = ({ label, selected, options, onChange }) => {
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
      <SelectBox
        id={label}
        label={label}
        selected={selected}
        options={options}
        onChange={onChange}
        placeholder="Click DOM"
      />
      <CopyButton type="button" onClick={onClick}>
        Copy
      </CopyButton>
      <Input ref={ref} value={selected} readOnly />
    </Form>
  );
};

export default ResultSelectBox;

import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled('div')`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex: 1 1;
  margin-right: 10px;
  border-radius: 6px;
  z-index: 1;
`;

const Label = styled('label')`
  flex: 0 0 40px;
  padding: 0 12px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 6px 0 0 6px;
  border-right: none;
  font-size: 12px;
  line-height: 31px;
  text-align: center;
  background-color: rgb(249, 250, 251);
  color: rgb(107, 114, 128);
  font-family: sans-serif;
`;

const Select = styled('select')`
  flex: 1 1;
  padding: 8px 32px 8px 12px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0 6px 6px 0;
  appearance: none;
  outline: none;
  font-family: monospace;
  font-size: 12px;

  :disabled {
    background-color: rgb(247, 247, 247);
    color: rgb(107, 114, 128);
    font-style: italic;
    opacity: 1;
  }
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
  id: string;
  label: string;
  selected: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
}

const SelectBox: FC<Props> = ({ id, label, selected, options, onChange, placeholder }) => {
  const disabled = options.length === 0;
  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} value={selected} onChange={onChange} disabled={disabled}>
        {disabled && <option>{placeholder}</option>}
        {options.map((optionItem) => (
          <option key={optionItem} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </Select>
      <Arrow />
    </Root>
  );
};

export default SelectBox;

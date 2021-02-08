import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import ResultSelector from './ResultSelector';

it('shows placholder value in select when option props is empty', () => {
  render(<ResultSelector label="Queries" resultOptions={[]} />);

  expect(screen.getByRole('combobox')).toHaveValue('Click DOM');
});

it('shows first value of options props in select and be changed', () => {
  render(<ResultSelector label="Queries" resultOptions={['abc', 'ers']} />);

  expect(screen.getByRole('combobox')).toHaveValue('abc');
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'ers' } });
  expect(screen.getByRole('combobox')).toHaveValue('ers');
});

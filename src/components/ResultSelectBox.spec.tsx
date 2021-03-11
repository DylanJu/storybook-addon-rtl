import React from 'react';
import { screen, render } from '@testing-library/react';
import ResultSelectBox from './ResultSelectBox';

it('shows placholder value in select when option props is empty', () => {
  render(<ResultSelectBox label="Queries" selected="" options={[]} onChange={jest.fn()} />);

  expect(screen.getByRole('combobox')).toHaveValue('Click DOM');
});

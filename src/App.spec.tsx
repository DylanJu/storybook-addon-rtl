import React from 'react';
import { render, screen } from '@testing-library/react';
import * as storybookApi from '@storybook/api';
import App from './App';

jest.mock('@storybook/api');

interface Globals {
  [key: string]: unknown;
}

const globals: Globals = {};
const updateGlobals = jest.fn((map) => {
  Object.keys(map).forEach((key) => {
    globals[key] = map[key];
  });
});
(storybookApi.useGlobals as jest.Mock).mockReturnValue([globals, updateGlobals]);

it('renders without crushing', () => {
  render(<App />);

  expect(screen.getByLabelText('Prefix')).toHaveValue('screen');
  expect(screen.getByLabelText('Variant')).toHaveValue('get');
  expect(screen.getByLabelText('Queries')).toHaveValue('Click DOM');
  expect(screen.getByLabelText('Events')).toHaveValue('Click DOM');
});

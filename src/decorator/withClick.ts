import { useEffect } from 'react';
import { getSuggestedQuery, Method } from '@testing-library/react';
import { addons } from '@storybook/addons';
import { SUGGEST_QUERY, POSSIBLE_QUERY } from '../constants';

const queryMethods: Method[] = [
  'Role',
  'LabelText',
  'PlaceholderText',
  'Text',
  'DisplayValue',
  'AltText',
  'Title',
  'TestId',
];

const emmiter = (e: MouseEvent) => {
  const channel = addons.getChannel();
  const target = e.target as HTMLElement;
  const suggestion = getSuggestedQuery(target);

  if (suggestion) {
    channel.emit(SUGGEST_QUERY, suggestion.toString());
  }

  const result = {};

  queryMethods.forEach((method) => {
    const possible = getSuggestedQuery(target, 'get', method);
    result[method] = possible;
  });

  channel.emit(POSSIBLE_QUERY, result);
};

export const withClick = (storyFn, context) => {
  useEffect(() => {
    const node = document.getElementById('root');

    node.addEventListener('click', emmiter);

    return () => {
      node.removeEventListener('click', emmiter);
    };
  }, []);

  return storyFn();
};

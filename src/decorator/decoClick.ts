import { useEffect } from 'react';
import { addons, DecoratorFunction } from '@storybook/addons';
import { getSuggestedQuery, Method, Variant } from '@testing-library/react';
import { PossibleQueries } from 'easy-query-selector';
import { POSSIBLE_QUERIES, VARIANT } from '../constants';

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

export const decoClick: DecoratorFunction = (storyFn, context) => {
  const { globals } = context;
  const variant: Variant = globals[VARIANT];

  const emmiter = (e: MouseEvent) => {
    const channel = addons.getChannel();
    const target = e.target as HTMLElement;

    if (channel) {
      const possibleQueries: PossibleQueries = {};

      queryMethods.forEach((method) => {
        const possible = getSuggestedQuery(target, variant, method);
        if (possible) {
          possibleQueries[method] = possible.toString();
        }
      });

      channel.emit(POSSIBLE_QUERIES, possibleQueries);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const node = document.getElementById('root');

    if (node) {
      node.addEventListener('click', emmiter);

      return () => {
        node.removeEventListener('click', emmiter);
      };
    }
  }, []);

  return storyFn();
};

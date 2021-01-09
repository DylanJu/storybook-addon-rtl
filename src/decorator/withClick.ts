import { useEffect } from 'react';
import { getSuggestedQuery } from '@testing-library/react';
import { addons } from '@storybook/addons';
import { SUGGEST_QUERY } from '../constants';

const emmiter = (e: MouseEvent) => {
  const channel = addons.getChannel();
  const target = e.target as HTMLElement;
  const suggestion = getSuggestedQuery(target);

  if (suggestion) {
    channel.emit(SUGGEST_QUERY, suggestion.toString());
  }
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

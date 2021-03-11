import { fireEvent } from '@testing-library/react';
import { Prefix, PossibleQueries } from 'easy-query-selector';

const possibleEvents = Object.keys(fireEvent);
possibleEvents.sort((a, b) => a.localeCompare(b));
Object.freeze(possibleEvents);

export const resolvePossibleOptions = (prefix: Prefix, possibleQueries: PossibleQueries): [string[], string[]] => {
  const queryOptions = Object.keys(possibleQueries).map((method) => `${prefix}.${possibleQueries[method]}`);
  const eventOptions = queryOptions[0] ? possibleEvents.map((event) => `fireEvent.${event}(${queryOptions[0]})`) : [];
  return [queryOptions, eventOptions];
};

import { resolvePossibleOptions } from './index';

const possibleQueries = {
  Role: `getByRole('button', { name: /click/i })`,
  Title: `getByTitle(/title/i)`,
  LabelText: `getByLabelText(/name/i)`,
  Text: `getByText(/good job/i)`,
};

describe('resolvePossibleOptions', () => {
  it('should return empty event option list if possible queries is empty', () => {
    const [queryOptions, eventOptions] = resolvePossibleOptions('screen', {});
    expect(queryOptions).toEqual([]);
    expect(eventOptions).toEqual([]);
  });

  it('should return query and event option list', () => {
    const [queryOptions, eventOptions] = resolvePossibleOptions('screen', possibleQueries);
    expect(queryOptions).toEqual([
      `screen.getByRole('button', { name: /click/i })`,
      `screen.getByTitle(/title/i)`,
      `screen.getByLabelText(/name/i)`,
      `screen.getByText(/good job/i)`,
    ]);
    expect(eventOptions[0]).toBe(`fireEvent.abort(screen.getByRole('button', { name: /click/i }))`);
    expect(eventOptions[1]).toBe(`fireEvent.animationEnd(screen.getByRole('button', { name: /click/i }))`);
    expect(eventOptions[2]).toBe(`fireEvent.animationIteration(screen.getByRole('button', { name: /click/i }))`);
  });
});

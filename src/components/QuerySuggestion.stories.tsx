/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import QuerySuggestion, { Props } from './QuerySuggestion';

export default { title: 'QuerySuggestion', component: QuerySuggestion } as Meta;

const Template: Story<Props> = (args) => <QuerySuggestion {...args} />;

export const Default = Template.bind({});
Default.args = {
  prefix: 'screen',
  selectedQuery: `getByRole('button', { name: 'test' })`,
};

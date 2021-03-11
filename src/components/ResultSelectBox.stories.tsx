/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import ResultSelector, { Props } from './ResultSelectBox';

export default { title: 'ResultSelector', component: ResultSelector } as Meta;

const Template: Story<Props> = (args) => <ResultSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Queries',
  selected: `screen.getByRole('button', { name: /click/i })`,
  options: [
    `screen.getByRole('button', { name: /click/i })`,
    `screen.getByTitle('Title')`,
    `screen.getByText(/good job/i)`,
  ],
  onChange: action('change'),
};

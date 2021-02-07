/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import OptionSelector, { Props } from './OptionSelector';

export default { title: 'OptionSelector', component: OptionSelector } as Meta;

const Template: Story<Props> = (args) => <OptionSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  prefix: 'screen',
  onPrefixChange: action('prefix change'),
  queryType: 'get',
  onQueryTypeChange: action('query type change'),
};

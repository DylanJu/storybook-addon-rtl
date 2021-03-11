/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import SelectBox, { Props } from './SelectBox';

export default { title: 'SelectBox', component: SelectBox } as Meta;

const Template: Story<Props> = (args) => <SelectBox {...args} />;

export const Single = Template.bind({});
Single.args = {
  id: 'Quries',
  label: 'Queries',
  selected: 'Role',
  options: ['Role', 'LabelText', 'PlaceholderText', 'Text', 'DisplayValue', 'AltText', 'Title', 'TestId'],
  onChange: action('change'),
  placeholder: 'Click DOM',
};

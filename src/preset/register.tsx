import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import App from '../App';
import { ADDON_ID } from '../constants';

addons.register(ADDON_ID, (api) => {
  addons.add(ADDON_ID, {
    type: types.PANEL,
    title: ADDON_ID,
    render: ({ active, key }) => (
      <AddonPanel active={!!active} key={key}>
        <App />
      </AddonPanel>
    ),
  });
});

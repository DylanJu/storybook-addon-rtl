module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    // '../dist/preset',
  ],
  webpackFinal: (config) => {
    config.resolve.alias['@storybook/api'] = require.resolve('./storybookApiMock.ts');
    return config;
  },
};

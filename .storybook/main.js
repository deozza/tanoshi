const sveltePreprocess = require('svelte-preprocess');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');

module.exports = {
  stories: [
    '../src/storybook/**/*.stories.svelte',
    '../src/storybook/**/*.stories.mdx',
  ],
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-svelte-csf',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      use: [require.resolve('@storybook/source-loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre',
    });
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  core: {
    builder: 'webpack4',
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  staticDirs: ['../static'],
};

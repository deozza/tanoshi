const sveltePreprocess = require('svelte-preprocess');
const path = require('path');
const tsconfigPaths = require("vite-tsconfig-paths").default;

module.exports = {
  stories: [
    '../src/storybook/**/*.stories.svelte',
    '../src/storybook/**/*.stories.mdx',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: "@storybook/svelte",
  core: {
    "builder": "@storybook/builder-vite"
  },
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  features: {
    "storyStoreV7": false
  },
  staticDirs: ['../static'],
  /**
   * A option exposed by storybook-builder-vite for customising the Vite config.
   * @see https://github.com/eirslett/storybook-builder-vite#customize-vite-config
   * @param {import("vite").UserConfig} config
   * @see https://vitejs.dev/config/
   */
   viteFinal: async (config) => {
    config.plugins.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        // My tsconfig.json isn't simply in viteConfig.root,
        // so I've passed an explicit path to it:
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );
    
    return config;
  },
}
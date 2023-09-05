import { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite') as any,
    options: {},
  },

  features: {
    storyStoreV7: true,
  },

  docs: {
    autodocs: true,
  },

  babel: async (config) => ({
    ...config,
    plugins: [
      'babel-plugin-macros',
      [
        '@emotion/babel-plugin-jsx-pragmatic',
        {
          export: 'jsx',
          import: '__cssprop',
          module: '@emotion/react',
        },
      ],
      ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
    ],
  }),
};

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;

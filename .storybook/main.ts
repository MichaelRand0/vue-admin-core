import type { StorybookConfig } from '@storybook/vue3-vite'
import { fileURLToPath, URL } from 'node:url'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': fileURLToPath(new URL('../src', import.meta.url)),
          '@pages': fileURLToPath(new URL('../src/pages', import.meta.url)),
          '@ui': fileURLToPath(new URL('../src/shared/ui', import.meta.url)),
          '@app': fileURLToPath(new URL('../src/app', import.meta.url)),
          '@styles': fileURLToPath(new URL('../src/shared/styles', import.meta.url)),
        },
      },
    }
  },
}

export default config

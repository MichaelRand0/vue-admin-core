import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/**/i18n/**'],
    rules: {
      'fsd/public-api': 'off',
    },
  },
])

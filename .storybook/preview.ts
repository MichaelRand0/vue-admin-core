import type { Preview } from '@storybook/vue3-vite'
import '@fontsource/roboto'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/600.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [
    () => ({
      template: `
        <div style="background: black; padding: 20px;">
          <story />
        </div>
      `,
    }),
  ],
}

export default preview

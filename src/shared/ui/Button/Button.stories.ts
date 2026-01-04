import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta = {
  title: 'UI/Buttons/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

export const Default: StoryObj<typeof Button> = {
  args: {
    default: 'Кнопка',
    variant: 'only-text',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">{{ args.default }}</Button>`,
  }),
}

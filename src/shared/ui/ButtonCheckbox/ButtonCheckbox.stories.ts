import type { Meta, StoryObj } from '@storybook/vue3'

import ButtonCheckbox from './ButtonCheckbox.vue'

const meta = {
  title: 'UI/Buttons/ButtonCheckbox',
  component: ButtonCheckbox,
} satisfies Meta<typeof ButtonCheckbox>

export default meta

export const Default: StoryObj<typeof ButtonCheckbox> = {
  args: {
    default: 'Кнопка',
  },
  render: (args) => ({
    components: { ButtonCheckbox },
    setup() {
      return { args }
    },
    template: `<ButtonCheckbox v-bind="args">{{ args.default }}</ButtonCheckbox>`,
  }),
}

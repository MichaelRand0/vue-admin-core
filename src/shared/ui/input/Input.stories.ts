import type { Meta, StoryObj } from '@storybook/vue3'

import Input from './Input.vue'

const meta = {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta

export const Default: StoryObj<typeof Input> = {
  args: {
    value: '',
    label: 'Email',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: `
    <Input v-bind="args" />`,
  }),
}

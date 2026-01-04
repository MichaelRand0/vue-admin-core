import type { Meta, StoryObj } from '@storybook/vue3'

import Text from './Text.vue'

const meta = {
  title: 'UI/Texts/Text',
  component: Text,
} satisfies Meta<typeof Text>

export default meta

export const Default: StoryObj<typeof Text> = {
  args: {
    default: 'Some text 123 ккк',
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: `<Text color="white" v-bind="args">{{ args.default }}</Text>`,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3'

import Link from './Link.vue'

const meta = {
  title: 'UI/Texts/Link',
  component: Link,
} satisfies Meta<typeof Link>

export default meta

export const Default: StoryObj<typeof Link> = {
  args: {
    default: 'Some text 123 ккк',
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: `<Link color="white" v-bind="args">{{ args.default }}</Link>`,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Component from './HelloWorld.vue'

const meta: Meta<typeof Component> = {
  title: 'UI/example/HelloWorld',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `
          ButtonIcon — компонент кнопки с иконкой.
          Можно добавлять новые варианты кнопки, так как её поведение может отличаться на разных страницах
          Просьба не создавать кашу в стилях и оставлять комментарии при необходимости
          Используется:
          В шапке ресурсов и механизмов(кнопка загрузки)
        `,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Component>

export const Default: Story = {
  args: {},
}

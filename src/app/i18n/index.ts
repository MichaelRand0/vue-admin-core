import { createI18n } from 'vue-i18n'

const locales = import.meta.glob<{ default: Record<string, any> }>(
  '../../{shared,entities,features,widgets,pages}/**/i18n/*.json',
  { eager: true },
)

const messages: Record<string, any> = {}

Object.entries(locales).forEach(([path, content]) => {
  const fileName = path.split('/').pop()?.replace('.json', '')

  if (fileName) {
    if (!messages[fileName]) messages[fileName] = {}
    Object.assign(messages[fileName], content.default)
  }
})

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})

export default i18n

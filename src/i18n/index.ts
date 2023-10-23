import { createI18n } from 'vue-i18n'
import messages from './langConfig'

const i18n: any = createI18n({
  locale: localStorage.getItem('lang') || 'zhCn',
  globalInjection: true,
  legacy: false,
  messages,
})

export default i18n

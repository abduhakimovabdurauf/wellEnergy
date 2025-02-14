import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zh from '../locales/zh.json'

const i18n = createI18n({
    legacy: false,
    globalInjection: true, // `t()` ni global ishlatish uchun
    locale: 'en', // Default til
    fallbackLocale: 'en',
    messages: { en, zh }
})

export default i18n

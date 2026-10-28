import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import ru from './locales/ru.json'

export const resources = { en: { translation: en }, ru: { translation: ru } } as const
export type Language = keyof typeof resources

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    nonExplicitSupportedLngs: true,           
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
    interpolation: { escapeValue: false },   
    debug: import.meta.env.DEV,              
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.title = i18n.t('meta.title')
})

export default i18n

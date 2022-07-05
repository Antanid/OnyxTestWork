import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import EngTranslation from './en.json';
import UATranslation from './ua.json';

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ua'],
    fallbackLng: 'ua',
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    resources: {
      en: {
        translation: EngTranslation,
      },
      ua: {
        translation: UATranslation,
      }
    }
  });

export default i18next;

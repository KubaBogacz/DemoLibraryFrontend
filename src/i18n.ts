import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pl from './locales/pl.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
});

export default i18n;

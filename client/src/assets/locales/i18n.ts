import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/en.json";

const i18nConfig: InitOptions = {
  resources: {
    en: { translation: en },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
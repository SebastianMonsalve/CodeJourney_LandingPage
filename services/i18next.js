import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locates/en.json";
import es from "../locates/es.json";

export const languageResources = {
  en: { translation: en },
  es: { translation: es },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "es",
  fallbackLng: "es",
  resources: languageResources,
});

export default i18next;

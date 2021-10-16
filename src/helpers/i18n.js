import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const I18N_LOCALE = {
  EN: "en-US",
  VI: "vi-VN",
};

const I18N_DEFAULT_NAMEPSACE = "translation";

const resources = {
  [I18N_LOCALE.EN]: {
    [I18N_DEFAULT_NAMEPSACE]: require("../data/locales/" +
      I18N_LOCALE.EN +
      "/translation.json"),
    components: require("../data/locales/" +
      I18N_LOCALE.EN +
      "/components.json"),
  },
  [I18N_LOCALE.VI]: {
    [I18N_DEFAULT_NAMEPSACE]: require("../data/locales/" +
      I18N_LOCALE.VI +
      "/translation.json"),
    components: require("../data/locales/" +
      I18N_LOCALE.VI +
      "/components.json"),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    detection: {
      order: ["querystring", "cookie", "localStorage"],
      lookupCookie: "i18n",
      lookupLocalStorage: "i18n",
      lookupSessionStorage: "i18n",
      caches: ["localStorage", "cookie"],
    },
    resources,
    fallbackLng: I18N_LOCALE.EN,
    defaultNS: I18N_DEFAULT_NAMEPSACE,
    keySeparator: ".", // set deep key for translate. Ex: t('keyA.keyB')
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

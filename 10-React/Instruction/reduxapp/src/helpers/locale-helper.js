import store from "../store";
import { setLang } from "../store/slices/locale-slice";

export const langs = [
  { title: "English", code: "en", country: "gb" },
  { title: "Türkçe", code: "tr", country: "tr" },
  { title: "Francais", code: "fr", country: "fr" },
  { title: "Deutsch", code: "de", country: "de" },
  { title: "Russia", code:"ru", country:"ru"}
];

export const getCurrentLang = () => {
  return store.getState().locale.lang;
};

export const setCurrentLang = (lang) => {
    store.dispatch(setLang(lang))
};

export const $t = (key) => {
    const currentLang = getCurrentLang();
    const langFile = require(`../helpers/langs/${currentLang.code}.json`);
    return langFile[key];
};

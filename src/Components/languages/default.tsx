import React from "react";
const en = require("./examples/default.json");
const ko = require("./examples/koreanFlatList.json");
const ch = require("./examples/chineseFlatList.json");

const languageOptions = {
  en,
  ko,
  ch,
};
export const setLanguage = (mode: string) => {
  let currentLanguage = en;
  if (mode === "en") {
    currentLanguage = en;
  }
  if (mode) {
    currentLanguage = languageOptions[mode];
  } else {
    currentLanguage = en;
  }
  return currentLanguage;
};

const LanguageContext: any = React.createContext({
  currentLang: setLanguage("en"),
});

export default LanguageContext;

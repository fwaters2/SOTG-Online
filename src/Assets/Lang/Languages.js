import EnglishText from "./enSpirit.json";
import ChineseText from "./chSpirit.json";
import KoreanText from "./koSpirit.json";

export function Strings(lang) {
  switch (lang) {
    case "en":
      return EnglishText;
    case "ch":
      return ChineseText;
    case "ko":
      return KoreanText;
    default:
      return EnglishText;
  }
}

export const LangSelection = [
  { avatar: "En", name: "English", nameShort: "en" },
  { avatar: "中", name: "中文", nameShort: "ch" },
  { avatar: "한", name: "한국인", nameShort: "ko" }
];

import EnglishText from "./enSpirit2019.json";
import ChineseText from "./chSpirit.json";
import KoreanText from "./koSpirit.json";
//import Firebase from "../../Firebase";
import wikiLangs from "./wikiLangs.json";

// function getTranslations() {
//   Firebase.firestore()
//     .collection("translations")
//     .get()
//     .then(doc => {
//       const translations = doc.docs.map(doc => doc.data());
//       return translations;
//     })
//     .catch(function(error) {
//       console.log("Error getting translations:", error);
//     });
// }

export function Strings(lang) {
  switch (lang) {
    case "en":
      return EnglishText;
    case "zh":
      return ChineseText;
    case "ko":
      return KoreanText;
    default:
      return EnglishText;
  }
}

export const LangSelection = [
  { avatar: "中", name: "中文", nameShort: "zh" },
  { avatar: "한", name: "한국인", nameShort: "ko" }
];

export const otherLang = wikiLangs.filter(
  lang =>
    !LangSelection.map(usedLang => usedLang.nameShort).includes(lang.langCode)
);
// export function getPercentage(shortCode) {
//   getTranslations;
// }

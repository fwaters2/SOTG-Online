import en from "./Examples/en.json";
import GetFBTranslations from "./GetFBTranslations";
const lang = "ko";
export default function exampleTranslate(category, score, index) {
  const stringToCheck = [lang][category].examples[score][index];
  const defaultString = en[category].examplest[score][index];

  return stringToCheck ? stringToCheck : defaultString;
}

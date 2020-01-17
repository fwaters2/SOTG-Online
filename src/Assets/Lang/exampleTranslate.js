import en from './Examples/en.json';

const lang = 'ko';
export default function exampleTranslate(category, score, index) {
  const stringToCheck = [lang][category].examples[score][index];
  const defaultString = en[category].examplest[score][index];

  return stringToCheck || defaultString;
}

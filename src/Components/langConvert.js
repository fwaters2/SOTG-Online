const fileToChange = require("./chSpirit.json");
const fs = require("fs");
const currentShape = {
  rules: {
    title: "Rules Knowledge and Use",
    examples: {
      "0": [
        "They repeatedly exhibited poor knowledge of the rules.",
        "They often disregarded or purposefully misinterpreted the rules.",
        "They refused to accept input or feedback on the rules and SOTG.",
      ],
    },
  },
};

const shapeIwant = [
  {
    stringsId: "RULES_0_0", //shared by different languagee files
    //value: 0,
    //default values
    //category_short: "rules",
    //example_category: "knowledge", //not required
    category: "Rules Knowledge and Use", //replaced by dynamic language
    example: "They repeatedly exhibited poor knowledge of the rules.", //replaced by dynamic language
  },
];

const actualShapeIWant = [
  { RULES_0_0: "They repeatedly exhibited poor knowledge of the rules." },
];

function convertToFlatList(jsonObject) {
  let newObject = {};
  const arrayOfCategories = Object.keys(jsonObject);
  const arrayOfScores = [0, 1, 2, 3, 4];

  const examples = arrayOfCategories.map((category, catIndex) => {
    return arrayOfScores.map((score) => {
      jsonObject[category].examples[score] && //can remove
        jsonObject[category].examples[score].map((example, index) => {
          newObject = {
            ...newObject,
            [`${arrayOfCategories[
              catIndex
            ].toUpperCase()}_${score}_${index}`]: example,
          };
          return null;
        });
      return null;
    });
  });
  const contentToWrite = JSON.stringify(newObject);
  return fs.writeFile("chineseFlatList.json", contentToWrite, (err, file) => {
    if (err) throw err;
    console.log("Saved!");
  });
}

return convertToFlatList(fileToChange);

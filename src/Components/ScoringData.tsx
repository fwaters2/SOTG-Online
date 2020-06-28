import React, { useState } from "react";
import SpiritScoring from "./Pages/SpiritScoring";

const examplesFlatList = require("./convertedFile.json");

interface ExamplesShape {
  stringsId: string;
  category: string;
  category_short: string;
  value: number;
  default_example: string;
}

interface FormData {
  scores: {
    [key: string]: number; //"rules":2
  };
  exampleSelections: {
    [key: string]: boolean; //"rules":[RULES_0_0: false,RULES_0_1: false]
  };
  additionalFeedbacks: { [key: string]: string }; //"rules":"knew the rules"
}

const titles = Array.from(
  new Set(examplesFlatList.map((x: ExamplesShape) => x.category))
);

const categories: string[] = Array.from(
  new Set(examplesFlatList.map((x: ExamplesShape) => x.category_short))
);

const totalSteps = categories.length;
//const ids = examplesFlatList.map((x: ExamplesShape) => x.stringsId);

const defaultObject = (defaultValue) => () => {
  let defaults = {};
  categories.forEach((category) => {
    defaults = {
      ...defaults,
      [category]: defaultValue,
    };
  });
  return defaults;
};

const defaultScores = defaultObject(2);

const getIdsByCategory = (category) => {
  const thisCategoriesIds = examplesFlatList
    .filter((example) => example.category_short === category)
    .map((x) => x.stringsId);
  let idObject = {};
  thisCategoriesIds.forEach((id) => {
    idObject = {
      ...idObject,
      [id]: false,
    };
  });
  return idObject;
};
const defaultExampleFeedbacks = () => {
  let defaults = {};
  categories.forEach((category) => {
    const idObject = getIdsByCategory(category);

    defaults = {
      ...defaults,
      [category]: idObject,
    };
  });
  return defaults;
};

const defaultAdditionalFeedbacks = defaultObject("");

const defaultFormData = {
  scores: defaultScores(),
  validatedFeedbacks: defaultExampleFeedbacks(),
  additionalFeedbacks: defaultAdditionalFeedbacks(),
};

const ScoringData = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(defaultFormData);

  const handleStepChange = (action: string): void => {
    const lastStep = totalSteps - 1;
    if (action === "next" && currentStep < lastStep) {
      setCurrentStep(currentStep + 1);
    }
    if (action === "previous" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const currentTitle = titles[currentStep];
  const currentCategory: string = categories[currentStep];

  const currentScore = formData.scores[currentCategory];
  const setCurrentScore = (newScore: number): void => {
    setFormData({
      ...formData,
      scores: { ...formData.scores, [currentCategory]: newScore },
    });
  };
  const spanishTranslation = {
    RULES_2_0: "que vas a hacer?",
  };
  const lang = spanishTranslation;

  const currentExamples = examplesFlatList
    .filter((example: any) => example.category_short === currentCategory)
    .map((x) => {
      return {
        ...x,
        translatedExample: lang[x.stringsId] || x.default_example,
      };
    });

  const currentValidatedFeedbacks =
    formData.validatedFeedbacks[currentCategory];

  const setCurrentValidatedFeedbacks = (exampleId: string): void => {
    setFormData({
      ...formData,
      validatedFeedbacks: {
        ...formData.validatedFeedbacks,
        [currentCategory]: {
          ...formData.validatedFeedbacks[currentCategory],
          [exampleId]: !formData.validatedFeedbacks[currentCategory][exampleId],
        },
      },
    });
  };
  const currentAdditionalFeedback =
    formData.additionalFeedbacks[currentCategory];

  const setCurrentAdditionalFeedback = (newFeedback: string): void => {
    setFormData({
      ...formData,
      additionalFeedbacks: {
        ...formData.additionalFeedbacks,
        [currentCategory]: newFeedback,
      },
    });
  };
  return (
    <SpiritScoring
      currentStep={currentStep}
      steps={categories}
      title={currentTitle}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      examples={currentExamples}
      validatedFeedbacks={currentValidatedFeedbacks}
      setValidatedFeedbacks={setCurrentValidatedFeedbacks}
      additionalFeedback={currentAdditionalFeedback}
      setAdditionalFeedback={setCurrentAdditionalFeedback}
      handleStepChange={handleStepChange}
    />
  );
};

export default ScoringData;

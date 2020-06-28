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

const categoriesReal = Array.from(
  new Set(examplesFlatList.map((x: ExamplesShape) => x.category_short))
);
const categories = ["rules", "fouls", "fairness", "attitude", "communication"];

const ids = examplesFlatList.map((x: ExamplesShape) => x.stringsId);

const defaultScores = {
  rules: 2,
  fouls: 2,
  fairness: 2,
  attitude: 2,
  communication: 2,
};
const defaultExampleFeedbacks = () => {
  let newObject = {};
  categories.forEach((category) => {
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

    newObject = {
      ...newObject,
      [category]: idObject,
    };
  });
  return newObject;
};

const defaultFeedbacks = {
  rules: "",
  fouls: "",
  fairness: "",
  attitude: "",
  communication: "",
};

const defaultFormData = {
  scores: defaultScores,
  validatedFeedbacks: defaultExampleFeedbacks(),
  additionalFeedbacks: defaultFeedbacks,
};

const ScoringData = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(defaultFormData);

  const handleStepChange = (action: string): void => {
    if (action === "next") {
      setCurrentStep(currentStep + 1);
    }
    if (action === "previous") {
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

  const currentExamples = examplesFlatList.filter(
    (example: any) => example.category_short === currentCategory
  );

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

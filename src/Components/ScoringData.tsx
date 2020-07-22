import React, { useState } from "react";
import SpiritScoring from "./Pages/SpiritScoring";
import LanguageContext, { setLanguage } from "./languages/default";
import SummaryData from "./Pages/SummaryData";
import ScoringFormContext from "../Contexts/ScoringFormContext";
const examplesFlatList = require("./convertedFile.json");
const defaultLanguage = require("../Components/languages/examples/default.json");

interface ExamplesShape {
  stringsId: string;
  category: string;
  category_short: string;
  value: number;
  default_example: string;
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
  const [currentLang, setCurrentLanguage] = useState("en");
  const [choosingTeams, toggleChoosingTeams] = useState(false);
  const [viewingSummary, toggleViewingSummary] = useState(false);

  const handleStepChange = (action: string): void => {
    const lastStep = totalSteps - 1;
    if (action === "next") {
      if (currentStep === lastStep) {
        toggleViewingSummary(true);
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
    if (action === "previous" && currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
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

  const currentExamples = (currentLang) => {
    return examplesFlatList
      .filter((example: any) => example.category_short === currentCategory)
      .map((x) => {
        return {
          ...x,
          translatedExample: currentLang[x.stringsId] || x.default_example,
        };
      });
  };
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
  const state = {
    currentStep,
    steps: categories,
    title: currentTitle,
    currentScore,
    setCurrentScore: setCurrentScore,
    examples: currentExamples(setLanguage(currentLang)),
    validatedFeedbacks: currentValidatedFeedbacks,
    setValidatedFeedbacks: setCurrentValidatedFeedbacks,
    additionalFeedback: currentAdditionalFeedback,
    setAdditionalFeedback: setCurrentAdditionalFeedback,
    handleStepChange,
    setStep: setCurrentStep,
  };
  const CurrentTemplate = () => {
    if (choosingTeams) {
      return (
        <div>
          <h1>ChooseTeam</h1>
          <button onClick={() => toggleChoosingTeams(false)}>Next</button>
        </div>
      );
    } else if (viewingSummary) {
      return <SummaryData {...state} />;
    } else {
      return <SpiritScoring {...state} />;
    }
  };

  return (
    <LanguageContext.Provider
      value={{ currentLang: setLanguage(currentLang), setCurrentLanguage }}
    >
      <ScoringFormContext.Provider
        value={{
          state: state,
          dispatch: () => console.log("trying to change"),
        }}
      >
        <CurrentTemplate />
      </ScoringFormContext.Provider>
    </LanguageContext.Provider>
  );
};

export default ScoringData;

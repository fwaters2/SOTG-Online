import React, { useState } from "react";
import ScoringForm from "../../Templates/ScoringForm";
import NavigationButtons from "../../Organisms/NavigationButtons";
import AdditionalFeedback from "../../Molecules/AdditionalFeedback";
import ScoreSelection from "../../Organisms/ScoreSelection";
import ProgressBar from "../../Organisms/ProgressBar";
import CheckboxList from "../../Organisms/CheckboxList";

//const sotgExamples = require("../../../Assets/Lang/enSpirit2019.json");
const examplesFlatList = require("./examplesFlatList.json");
const relevantExamples = examplesFlatList.filter(
  (example: any) => example.category_short === "rules"
);

const defaultSettings = {
  RULES_0_0: false,
  RULES_0_1: false,
  RULES_0_2: false,
  RULES_1_0: false,
  RULES_1_1: false,
  RULES_1_2: false,
  RULES_1_3: false,
  RULES_1_4: false,
  RULES_2_0: true,
  RULES_2_1: false,
  RULES_2_2: true,
  RULES_2_3: false,
  RULES_2_4: false,
  RULES_3_0: false,
  RULES_3_1: false,
  RULES_4_0: false,
  RULES_4_1: false,
};

interface validatedExample {
  stringsId: string;
  isChecked: boolean;
}

const SpiritScoring = () => {
  const [currentScore, setCurrentScore] = useState(2);
  const [examplesTab, setExamplesTab] = useState(2);
  const [formData, setFormData] = useState(defaultSettings);
  const [additionalFeedback, setAdditionalFeedback] = useState("");
  const [currentFeedback, setCurrentFeedback] = useState("");

  const validatedFeedbackToString = () => {
    return "Placeholder String from Validated Feedback";
  };

  const updateCurrentFeedback = () => {
    const allFeedback = `${validatedFeedbackToString()} ${additionalFeedback}`;
    setCurrentFeedback(allFeedback);
  };

  const updateCurrentScore = (newScore: number): void => {
    setCurrentScore(newScore);
    setExamplesTab(newScore);
  };

  return (
    <ScoringForm
      title={"Rules Knowledge and Use"}
      progressBar={<ProgressBar steps={[1, 2, 3, 4, 5, 6, 7]} activeStep={2} />}
      pillBox={
        <ScoreSelection
          currentScore={currentScore}
          updateCurrentScore={updateCurrentScore}
          examplesTab={examplesTab}
        />
      }
      checkboxList={
        <CheckboxList
          examplesTab={examplesTab}
          setExamplesTab={setExamplesTab}
          //examples={sotgExamples.rules.examples}
          examples={relevantExamples}
          validatedFeedback={formData}
          setValidatedFeedback={setFormData}
        />
      }
      currentFeedback={currentFeedback}
      additionalFeedback={
        <AdditionalFeedback
          additionalFeedback={additionalFeedback}
          setAdditionalFeedback={setAdditionalFeedback}
          updateCurrentFeedback={updateCurrentFeedback}
        />
      }
      navigationButtons={
        <NavigationButtons
          currentStep={0}
          setStep={() => console.log("hello")}
        />
      }
    />
  );
};

export default SpiritScoring;

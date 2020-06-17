import React from "react";
import ScoringForm from "../../Templates/ScoringForm";
import NavigationButtons from "../../Organisms/NavigationButtons";
import Feedback from "../../Organisms/Feedback";
import AdditionalFeedback from "../../Molecules/AdditionalFeedback";
import ScoreSelection from "../../Organisms/ScoreSelection";
import ProgressBar from "../../Organisms/ProgressBar";
import CheckboxList from "../../Organisms/CheckboxList";

const sotgExamples = require("../../../Assets/Lang/enSpirit2019.json");
const validatedFeedback = {
  "0": [],
  "1": [],
  "2": [0, 2, 4],
  "3": [],
  "4": [],
};

const SpiritScoring = () => {
  const [currentScore, setCurrentScore] = React.useState(2);
  const [examplesTab, setExamplesTab] = React.useState(2);
  const [additionalFeedback, setAdditionalFeedback] = React.useState(
    "In state"
  );

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
          examples={sotgExamples.rules.examples}
          feedbackArray={validatedFeedback[examplesTab]}
        />
      }
      feedback={
        <Feedback
          feedbackPreview={"Great Game"}
          additionalFeedback={additionalFeedback}
          setAdditionalFeedback={() => alert("Setting additional Feedback")}
        />
      }
      additionalFeedback={
        <AdditionalFeedback
          feedbackPreview={"Great Game"}
          additionalFeedback={additionalFeedback}
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

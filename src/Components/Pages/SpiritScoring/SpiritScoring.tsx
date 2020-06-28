import React, { useState } from "react";
import ScoringForm from "../../Templates/ScoringForm";
import NavigationButtons from "../../Organisms/NavigationButtons";
import AdditionalFeedback from "../../Molecules/AdditionalFeedback";
import ScoreSelection from "../../Organisms/ScoreSelection";
import ProgressBar from "../../Organisms/ProgressBar";
import CheckboxList from "../../Organisms/CheckboxList";

interface validatedExample {
  stringsId: string;
  isChecked: boolean;
}

interface Props {
  currentStep: number;
  steps: string[];
  title: any;
  currentScore: number;
  setCurrentScore: (newScore: number) => void;
  examples: any;
  validatedFeedbacks: { [key: string]: boolean };
  setValidatedFeedbacks: any;
  additionalFeedback: string;
  setAdditionalFeedback: any;
  handleStepChange: (action: string) => void;
}

const SpiritScoring = ({
  currentStep,
  steps,
  title,
  currentScore,
  setCurrentScore,
  examples,
  validatedFeedbacks,
  setValidatedFeedbacks,
  additionalFeedback,
  setAdditionalFeedback,
  handleStepChange,
  ...props
}: Props) => {
  const [examplesTab, setExamplesTab] = useState(currentScore);
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
      title={title}
      progressBar={<ProgressBar steps={steps} activeStep={currentStep} />}
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
          examples={examples}
          validatedFeedback={validatedFeedbacks}
          setValidatedFeedbacks={setValidatedFeedbacks}
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
        <NavigationButtons currentStep={0} setStep={handleStepChange} />
      }
    />
  );
};

export default SpiritScoring;

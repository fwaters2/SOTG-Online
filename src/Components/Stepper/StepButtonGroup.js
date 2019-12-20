import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default function StepButtonGroup({
  step,
  setStep,
  currentLanguage,
  formResponses,
  categories,
  currentStep,
  setExamplesTab
}) {
  const handleBack = () => {
    setStep(step - 1);
    setExamplesTab(formResponses[categories[currentStep - 1]]);
  };
  const handleNext = () => {
    setStep(step + 1);
    setExamplesTab(formResponses[categories[currentStep + 1]]);
  };
  return (
    <ButtonGroup fullWidth>
      <Button
        variant="contained"
        color="default"
        onClick={handleBack}
        style={{ color: "black" }}
      >
        {currentLanguage.general.back}
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        {currentLanguage.general.next}
      </Button>
    </ButtonGroup>
  );
}

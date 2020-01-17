import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';

export default function StepButtonGroup({
  step,
  setStep,
  currentLanguage,
  formResponses,
  categories,
  currentStep,
  setExamplesTab,
}) {
  const handleBack = () => {
    setStep(step - 1);
    setExamplesTab(formResponses[categories[currentStep - 1]]);
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    });
  };
  const handleNext = () => {
    setStep(step + 1);
    setExamplesTab(formResponses[categories[currentStep + 1]]);
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    });
  };
  return (
    <ButtonGroup fullWidth>
      <Button variant="contained" color="default" onClick={handleBack} style={{ color: 'black' }}>
        <ArrowBack />
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        <ArrowForward />
      </Button>
    </ButtonGroup>
  );
}

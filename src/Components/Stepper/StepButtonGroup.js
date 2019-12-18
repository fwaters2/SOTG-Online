import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default function StepButtonGroup({ step, setStep }) {
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <ButtonGroup fullWidth>
      <Button
        variant="contained"
        color="default"
        onClick={handleBack}
        style={{ color: "black" }}
      >
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </ButtonGroup>
  );
}

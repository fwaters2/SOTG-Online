import React from "react";
import { Button, Box } from "@material-ui/core";

export default function LastButtons({ handleSubmit, step, setStep, label }) {
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        {label}
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="default"
        onClick={handleBack}
      >
        Back
      </Button>
    </Box>
  );
}

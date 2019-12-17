import React from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "1em 0",
    padding: ".5em",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    fontSize: "14pt"
  }
}));

export default function StepButtonGroup({ step, setStep }) {
  const classes = useStyles();
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
        className={classes.button}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
      >
        Next
      </Button>
    </ButtonGroup>
  );
}

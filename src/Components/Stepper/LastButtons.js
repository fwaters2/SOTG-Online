import React from "react";
import { Button, makeStyles, Box } from "@material-ui/core";
const myPurple = "#E82178";
const useStyles = makeStyles(theme => ({
  button: {
    margin: ".5em 0",
    padding: ".5em",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    fontSize: "14pt"
  }
}));

export default function LastButtons({ handleSubmit, step, setStep, label }) {
  const classes = useStyles();
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        style={{ background: myPurple }}
        onClick={handleSubmit}
        className={classes.button}
      >
        {label}
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="default"
        onClick={handleBack}
        className={classes.button}
      >
        Back
      </Button>
    </Box>
  );
}

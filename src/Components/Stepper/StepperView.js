import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import StyledPaper from "../StyledPaper";
import QontoStepIcon from "./QontoStepIcon";

//const myBlue = "#0C61E1";
const myGreen = "#8FDE58";
//const myPurple = "#E82178";
const StyledStepper = withStyles({
  root: {
    background: "inherit",
    padding: 0,
    margin: "0 0 1em 0",
    display: "flex",
    justifyContent: "space-between"
  }
})(Stepper);

const StyledStep = withStyles({
  root: {},
  horizontal: {
    padding: 0
  }
})(Step);
const StyledStepLabel = withStyles({
  iconContainer: { padding: 0 }
})(StepLabel);

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 4px)",
    right: "calc(50% + 4px)"
  },
  active: {
    "& $line": {
      borderColor: myGreen
    }
  },
  completed: {
    "& $line": {
      borderColor: myGreen
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

export default function StepperTest({ step, steps, stepContent }) {
  const activeStep = step;

  return (
    <StyledPaper title={steps[activeStep]}>
      <div
        style={{
          zIndex: 0,
          position: "relative",
          top: "1em",
          borderTop: "3px solid",
          borderColor: "rgba(255,255,255,0.2)",
          width: "100%",
          height: "1px"
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          margin: "0.5em 2em"
        }}
      >
        <StyledStepper activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map(label => (
            <StyledStep key={label}>
              <StyledStepLabel StepIconComponent={QontoStepIcon} />
            </StyledStep>
          ))}
        </StyledStepper>

        {/* The content of the step */}
        <div style={{ flex: 1 }}>{stepContent}</div>

        {/* End of the content of the step */}
        {/* <StepButtonGroup step={activeStep} setStep={setActiveStep} /> */}
      </div>
    </StyledPaper>
  );
}

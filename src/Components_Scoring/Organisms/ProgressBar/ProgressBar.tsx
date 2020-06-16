import React from "react";
import { Stepper, StepLabel, StepConnector, Step } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { GREEN } from "../../../Components/Atoms/mycolors";
import QontoStepIcon from "./QontoStepIcon";

interface Props {
  children?: any;
  id?: string;
  steps?: any;
  activeStep?: any;
}

const Wrapper = (props: any) => (
  <div
    {...props}
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      margin: "2em 0",
    }}
  />
);

const StyledStepper = withStyles({
  root: {
    background: "inherit",
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
})(Stepper);

const StyledStep = withStyles({
  root: {},
  horizontal: {
    padding: 0,
  },
})(Step);
const StyledStepLabel = withStyles({
  iconContainer: { padding: 0 },
})(StepLabel);

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 4px)",
    right: "calc(50% + 4px)",
  },
  active: {
    "& $line": {
      borderColor: GREEN,
    },
  },
  completed: {
    "& $line": {
      borderColor: GREEN,
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const HorizontalLine = () => (
  <div
    style={{
      position: "relative",
      top: ".5em",
      borderTop: "3px solid",
      borderColor: "rgba(255,255,255,0.2)",
      width: "calc(100% + 4em)",
      height: "1px",
      margin: "0 -2em",
    }}
  />
);

const ProgressBar = ({ steps, activeStep, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <HorizontalLine />
      <StyledStepper activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label: number) => (
          <StyledStep key={label}>
            <StyledStepLabel StepIconComponent={QontoStepIcon} />
          </StyledStep>
        ))}
      </StyledStepper>
    </Wrapper>
  );
};

export default ProgressBar;

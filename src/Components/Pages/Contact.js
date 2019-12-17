import React from "react";

import StyledTextField from "../StyledTextField";

import Stepper from "../Stepper/Index";
import FirstButton from "../Stepper/FirstButton";
import StepButtonGroup from "../Stepper/StepButtonGroup";
import LastButtons from "../Stepper/LastButtons";

export default function Contact() {
  const [formResponses, setFormResponses] = React.useState({
    name: "",
    email: "",
    comment: ""
  });
  const [step, setStep] = React.useState(0);
  const stepContent = step => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <StyledTextField
              label="Name"
              stateKey="myTeam"
              placeholder="Name"
              formResponses={formResponses}
              setFormResponses={setFormResponses}
            />
            <FirstButton action={() => setStep(step + 1)}>Next</FirstButton>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <StyledTextField
              label="Email"
              stateKey="email"
              placeholder="Email"
              formResponses={formResponses}
              setFormResponses={setFormResponses}
            />
            <StepButtonGroup step={step} setStep={setStep}>
              Next
            </StepButtonGroup>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <StyledTextField
              label="Comment"
              stateKey="comment"
              placeholder="Comment"
              formResponses={formResponses}
              setFormResponses={setFormResponses}
            />
            <LastButtons step={step} setStep={setStep} label="Contact" />
          </React.Fragment>
        );
      default:
        return <div>Step Not Found</div>;
    }
  };
  return (
    <Stepper
      step={step}
      formResponses={formResponses}
      setFormResponses={setFormResponses}
      steps={["Contact Form", "Contact Form", "Contact Form"]}
      stepContent={stepContent(step)}
    ></Stepper>
  );
}

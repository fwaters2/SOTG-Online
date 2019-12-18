import React from "react";
import StyledTextField from "../StyledTextField";
import AddTeam from "./AddTeam";
import EmailVerification from "./EmailVerification";
import FirstButton from "../Stepper/FirstButton";
import StepButtonGroup from "../Stepper/StepButtonGroup";

export default function EventCreationView({
  step,
  setStep,
  formResponses,
  setFormResponses
}) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <StyledTextField
            type="text"
            placeholder="Event Name"
            label="Event Name"
            stateKey="eventName"
            formResponses={formResponses}
            setFormResponses={setFormResponses}
          />
          <FirstButton action={() => setStep(step + 1)}>Create</FirstButton>
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <AddTeam
            formResponses={formResponses}
            setFormResponses={setFormResponses}
          />
          <StepButtonGroup step={step} setStep={setStep} />
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <EmailVerification
            formResponses={formResponses}
            setFormResponses={setFormResponses}
            step={step}
            setStep={setStep}
          />
        </React.Fragment>
      );
    default:
      return <div>Step Not Found</div>;
  }
}

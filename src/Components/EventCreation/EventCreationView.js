import React from "react";
import StyledTextField from "../StyledTextField";
import AddTeam from "./AddTeam";
import EmailVerification from "./EmailVerification";
import { Button, ButtonGroup } from "@material-ui/core";

export default function EventCreationView({
  step,
  setStep,
  formResponses,
  setFormResponses,
  currentLanguage
}) {
  const handleBack = () => {
    setStep(step - 1);
    //setExamplesTab(formResponses[categories[currentStep - 1]]);
    window.scrollTo({
      top: 120,
      behavior: "smooth"
    });
  };
  const handleNext = () => {
    setStep(step + 1);
    //setExamplesTab(formResponses[categories[currentStep + 1]]);
    window.scrollTo({
      top: 120,
      behavior: "smooth"
    });
  };
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
            currentLanguage={currentLanguage}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setStep(step + 1)}
          >
            Create
          </Button>
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <AddTeam
            formResponses={formResponses}
            setFormResponses={setFormResponses}
          />
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

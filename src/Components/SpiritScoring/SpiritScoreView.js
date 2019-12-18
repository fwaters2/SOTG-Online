import React from "react";
import TeamSelection from "./TeamSelection";
import Category from "./Category";
import Summary from "./Summary";
import LastButtons from "../Stepper/LastButtons";
import { Dialog, DialogTitle } from "@material-ui/core";

export default function SpiritScoreView({
  step,
  formResponses,
  setFormResponses,
  data,
  setStep,
  handleFormSubmit,
  isDialogOpen
}) {
  switch (step) {
    case 0:
      return (
        <TeamSelection
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          teams={data.teams}
          step={step}
          setStep={setStep}
        />
      );
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return (
        <Category
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          step={step}
          setStep={setStep}
        />
      );
    case 6:
      return (
        <React.Fragment>
          <Summary
            step={step}
            setStep={setStep}
            formResponses={formResponses}
            setFormResponses={setFormResponses}
            isDialogOpen={isDialogOpen}
          />
          <LastButtons
            step={step}
            setStep={setStep}
            handleSubmit={handleFormSubmit}
            label="Submit"
          />
          <Dialog open={isDialogOpen} onClose={() => setStep(0)}>
            <DialogTitle>Thanks for Scoring!</DialogTitle>
          </Dialog>
        </React.Fragment>
      );
    default:
      return "Step Not Found";
  }
}

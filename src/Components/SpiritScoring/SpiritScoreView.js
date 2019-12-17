import React from "react";
import TeamSelection from "./TeamSelection";
import Category from "./Category";
import Summary from "./Summary";

export default function SpiritScoreView({
  step,
  formResponses,
  setFormResponses,
  data,
  setStep,
  handleSubmit
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
        <Summary
          step={step}
          setStep={setStep}
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return "Step Not Found";
  }
}

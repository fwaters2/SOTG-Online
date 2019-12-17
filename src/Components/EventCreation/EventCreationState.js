import React from "react";
import Stepper from "../Stepper/Index";
import EventCreationView from "./EventCreationView";

export default function EventCreationState() {
  const [formResponses, setFormResponses] = React.useState({
    email: "",
    eventName: "",
    teams: [],
    slug: ""
  });
  const { eventName } = formResponses;
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      step={step}
      steps={["Create Event", "Add Teams", "Email Verification"]}
      stepContent={
        <EventCreationView
          step={step}
          setStep={setStep}
          eventName={eventName}
          formResponses={formResponses}
          setFormResponses={setFormResponses}
        />
      }
    />
  );
}

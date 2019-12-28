import React from "react";
import EventCreationView from "./EventCreationView";
import { Strings as Languages } from "../../Assets/Lang/Languages";
import StyledPaper from "../StyledPaper";

export default function EventCreationState() {
  const [formResponses, setFormResponses] = React.useState({
    email: "",
    eventName: "",
    teams: [],
    slug: ""
  });

  const [lang, setLang] = React.useState("en");
  const { eventName } = formResponses;
  const [step, setStep] = React.useState(0);
  const currentLanguage = Languages(lang);

  return (
    <StyledPaper
      title="Create Event"
      setLang={setLang}
      currentLanguage={currentLanguage}
      lang={lang}
    >
      <div style={{ margin: "-1em 2em 0" }}>
        <EventCreationView
          step={step}
          setStep={setStep}
          eventName={eventName}
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          currentLanguage={currentLanguage}
        />
      </div>
    </StyledPaper>
  );
}

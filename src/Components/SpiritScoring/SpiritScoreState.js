import React, { useEffect, useState } from "react";
import Firebase from "../../Firebase";
import Stepper from "../Stepper/Index";
import SpiritScoreView from "./SpiritScoreView";

import EnglishText from "../../Assets/Lang/enSpirit.json";

export default function SpiritScoreState(props) {
  const [lang, setLang] = React.useState("en");
  const [step, setStep] = React.useState(0);
  const [exists, setExists] = useState(true);
  const [eventData, setEventData] = useState({
    name: "Searching for Event...",
    email: "",
    teams: []
  });
  const [formResponses, setFormResponses] = React.useState({
    myTeam: "Select",
    opponent: "Select",
    rules: 2,
    rulesFeedback: "",
    rulesExamples: [],
    fouls: 2,
    foulsFeedback: "",
    foulsExamples: [],
    fairness: 2,
    fairnessFeedback: "",
    fairnessExamples: [],
    attitude: 2,
    attitudeFeedback: "",
    attitudeExamples: [],
    communication: 2,
    communicationFeedback: "",
    communicationExamples: [],
    feedback: "",
    email: eventData.email
  });
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const spiritTexts = { en: EnglishText };
  const currentLanguage = spiritTexts[lang];
  const handleSubmit = () => {
    eventData
      ? Firebase.firestore()
          .collection("spiritscores")
          .add({
            eventName: eventData.name,
            email: eventData.email,
            myTeam: formResponses.myTeam,
            opponent: formResponses.opponent,
            rules: formResponses.rules,
            fouls: formResponses.fouls,
            fairness: formResponses.fairness,
            attitude: formResponses.attitude,
            communication: formResponses.communication,
            feedback: formResponses.feedback
          })
      : console.log("error, no event data:", {
          eventName: eventData.name,
          email: eventData.email,
          myTeam: formResponses.myTeam,
          opponent: formResponses.opponent,
          rules: formResponses.rules,
          fouls: formResponses.fouls,
          fairness: formResponses.fairness,
          attitude: formResponses.attitude,
          communication: formResponses.communication,
          feedback: formResponses.feedback
        });
  };
  const handleFormSubmit = () => {
    toggleDialog(true);
    handleSubmit();
  };
  const { event } = props.match.params;
  useEffect(() => {
    //Get all events where slug = the url
    const eventRef = Firebase.firestore()
      .collection("events")
      .where("slug", "==", event);
    //attempt with get
    eventRef
      .get()
      .then(doc => {
        //see if it exists
        const eventExists = doc.docs.length === 0 ? false : true;
        if (eventExists) {
          const event = doc.docs[0].data();
          setEventData({
            name: event.name,
            email: event.email,
            teams: event.teams
          });

          console.log("Event data:", event);
        } else {
          setExists(false);
          console.log("No such event!");
        }
      })
      .catch(function(error) {
        console.log("Error getting event:", error);
      });
  }, [event]);

  return exists ? (
    <Stepper
      step={step}
      formResponses={formResponses}
      setFormResponses={setFormResponses}
      currentLanguage={currentLanguage}
      lang={lang}
      setLang={setLang}
      steps={[
        eventData.name,
        "Rules Knowledge and Use",
        "Fouls and Body Contact",
        "Fair-Mindedness",
        "Positive Attitude and Self-Control",
        "Communication",
        "Summary"
      ]}
      stepContent={
        <SpiritScoreView
          step={step}
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          data={eventData}
          setStep={setStep}
          handleFormSubmit={handleFormSubmit}
          isDialogOpen={isDialogOpen}
          currentLanguage={currentLanguage}
        />
      }
    />
  ) : (
    <h1>Sorry, we couldn't find you're event!</h1>
  );
}

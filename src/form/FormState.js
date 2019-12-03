import React from "react";
import FormView from "./FormView";
import EnglishText from "./enSpirit.json";
import Firebase from "../Firebase";

const spiritTexts = { en: EnglishText };

export default function FormState(props) {
  const [formResponses, setFormResponses] = React.useState({
    myTeam: "",
    opponent: "",
    rules: 2,
    rulesFeedback: "",
    fouls: 2,
    foulsFeedback: "",
    fairness: 2,
    fairnessFeedback: "",
    attitude: 2,
    attitudeFeedback: "",
    communication: 2,
    communicationFeedback: "",
    feedback: ""
  });
  const [lang, setLang] = React.useState("en");
  const [step, setStep] = React.useState(1);
  //const [exists, setExists] = useState(true);

  const SpiritText = spiritTexts[lang];

  const handleSubmit = () => {
    props
      ? Firebase.firestore()
          .collection("spiritscores")
          .add({
            email: props.data.email,
            myTeam: formResponses.myTeam,
            opponent: formResponses.opponent,
            rules: formResponses.rules,
            fouls: formResponses.fouls,
            fairness: formResponses.fairness,
            attitude: formResponses.attitude,
            communication: formResponses.communication,
            feedback: formResponses.feedback
          })
      : alert("demo has concluded");
    // Firebase.firestore()
    //   .collection("Spirit")
    //   .add({
    //     myTeam: formResponses.myTeam,
    //     opponent: formResponses.opponent,
    //     rules: formResponses.rules,
    //     rulesFeedback: formResponses.rulesFeedback,
    //     fouls: formResponses.fouls,
    //     foulsFeedback: formResponses.foulsFeedback,
    //     fairness: formResponses.fairness,
    //     fairnessFeedback: formResponses.fairnessFeedback,
    //     attitude: formResponses.attitude,
    //     attitudeFeedback: formResponses.attitudeFeedback,
    //     communication: formResponses.communication,
    //     communicationFeedback: formResponses.communicationFeedback,
    //     feedback: formResponses.feedback
    //   });
    //alert("submitted but nothing will happen");
  };
  return props ? (
    <FormView
      state={{
        step,
        setStep,
        formResponses,
        setFormResponses,
        lang,
        setLang,
        SpiritText,
        handleSubmit
      }}
      data={props.data}
    />
  ) : (
    <FormView
      state={{
        step,
        setStep,
        formResponses,
        setFormResponses,
        lang,
        setLang,
        SpiritText,
        handleSubmit
      }}
    />
  );
}

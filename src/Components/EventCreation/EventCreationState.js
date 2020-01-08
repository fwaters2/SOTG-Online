import React from "react";
import EventCreationView from "./EventCreationView";
import { Strings as Languages } from "../../Assets/Lang/Languages";
import StyledPaper from "../StyledPaper";
import Firebase from "../../Firebase";
import StyledTitle from "../StyledTitle";

export default function EventCreationState(props) {
  const { user } = props;
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

  React.useEffect(() => {
    // Confirm the link is a sign-in with email link.
    if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
      //Go to Summary page
      setStep(2);
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      Firebase.auth()
        .signInWithEmailLink(email, window.location.href)
        .then(function(result) {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          setFormResponses({
            email: result.user.email,
            eventName: new URLSearchParams(props.location.search).get(
              "eventName"
            ),
            teams: new URLSearchParams(props.location.search)
              .get("teams")
              .split(","),
            slug: new URLSearchParams(props.location.search).get("slug")
          });
          console.log(result);
        })
        .catch(function(error) {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          console.log(error);
        });
    } else {
      //Set the email from user data
      setFormResponses({ ...formResponses, email: user.email });
    }
  }, []);

  const createEvent = () => {
    Firebase.firestore()
      .collection("events")
      .add({
        ...formResponses,
        created: Firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <StyledPaper
      setLang={setLang}
      currentLanguage={currentLanguage}
      lang={lang}
    >
      <StyledTitle>Create Event</StyledTitle>
      <div style={{ margin: "-1em 2em 0" }}>
        <EventCreationView
          step={step}
          setStep={setStep}
          eventName={eventName}
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          currentLanguage={currentLanguage}
          user={user}
          createEvent={createEvent}
        />
      </div>
    </StyledPaper>
  );
}

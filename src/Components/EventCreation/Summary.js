import React from "react";
import AlreadySignedIn from "./AlreadySignedIn";
import EmailVerification from "./EmailVerification";

export default function Summary(props) {
  const {
    formResponses,
    setFormResponses,
    step,
    setStep,
    user,
    createEvent
  } = props;

  const email = "forrest";
  //   React.useEffect(() => {
  //     const unsubscribe = Firebase.auth().currentUser.email
  //       ? setEmail(Firebase.auth().currentUser.email)
  //       : console.log("user is not logged in");

  //     return () => unsubscribe;
  //   }, []);
  return (
    <React.Fragment>
      <AlreadySignedIn
        formResponses={formResponses}
        email={email}
        createEvent={createEvent}
      />
    </React.Fragment>
  );
}

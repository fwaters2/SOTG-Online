import React from "react";
import StyledTextField from "../StyledTextField";
import Firebase from "../../Firebase";
import LastButtons from "../Stepper/LastButtons";
import string_to_slug from "../../slugify";

// var actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be whitelisted in the Firebase Console.
//   url: "http://localhost:3000/verified",
//   // This must be true.
//   handleCodeInApp: true

//   //dynamicLinkDomain: 'example.page.link'
// };

export default function EmailVerification({
  formResponses,
  setFormResponses,
  step,
  setStep
}) {
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url:
      "http://localhost:3000/verified?slug=" +
      string_to_slug(formResponses.eventName) +
      "&eventName=" +
      string_to_slug(formResponses.eventName) +
      "&teams=" +
      string_to_slug(formResponses.teams.toString()),
    // This must be true.
    handleCodeInApp: true

    //dynamicLinkDomain: 'example.page.link'
  };
  React.useEffect(() => {
    // Confirm the link is a sign-in with email link.
    if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
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
          console.log("result", result);
        })
        .catch(function(error) {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  }, []);

  const handleVerify = () => {
    Firebase.auth()
      .sendSignInLinkToEmail(formResponses.email, actionCodeSettings)
      .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", formResponses.email);
        console.log("email was actually sent");
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
        console.log(error);
      });
  };
  return Firebase.auth().isSignInWithEmailLink(window.location.href) ? (
    <div>Congrats you are signed in</div>
  ) : (
    <React.Fragment>
      <StyledTextField
        type="email"
        placeholder="Email"
        label="Email"
        stateKey="email"
        formResponses={formResponses}
        setFormResponses={setFormResponses}
      />
      <LastButtons
        step={step}
        setStep={setStep}
        label="Verify Email"
        handleSubmit={handleVerify}
      />
    </React.Fragment>
  );
}

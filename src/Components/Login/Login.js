import React from "react";
import StyledPaper from "../StyledPaper";
import StyledTextField from "../StyledTextField";
import { Strings as Languages } from "../../Assets/Lang/Languages";
import {
  Button,
  DialogTitle,
  DialogContentText,
  Dialog,
  DialogContent
} from "@material-ui/core";
import Firebase from "../../Firebase";
import StyledTitle from "../StyledTitle";
// import {
//   GoogleLoginButton,
//   FacebookLoginButton
// } from "react-social-login-buttons";

export default function Login() {
  const [isEmailSent, toggleEmailSent] = React.useState(false);
  const [formResponses, setFormResponses] = React.useState({
    email: ""
  });
  const [lang, setLang] = React.useState("en");
  const [social, setSocial] = React.useState("nothing yet");
  const currentLanguage = Languages(lang);
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/loginAttempt"
        : "http://sotg.online/loginAttempt",
    //"http://sotg.online/home",
    // This must be true.
    handleCodeInApp: true

    //dynamicLinkDomain: 'example.page.link'
  };
  const handleSubmit = () => {
    Firebase.auth()
      .sendSignInLinkToEmail(formResponses.email, actionCodeSettings)
      .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", formResponses.email);
        console.log("Email Sent");
        toggleEmailSent(true);
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
        console.log(error);
      });
  };
  const handleSocialLogin = () => {
    // First, we perform the signInWithRedirect.
    // Creates the provider object.
    var provider = new Firebase.auth.FacebookAuthProvider();
    var auth = Firebase.auth();
    // You can add additional scopes to the provider:
    provider.addScope("email");
    // Sign in with redirect:
    auth.signInWithRedirect(provider);
    ////////////////////////////////////////////////////////////
    // The user is redirected to the provider's sign in flow...
    ////////////////////////////////////////////////////////////
    // Then redirected back to the app, where we check the redirect result:
    auth.getRedirectResult().then(
      function(result) {
        // The firebase.User instance:
        var user = result.user;
        // The Facebook firebase.auth.AuthCredential containing the Facebook
        // access token:
        var credential = result.credential;
        // As this API can be used for sign-in, linking and reauthentication,
        // check the operationType to determine what triggered this redirect
        // operation.
        var operationType = result.operationType;
        setSocial(result);
      },
      function(error) {
        // The provider's account email, can be used in case of
        // auth/account-exists-with-different-credential to fetch the providers
        // linked to the email:
        var email = error.email;
        // The provider's credential:
        var credential = error.credential;
        // In case of auth/account-exists-with-different-credential error,
        // you can fetch the providers using this:
        if (error.code === "auth/account-exists-with-different-credential") {
          auth.fetchSignInMethodsForEmail(email).then(function(providers) {
            // The returned 'providers' is a list of the available providers
            // linked to the email address. Please refer to the guide for a more
            // complete explanation on how to recover from this error.
          });
        }
      }
    );
  };

  return (
    <StyledPaper
      setLang={setLang}
      currentLanguage={currentLanguage}
      lang={lang}
    >
      <StyledTitle>Organizer Login</StyledTitle>
      <div style={{ margin: "-2em 2em 0" }}>
        <StyledTextField
          placeholder="Email"
          label="Email"
          stateKey="email"
          type="email"
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          currentLanguage={currentLanguage}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Email Link
        </Button>
        {/* <GoogleLoginButton onClick={handleSocialLogin} />
        <FacebookLoginButton onClick={handleSocialLogin} /> */}
      </div>
      <Dialog
        open={isEmailSent}
        onClose={() => window.location.reload}
        fullScreen
      >
        <DialogTitle>Email Sent</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Email sent to {formResponses.email}
          </DialogContentText>
          <DialogContentText>
            Please check your gmail for your sign-in link (might be in junk
            folder)
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </StyledPaper>
  );
}

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

export default function Login() {
  const [isEmailSent, toggleEmailSent] = React.useState(false);
  const [formResponses, setFormResponses] = React.useState({
    email: "",
    password: ""
  });
  const [lang, setLang] = React.useState("en");
  const currentLanguage = Languages(lang);
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: "http://localhost:3000/loginAttempt",
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
        console.log("email was actually sent");
        toggleEmailSent(true);
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
        console.log(error);
      });
  };
  return (
    <StyledPaper
      title="Organizer Login"
      setLang={setLang}
      currentLanguage={currentLanguage}
      lang={lang}
    >
      <div style={{ margin: "-2em 2em 0" }}>
        <StyledTextField
          placeholder="Email"
          label="Email"
          stateKey="email"
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

import React from 'react';
import { Redirect } from 'react-router-dom';
import StyledTextField from '../StyledTextField';
import Firebase from '../../Utils/Firebase';
import LastButtons from '../Scoring/Stepper/LastButtons';
import stringToSlug from '../../Utils/slugify';

export default function EmailVerification({ formResponses, setFormResponses, step, setStep }) {
  const [emailSent, setEmailSent] = React.useState(false);
  const redirectFromEmail = '/createevent';
  const stateToURL =
    `${redirectFromEmail}?slug=` +
    `${stringToSlug(formResponses.eventName)}&eventName=${
      formResponses.eventName
    }&teams=${formResponses.teams.join(',')}`;
  const actionCodeSettings = {
    url: `${
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000${stateToURL}`
        : `http://sotg.online${stateToURL}`
    }`,
    // This must be true.
    handleCodeInApp: true,
  };

  const handleVerify = () => {
    Firebase.auth()
      .sendSignInLinkToEmail(formResponses.email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', formResponses.email);
      })
      .catch(error => {
        // Some error occurred, you can inspect the code: error.code
        console.log(error);
      });
    setEmailSent(true);
  };
  if (emailSent) {
    return <Redirect to={`/checkemail?email=${formResponses.email}`} />;
  }
  return (
    <>
      <StyledTextField
        type="email"
        placeholder="Email"
        label="Account Creation"
        stateKey="email"
        formResponses={formResponses}
        setFormResponses={setFormResponses}
      />
      <LastButtons step={step} setStep={setStep} label="Verify Email" handleSubmit={handleVerify} />
    </>
  );
}

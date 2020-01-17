import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Firebase from '../../Utils/Firebase';

export default function LoginAttempt(props) {
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    // Confirm the link is a sign-in with email link.
    if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem('emailForSignIn');

      setMessage('Email retrieved from storage');
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
        setMessage('No email in local storage so must have logged in from another device/browser');
      }
      // The client SDK will parse the code from the link for you.
      Firebase.auth()
        .signInWithEmailLink(email, window.location.href)
        .then(function(result) {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          setMessage(message.concat('. AND the result is in the console log'));
          // This will ACTUALLY CREATE THE EVENT
          console.log(result);
        })
        .catch(function(error) {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          console.log(error);
        });
    } else {
      setMessage('The link is NOT a sign-in with email link');
    }
  }, [message]);
  return (
    <div>
      {console.log(message)}
      <Typography variant="h6" align="center">
        Logged In
      </Typography>
      <Link to="/home">
        <Button fullWidth color="primary" variant="contained">
          Home
        </Button>
      </Link>
    </div>
  );
}

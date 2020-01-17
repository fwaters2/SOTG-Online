import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Firebase from '../../Utils/Firebase';

export default function Verified({ location }) {
  React.useEffect(() => {
    // Confirm the link is a sign-in with email link.
    if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem('emailForSignIn');

      // setMessage("Email retrieved from storage");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
        // setMessage(
        //   "No email in local storage so must have logged in from another device/browser"
        // );
      }
      // The client SDK will parse the code from the link for you.
      Firebase.auth()
        .signInWithEmailLink(email, window.location.href)
        .then(result => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          // setMessage(message.concat(". AND the result is in the console log"));
          // This will ACTUALLY CREATE THE EVENT
          Firebase.firestore()
            .collection('events')
            .add({
              email: result.user.email,
              name: new URLSearchParams(location.search).get('eventName'),
              teams: new URLSearchParams(location.search).get('teams').split(','),
              slug: new URLSearchParams(location.search).get('slug'),
              created: Firebase.database.ServerValue.TIMESTAMP,
            })
            .then(docRef => {
              console.log('Document written with ID: ', docRef.id);
            })
            .catch(error => {
              console.error('Error adding document: ', error);
            });
          console.log(result);
        })
        .catch(error =>
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          console.log(error)
        );
    } else {
      // setMessage("The link is NOT a sign-in with email link");
    }
  }, [location]);
  return (
    <div>
      <Typography variant="h6">
        Congrats your email is verified and your link is ready to receive spirit scores!
      </Typography>

      <Typography>
        Your URL: SOTG.online/
        {new URLSearchParams(location.search).get('slug')}
      </Typography>

      <Link
        component={React.forwardRef(ref => (
          <RouterLink innerRef={ref} location={location} />
        ))}
        to={`/${new URLSearchParams(location.search).get('slug')}`}
      >
        Go to your spirit form
      </Link>
    </div>
  );
}

import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Firebase from '../../Utils/Firebase';

export default function LoginAttempt() {
  React.useEffect(() => {
    if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      Firebase.auth()
        .signInWithEmailLink(email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);
  return (
    <div>
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

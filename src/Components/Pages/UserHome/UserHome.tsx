import React from 'react';
import Firebase from '../../../Utils/Firebase';
import HomeUser from '../../Management/Index';
import HomePage from '../HomePage/HomePage';

type HomeProps = { user:object }

export default function Home({ user }:HomeProps) {
  // React.useEffect(() => {
  //   if (!user) {
  //     if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
  //       let email = window.localStorage.getItem('emailForSignIn');
  //       if (!email) {
  //         email = window.prompt('Please provide your email for confirmation');
  //       }
  //       Firebase.auth()
  //         .signInWithEmailLink(email, window.location.href)
  //         .then(result => {
  //           window.localStorage.removeItem('emailForSignIn');
  //         })
  //         .catch(error => console.log(error));
  //     }
  //   }
  // }, []);

  // if (user) {
  //   return <HomeUser user={user} />;
  // }
  return <HomePage />;
}

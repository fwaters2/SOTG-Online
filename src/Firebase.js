import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/functions";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYjmKHFKTIvE2p4gNEn8W6Ntnq76PhX_o",
  authDomain: "sotgapp-6c992.firebaseapp.com",
  databaseURL: "https://sotgapp-6c992.firebaseio.com",
  projectId: "sotgapp-6c992",
  storageBucket: "sotgapp-6c992.appspot.com",
  messagingSenderId: "872579841977",
  appId: "1:872579841977:web:3d52b01ab08199a69a4068",
  measurementId: "G-8BJQ6Z4VM2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
export const functions = firebase.functions;

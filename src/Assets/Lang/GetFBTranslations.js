//import React from "react";
import Firebase from "../../Firebase";
let fbTranslations = [];
function GetFBTranslations() {
  //const [translation, setTranslation] = React.useState({});
  //React.useEffect(() => {
  Firebase.firestore()
    .collection("translations")
    .get()
    .then(doc => {
      const translations = doc.docs.map(doc => doc.data());
      //setTranslation(translations);
      fbTranslations = translations;
      console.log("no error, here are the translations", translations);
    })
    .catch(function(error) {
      console.log("Error getting translations:", error);
    });
  //}, []);
  //return <div></div>;
}
export default fbTranslations;

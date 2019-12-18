// const admin = require("firebase-admin");
// admin.initializeApp();
// const functions = require("firebase-functions");

// const db = admin.firestore();
// var SibApiV3Sdk = require("sib-api-v3-sdk");

// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key
// var apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = functions.config().sendinblue.key;
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// //apiKey.apiKeyPrefix['api-key'] = "Token"

// var api = new SibApiV3Sdk.AccountApi();
// api.getAccount().then(
//   function(data) {
//     console.log("API called successfully. Returned data: " + data);
//   },
//   function(error) {
//     console.error(error);
//   }
// );

// // const sgMail = require("@sendgrid/mail");
// // sgMail.setApiKey(functions.config().sendgrid.key);

// exports.firestoreEmail = functions.firestore
//   .document("spiritscores/{spiritscore}")
//   .onCreate(async (change, context) => {
//     const scoreAll = change.data();
//     const dataPretty = {
//       myTeam: scoreAll.myTeam,
//       opponent: scoreAll.opponent,
//       rules: scoreAll.rules,
//       fouls: scoreAll.fouls,
//       fairness: scoreAll.fairness,
//       attitude: scoreAll.attitude,
//       communication: scoreAll.communication,
//       total:
//         scoreAll.rules +
//         scoreAll.fouls +
//         scoreAll.fairness +
//         scoreAll.attitude +
//         scoreAll.communication,
//       feedback: scoreAll.feedback
//     };
//     const msg = {
//       sender: scoreAll.email,
//       to: "test@debugging.com",
//       subject: "Send in Blue Tests",
//       textContent: `Here's your data! Team: ${dataPretty.myTeam}, Opponent: ${dataPretty.opponent}, Rules: ${dataPretty.rules}, Fairness: ${dataPretty.fairness}, Attitude: ${dataPretty.attitude}, Communication: ${dataPretty.communication}, Total:  ${dataPretty.total}, Feedback: ${dataPretty.feedback}`
//       //html: "<div>Hello<div>"
//       //SpiritScoreSubmissionTemplate(dataPretty)
//       //html: "<strong>and easy to do anywhere, even with Node.js</strong>"
//     };
//     return SibApiV3Sdk.SendSmtpEmail(msg)

//       .then(() => console.log("email sent!"))
//       .catch(err => console.log(err));
//   });

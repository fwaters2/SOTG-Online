const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");
const db = admin.firestore();
const sgMail = require("@sendgrid/mail");
//const SpiritScoreSubmissionTemplate = require("./EmailTemplates/SpiritScoreSubmission.js");
sgMail.setApiKey(functions.config().sendgrid.key);

exports.firestoreEmail = functions.firestore
  .document("spiritscores/{spiritscore}")
  .onCreate(async (change, context) => {
    const scoreAll = change.data();
    const dataPretty = {
      myTeam: scoreAll.myTeam,
      opponent: scoreAll.opponent,
      rules: scoreAll.rules,
      fouls: scoreAll.fouls,
      fairness: scoreAll.fairness,
      attitude: scoreAll.attitude,
      communication: scoreAll.communication,
      total:
        scoreAll.rules +
        scoreAll.fouls +
        scoreAll.fairness +
        scoreAll.attitude +
        scoreAll.communication,
      feedback: scoreAll.feedback
    };
    const msg = {
      to: scoreAll.email,
      from: "test@debugging.com",
      subject: "SendGrid Tests",
      text: `Here's your data! Team: ${dataPretty.myTeam}, Opponent: ${dataPretty.opponent}, Rules: ${dataPretty.rules}, Fairness: ${dataPretty.fairness}, Attitude: ${dataPretty.attitude}, Communication: ${dataPretty.communication}, Total:  ${dataPretty.total}, Feedback: ${dataPretty.feedback}`
      //html: "<div>Hello<div>"
      //SpiritScoreSubmissionTemplate(dataPretty)
      //html: "<strong>and easy to do anywhere, even with Node.js</strong>"
    };
    return sgMail
      .send(msg)

      .then(() => console.log("email sent!"))
      .catch(err => console.log(err));
  });

const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");

const db = admin.firestore();
var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "", pass: functions.config().myemail.pass }
});

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(functions.config().sendgrid.key);

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
      feedback: scoreAll.feedback,
      email: scoreAll.email
    };
    const msg = {
      from: "forrestwaters@gmail.com",
      to: dataPretty.email,
      subject: "Send in Blue Tests",
      textContent: `Here's your data! Team: ${dataPretty.myTeam}, Opponent: ${dataPretty.opponent}, Rules: ${dataPretty.rules}, Fairness: ${dataPretty.fairness}, Attitude: ${dataPretty.attitude}, Communication: ${dataPretty.communication}, Total:  ${dataPretty.total}, Feedback: ${dataPretty.feedback}`
      //html: "<div>Hello<div>"
      //SpiritScoreSubmissionTemplate(dataPretty)
      //html: "<strong>and easy to do anywhere, even with Node.js</strong>"
    };
    return transporter.sendMail(msg, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent with nodemailer");
      }
    });
  });

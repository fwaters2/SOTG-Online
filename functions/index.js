const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");
const db = admin.firestore();
//const sgMail = require("@sendgrid/mail");

//sgMail.setApiKey(functions.config().sendgrid.key);

exports.handleMatches = functions.firestore
  .document("spiritscores/{spiritscore}")
  .onCreate(async (change, context) => {
    const scoreAll = change.data();
    const dataPretty = {
      eventName: scoreAll.eventName,
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
    const matchStatus = db
      .collection("matches")
      //only grab matches from this tourney
      .where("eventName", "==", dataPretty.eventName)
      //only uncompleted matches
      .where("completed", "==", false)

      .get()
      .then(function(querySnapshot) {
        const results = querySnapshot
          .map(doc =>
            // doc.data() is never undefined for query doc snapshots
            ({ id: doc.id, ...doc.data() })
          )
          //only matches with the 2 relevant teams
          .filter(
            team =>
              (team.team1 === dataPretty.myTeam ||
                team.team1 === dataPretty.opponent) &&
              (team.team2 === dataPretty.myTeam ||
                team.team2 === dataPretty.opponent)
          );
        results.length === 0 ? "newMatch" : "updateMatch";
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });

    switch (matchStatus) {
      case "newMatch":
        console.log("this score will create a new match");
      // return db.collection("matches").add({
      //   eventName: dataPretty.eventName,
      //   team1: dataPretty.myTeam,
      //   team1Submitted: true,
      //   team2: dataPretty.opponent,
      //   team2Submitted: false,
      //   completed: false
      // });
      case "completeMatch":
        console.log("this score will update an existing match");
      // return db.collection("matches").add({
      //   eventName: dataPretty.eventName,
      //   team1: dataPretty.myTeam,
      //   team1Submitted: true,
      //   team2: dataPretty.opponent,
      //   team2Submitted: false,
      //   completed: false
      // });
    }
  });

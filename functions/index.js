const admin = require("firebase-admin");

admin.initializeApp();
const functions = require("firebase-functions");
const db = admin.firestore();

exports.handleMatches = functions.firestore
  .document("spiritScores/{spiritScore}")
  .onCreate((change, context) => {
    const { eventName, myTeam, opponent, submittedBy } = change.data();

    const scoreData = {
      id: change.id,
      eventName,
      myTeam,
      opponent,
      submittedBy
    };
    return db
      .collection("matches")
      .where("eventName", "==", scoreData.eventName)
      .where("completed", "==", false)
      .get()
      .then(function(querySnapshot) {
        const results = [];
        querySnapshot.forEach(doc =>
          results.push({ id: doc.id, ...doc.data() })
        );
        results.filter(
          team =>
            (team.team1 === scoreData.myTeam ||
              team.team1 === scoreData.opponent) &&
            (team.team2 === scoreData.myTeam ||
              team.team2 === scoreData.opponent)
        );
        const toDo =
          results.length === 0
            ? "newMatch"
            : results.length === 1
            ? "updateMatch"
            : "tooManyMatches";
        const matchToUpdate = !results[0]
          ? null
          : results[0].id
          ? results[0].id
          : null;

        switch (toDo) {
          case "newMatch":
            return db.collection("matches").add({
              eventName: scoreData.eventName,
              team1: scoreData.myTeam,
              team1Submitted: true,
              team1SubmissionId: scoreData.id,
              team1SubmittedBy: scoreData.submittedBy,
              team2: scoreData.opponent,
              team2Submitted: false,
              team2SubmissionId: null,
              completed: false
            });
          case "updateMatch":
            return db
              .collection("matches")
              .doc(matchToUpdate)
              .update({
                team2: scoreData.myTeam,
                team2Submitted: true,
                team2SubmissionId: scoreData.id,
                team2SubmittedBy: scoreData.submittedBy,
                completed: true
              });
          default:
            console.log(
              "you somehow have too many matches or less than 0 matches"
            );
        }
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  });

const admin = require('firebase-admin');

admin.initializeApp();
const functions = require('firebase-functions');

const db = admin.firestore();

exports.handleMatches = functions.firestore
  .document('spiritScores/{spiritScore}')
  .onCreate(change => {
    const { eventName, myTeam, opponent, submittedBy } = change.data();

    const scoreData = {
      id: change.id,
      eventName,
      myTeam,
      opponent,
      submittedBy,
    };
    return db
      .collection('matches')
      .where('eventName', '==', scoreData.eventName)
      .where('completed', '==', false)
      .get()
      .then(querySnapshot => {
        const results = [];
        querySnapshot.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
        results.filter(
          team =>
            (team.team1 === scoreData.myTeam || team.team1 === scoreData.opponent) &&
            (team.team2 === scoreData.myTeam || team.team2 === scoreData.opponent)
        );

        let matchToUpdate = null;
        if (results[0].id && results[0]) {
          matchToUpdate = results[0].id;
        }

        switch (results.length) {
          case 0: {
            return db.collection('matches').add({
              eventName: scoreData.eventName,
              team1: scoreData.myTeam,
              team1Submitted: true,
              team1SubmissionId: scoreData.id,
              team1SubmittedBy: scoreData.submittedBy,
              team2: scoreData.opponent,
              team2Submitted: false,
              team2SubmissionId: null,
              completed: false,
            });
          }
          case 1: {
            return db
              .collection('matches')
              .doc(matchToUpdate)
              .update({
                team2: scoreData.myTeam,
                team2Submitted: true,
                team2SubmissionId: scoreData.id,
                team2SubmittedBy: scoreData.submittedBy,
                completed: true,
              });
          }
          default:
            return 'you somehow have too many matches or less than 0 matches';
        }
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  });

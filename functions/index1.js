const admin = require("firebase-admin");
admin.initializeApp();

const functions = require("firebase-functions");
const db = admin.firestore();

//GOAL: Everytime a score is added, this function will attempt to find it's significant other and complete the match
// if none is found it will create a new match

//Reference to the collection where Spirit Scores are being added
const newSpiritScore = functions.firestore.document(
  "spiritScores/{spiritScore}"
);

//Reference to the match Collection
const matchRef = db.collection("matches");
//Matches to be queried

//export the function
exports.handleMatches = newSpiritScore.onCreate(async (change, context) => {
  //destructuring the data
  const { eventName, myTeam, opponent, submittedBy } = change.data();

  //Step 1 grab information from the uploaded spirit Score
  const scoreData = {
    id: change.id,
    eventName,
    myTeam,
    opponent,
    submittedBy
  };

  //Step 2 grab all relevant matches
  let matches = [];
  await matchRef
    .where("completed", "==", false)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        matches = [...matches, { ...doc.data(), id: doc.id }];
        // matches.push({...})
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });

  //Step 3 Determine if matches contains a twin
  const potentialPairArray = matches
    //check for any matches that could be a twin
    .map(
      match =>
        (match.team1 === scoreData.myTeam ||
          match.team1 === scoreData.opponent) &&
        (match.team2 === scoreData.myTeam || match.team2 === scoreData.opponent)
    )
    .includes(true);

  //Step 4.1 (no matches) Create new Match
  return potentialPairArray.length === 0
    ? console.log("need to create new match")
    : potentialPairArray.length === 1
    ? console.log("We've found it's pair!")
    : console.log("uh oh, we have multiple matches");
});

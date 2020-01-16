const admin = require("firebase-admin");
admin.initializeApp();

const functions = require("firebase-functions");
const db = admin.firestore();

const testDB = functions.firestore.document("test/{test}");

exports.test1 = functions.firestore
  .document("test/{test}")
  .onCreate((change, context) => {
    console.log(
      "test1 firing nothing besides this console log",
      change.data(),
      context,
      change
    );
  });

// exports.test4 = testDB.onCreate((change, context) => {
//   //lets's see if we can find this test and create or not create based on if it exists
//   matches = [];
//   db.collection("test2")
//     .get()
//     .then(function(querySnapshot) {
//       querySnapshot.forEach(function(doc) {
//         matches = [...matches, { ...doc.data(), id: doc.id }];
//       });
//     })
//     .catch(function(error) {
//       console.log("Error getting documents: ", error);
//     });
//   console.log(matches);
//   //     isTestSuccessful: true
//   //   });
//   //   console.log(
//   //     "test2 fired check test2 in firestore for a docomuent added with isTestSuccessful"
//   //   );
// });

// exports.test5 = testDB.onCreate((change, context) => {
//   //lets's see if we can find this test and create or not create based on if it exists
//   matches = [];
//   db.collection("test2")
//     .get()
//     .then(function(querySnapshot) {
//       querySnapshot.forEach(function(doc) {
//         matches = [...matches, { ...doc.data(), id: doc.id }];
//       });
//     })
//     .catch(function(error) {
//       console.log("Error getting documents: ", error);
//     });
//   console.log(matches.map(x => x.isTestSuccessful));
//   //     isTestSuccessful: true
//   //   });
//   //   console.log(
//   //     "test2 fired check test2 in firestore for a docomuent added with isTestSuccessful"
//   //   );
// });

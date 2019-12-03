//This will take the url slug and return
//exists
//data
import Firebase from "../Firebase";
export default function CheckFSData(event) {
  //Get all events where slug = the url
  const eventRef = Firebase.firestore()
    .collection("events")
    .where("slug", "==", event);

  //attempt with get
  eventRef
    .get()
    .then(doc => {
      //see if it exists
      const eventExists = doc.docs.length === 0 ? false : true;
      if (eventExists) {
        const event = doc.docs[0].data();
        const eventData = {
          name: event.name,
          email: event.email,
          teams: event.teams
        };

        return { exists: true, eventData: eventData };
      } else {
        return { exists: false, eventData: null };
      }
    })
    .catch(function(error) {
      console.log("Error getting event data", error);
    });
}

import React, { useEffect, useState } from "react";
import Firebase from "../Firebase";
import Form from "../form/FormState";

export default function EventHome(props) {
  const [exists, setExists] = useState(true);
  const [eventData, setEventData] = useState({
    name: "loading",
    email: "",
    teams: []
  });

  const { event } = props.match.params;
  useEffect(() => {
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
          setEventData({
            name: event.name,
            email: event.email,
            teams: event.teams
          });

          console.log("Event data:", event);
        } else {
          setExists(false);
          console.log("No such event!");
        }
      })
      .catch(function(error) {
        console.log("Error getting event:", error);
      });
  }, [event]);

  return exists ? (
    <div>
      <div>We'll send results to: {eventData.email}</div>
      <Form data={eventData} />
    </div>
  ) : (
    <h1>Sorry, we couldn't find you're event!</h1>
  );
}

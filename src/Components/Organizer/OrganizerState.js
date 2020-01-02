import React from "react";
import Firebase from "../../Firebase";
import OrganizerView from "./OrgananizerView";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";

export default function OrganizerState() {
  const [isLoading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [spiritScores, setSpiritScores] = React.useState([]);

  React.useEffect(() => {
    setEmail(Firebase.auth().currentUser.email);
    // Firebase.auth().onAuthStateChanged(user =>
    //   user ? setEmail(user.email) : alert("error finding events")
    // );
    //console.log(Firebase.auth().currentUser.email);
    //console.log(email);
  }, []);
  React.useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("events")
      .where("email", "==", email)
      .onSnapshot(snapshot => {
        const events = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLoading(false);
        setEvents(events);
      });
    return () => unsubscribe;
  }, [email]);
  React.useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("spiritscores")
      .where("email", "==", email)
      .onSnapshot(snapshot => {
        const spiritScores = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSpiritScores(spiritScores);
        setLoading(false);
      });
    return () => unsubscribe;
  }, [email]);

  const handleDelete = id => () => {
    Firebase.firestore()
      .collection("events")
      .doc(id)
      .delete();
  };
  return (
    <React.Fragment>
      <OrganizerView
        events={events}
        spiritScores={spiritScores}
        email={email}
        handleDelete={handleDelete}
        isLoading={isLoading}
      />

      <Grid container justify="center">
        <Grid item>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/createevent"
          >
            <IconButton color="primary">
              <Add />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

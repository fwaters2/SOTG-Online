import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  Button
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Firebase from "../../Firebase";
import Standings from "./Standings";

export default function Events() {
  const [events, setEvents] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [spiritScores, setSpiritScores] = React.useState([]);
  const [isViewingEvent, toggleEventView] = React.useState(false);
  const [currentEventInfo, setCurrentEventInfo] = React.useState({});
  const [currentScores, setCurrentScores] = React.useState([]);
  React.useEffect(() => {
    setEmail(Firebase.auth().currentUser.email);
    // Firebase.auth().onAuthStateChanged(user =>
    //   user ? setEmail(user.email) : alert("error finding events")
    // );
    //console.log(Firebase.auth().currentUser.email);
    //console.log(email);
  }, []);
  React.useEffect(() => {
    //console.log("use effect");

    Firebase.firestore()
      .collection("events")
      .where("email", "==", email)
      .get()
      .then(doc => {
        //see if it exists

        const events = doc.docs.map(x => x.data());
        setEvents(events);

        //console.log("Events data:", events);
      })
      .catch(function(error) {
        console.log("Error getting event:", error);
      });
    Firebase.firestore()
      .collection("spiritscores")
      .where("email", "==", email)
      //this is good
      .onSnapshot(snapshot => {
        const spiritScores = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        //.map(doc => doc.data());
        //console.log("snapshots", spiritScores);
        setSpiritScores(spiritScores);
      });
    // Firebase.firestore()
    //   .collection("spiritscores")
    //   .where("email", "==", email)
    //   .get()
    //   .then(doc => {
    //     //see if it exists

    //     const spiritScores = doc.docs.map(x => x.data());
    //     //setSpiritScores(spiritScores);

    //     console.log("get:", spiritScores);
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting event:", error);
    //   });
  }, [email]);
  const handleClick = eventInfo => () => {
    setCurrentEventInfo(eventInfo);
    setCurrentScores(
      spiritScores.filter(score => score.eventName === eventInfo.name)
    );
    toggleEventView(true);
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h6">{email}</Typography>
      {isViewingEvent ? (
        <Button
          color="secondary"
          fullWidth
          onClick={() => toggleEventView(false)}
        >
          Back
        </Button>
      ) : null}
      {isViewingEvent ? (
        <Standings eventInfo={currentEventInfo} scores={currentScores} />
      ) : (
        // <React.Fragmment>
        //
        <List>
          <Typography variant="h6">Tournaments:</Typography>
          {events.map(event => (
            <ListItem key={event} button divider onClick={handleClick(event)}>
              <Grid container direction="column">
                <Grid item>
                  <Typography>{event.name}</Typography>
                </Grid>
                <Grid item container>
                  <Grid item xs>
                    <Typography>Teams: {event.teams.length}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      Spirit Scores:{" "}
                      {
                        spiritScores.filter(
                          score => score.eventName === event.name
                        ).length
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          ))}
          <ListItem>
            <Grid container justify="center">
              <Grid item>
                <IconButton color="primary">
                  <Add />
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      )}
      {/* </React.Fragmment> */}
    </Container>
  );
}

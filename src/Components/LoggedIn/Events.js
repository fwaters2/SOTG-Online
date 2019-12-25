import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Firebase from "../../Firebase";

export default function Events() {
  const [events, setEvents] = React.useState([]);
  const [email, setEmail] = React.useState();
  React.useEffect(() => {
    Firebase.firestore()
      .collection("events")
      .get()
      .then(doc => {
        //see if it exists

        const events = doc.docs.map(x => x.data());
        setEvents(events);

        console.log("Events data:", events);
      })
      .catch(function(error) {
        console.log("Error getting event:", error);
      });
  }, []);
  return (
    <Container maxWidth="xs">
      {Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          setEmail(user.email);
        } else {
          // No user is signed in.
        }
      })}
      <Typography variant="h6">{email}</Typography>
      <Typography variant="h6">Tournaments:</Typography>
      <List>
        {events.map(event => (
          <ListItem button>
            <Grid container direction="column">
              <Grid item>
                <Typography>{event.name}</Typography>
              </Grid>
              <Grid item container>
                <Grid item xs>
                  <Typography>Teams: {event.teams.length}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Spirit Scores: 0</Typography>
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
    </Container>
  );
}

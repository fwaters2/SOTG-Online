import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import { Add, Settings } from "@material-ui/icons";
import Firebase from "../../Firebase";
import Standings from "./Standings";
import { Link } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import EditTeams from "./EditTeams";
import ShareDialog from "./ShareDialog";
import Logo from "../../Assets/Loader/Spinner/Logo";

export default function Events() {
  const [isLoading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [spiritScores, setSpiritScores] = React.useState([]);
  const [isViewingEvent, toggleEventView] = React.useState(false);
  const [currentEventInfo, setCurrentEventInfo] = React.useState({});
  const [currentScores, setCurrentScores] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isShareDialogOpen, toggleShareDialog] = React.useState(false);
  const [isTeamDialogOpen, toggleTeamDialog] = React.useState(false);
  const [isDeleteDialogOpen, toggleDeleteDialog] = React.useState(false);

  const handleSettings = (id, event) => e => {
    setAnchorEl(e.currentTarget);
  };
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
  const handleClick = eventInfo => () => {
    setCurrentEventInfo(eventInfo);
    setCurrentScores(
      spiritScores.filter(score => score.eventName === eventInfo.name)
    );
    toggleEventView(true);
  };
  const handleMenuDelete = id => () => {
    console.log("id", id);
    Firebase.firestore()
      .collection("events")
      .doc(id)
      .delete();
    //toggleDeleteDialog(true);
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
        <List>
          <Typography variant="h6">Tournaments:</Typography>
          {isLoading ? (
            <Logo />
          ) : (
            events.map(event => (
              <React.Fragment key={event.eventName}>
                <div
                  style={{
                    position: "absolute",
                    right: "0.5em",
                    marginTop: "0.3em",
                    zIndex: 10
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={handleSettings(event.id, event.eventName)}
                  >
                    <Settings />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => toggleShareDialog(true)}>
                      Copy Link
                    </MenuItem>
                    <MenuItem onClick={() => toggleTeamDialog(true)}>
                      Update Teams
                    </MenuItem>
                    <MenuItem onClick={handleMenuDelete(event.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
                <ListItem button divider onClick={handleClick(event)}>
                  <Grid container direction="column">
                    <Grid item container>
                      <Grid item xs>
                        <Typography>{event.eventName}</Typography>
                      </Grid>
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
                              score => score.eventName === event.eventName
                            ).length
                          }
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              </React.Fragment>
            ))
          )}
          <ListItem>
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
          </ListItem>
        </List>
      )}
      <ShareDialog
        open={isShareDialogOpen}
        onClose={() => toggleShareDialog(false)}
      />
      <EditTeams
        open={isTeamDialogOpen}
        onClose={() => toggleTeamDialog(false)}
      />
      <DeleteDialog
        open={isDeleteDialogOpen}
        onClose={() => toggleDeleteDialog(false)}
      />
    </Container>
  );
}

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
  MenuItem,
  Paper
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import Standings from "./Standings/Standings";
import DeleteDialog from "./Dialogs/DeleteDialog";
import EditTeams from "./Dialogs/EditTeams";
import ShareDialog from "./Dialogs/ShareDialog";
import Logo from "../../Assets/Loader/Spinner/Logo";

export default function OrganizerView({
  events,
  spiritScores,
  email,
  handleDelete,
  isLoading
}) {
  const [isViewingEvent, toggleEventView] = React.useState(false);
  const [currentEventInfo, setCurrentEventInfo] = React.useState({});
  const [currentScores, setCurrentScores] = React.useState([]);
  const [currentEvent, setCurrentEvent] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //Dialogs
  const [isShareDialogOpen, toggleShareDialog] = React.useState(false);
  const [isTeamDialogOpen, toggleTeamDialog] = React.useState(false);
  const [isDeleteDialogOpen, toggleDeleteDialog] = React.useState(false);

  React.useEffect(() => {
    setCurrentScores(
      spiritScores.filter(score => score.eventName === currentEvent)
    );
  }, [spiritScores, currentEvent]);

  const handleSettings = (id, event) => e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClick = eventInfo => () => {
    setCurrentEventInfo(eventInfo);
    setCurrentEvent(eventInfo.name);
    setCurrentScores(
      spiritScores.filter(score => score.eventName === eventInfo.name)
    );
    toggleEventView(true);
  };
  const handleMenuDelete = id => () => {
    //handleDelete(id)
    toggleDeleteDialog(true);
  };
  return (
    <Container maxWidth="xs">
      <Grid container alignItems="center" justify="space-between">
        <Typography variant="h6">Organizer: </Typography>
        <Typography variant="subtitle2">{email}</Typography>
      </Grid>
      {isViewingEvent ? (
        <Button
          color="secondary"
          variant="outlined"
          fullWidth
          onClick={() => toggleEventView(false)}
        >
          Back to Events
        </Button>
      ) : null}
      {isViewingEvent ? (
        <Standings eventInfo={currentEventInfo} scores={currentScores} />
      ) : (
        <List>
          <Typography variant="h6">Select Event:</Typography>
          {isLoading ? (
            <Logo />
          ) : (
            events.map(event => (
              <Paper
                style={{
                  backgroundColor: "#8FDE58"
                }}
                key={event.name}
              >
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
                    onClick={handleSettings(event.id, event.name)}
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
                        <Typography>{event.name}</Typography>
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
                              score => score.eventName === event.name
                            ).length
                          }
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              </Paper>
            ))
          )}
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

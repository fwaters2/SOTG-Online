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
  const [settingsInfo, setSettingsInfo] = React.useState({
    name: "",
    id: "",
    teams: [],
    slug: ""
  });

  React.useEffect(() => {
    setCurrentScores(
      spiritScores.filter(score => score.eventName === currentEvent)
    );
  }, [spiritScores, currentEvent]);

  const handleSettings = info => e => {
    setAnchorEl(e.currentTarget);
    setSettingsInfo(info);
  };

  const handleClick = eventInfo => () => {
    setCurrentEventInfo(eventInfo);
    setCurrentEvent(eventInfo.eventName);
    setCurrentScores(
      spiritScores.filter(score => score.eventName === eventInfo.eventName)
    );
    toggleEventView(true);
  };

  const handleMenuDelete = () => {
    setAnchorEl(null);
    toggleDeleteDialog(true);
  };
  const handleMenuTeams = () => {
    setAnchorEl(null);
    toggleTeamDialog(true);
  };
  const handleMenuCopy = x => {
    setAnchorEl(null);
    alert("http://SOTG.online/" + settingsInfo.slug);
  };

  return (
    <Container maxWidth="xs">
      <Grid container alignItems="center" justify="space-between">
        <Typography variant="h6">User: </Typography>
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
            events.map(x => (
              <Paper
                style={{
                  backgroundColor: "#8FDE58"
                }}
                key={x.eventName}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "0.5em",
                    marginTop: "0.3em",
                    zIndex: 10
                  }}
                >
                  <IconButton size="small" onClick={handleSettings(x)}>
                    <Settings />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={handleMenuCopy}>Copy Link</MenuItem>
                    <MenuItem onClick={handleMenuTeams}>Update Teams</MenuItem>
                    <MenuItem onClick={handleMenuDelete}>Delete</MenuItem>
                  </Menu>
                </div>
                <ListItem button divider onClick={handleClick(x)}>
                  <Grid container direction="column">
                    <Grid item container>
                      <Grid item xs>
                        <Typography>{x.eventName}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item container>
                      <Grid item xs>
                        <Typography>({x.role})</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Spirit Scores:{" "}
                          {
                            spiritScores.filter(
                              score => score.eventName === x.eventName
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
      {/* <ShareDialog
        open={isShareDialogOpen}
        onClose={() => toggleShareDialog(false)}
      /> */}
      <EditTeams
        settingsInfo={settingsInfo}
        open={isTeamDialogOpen}
        onClose={() => toggleTeamDialog(false)}
      />
      <DeleteDialog
        settingsInfo={settingsInfo}
        open={isDeleteDialogOpen}
        onClose={() => toggleDeleteDialog(false)}
      />
    </Container>
  );
}

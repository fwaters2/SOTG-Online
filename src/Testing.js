import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";

export default function Testing() {
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const [currentFeedback, setCurrentFeedback] = React.useState("");
  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + "...";
  }

  const dummyData = [
    {
      team: "Disc Jockeys",
      subscores: ["11.6", "12.2", "8.8", "9.9", "10.4"],
      total: "12.8"
    },
    {
      team: "Big Dumps",
      subscores: ["13.6", "14.2", "12.8", "10.9", "10.4"],
      total: "14.8"
    },
    {
      team: "A Very Very Long Team Name",
      subscores: ["13.6", "14.2", "12.8", "10.9", "10.4"],
      total: "14.8"
    }
  ];
  const categories = ["Rules", "Fouls", "Fairness", "Attitude", "Comm."];
  const summary = (index, team, subscores, total) => {
    return (
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h5" align="left">
            {index + 1}
          </Typography>
        </Grid>
        <Grid item xs container direction="column" spacing={1}>
          <Grid item>{team}</Grid>
          <Grid item container justify="space-between">
            {subscores.map(subscore => (
              <Grid item xs>
                <Box
                  border="1px black solid"
                  paddingX=".2em"
                  //minWidth="1.5em"
                  textAlign="center"
                >
                  <Typography variant="caption">{subscore}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5">{total}</Typography>
        </Grid>
      </Grid>
    );
  };

  const expandedData = [
    {
      opponent: "Spirit Animals",
      subscores: [2, 1, 3, 4, 2],
      total: 12,
      feedback:
        "Rules: When they didn’t know the rules, they showed a real willingness to learn them. For the level of play they showed good knowledge of the rules. Fouls: Nothing significant occurred beyond incidental contact. Fairness: They frequently fouled and/or made calls for tactical reasons. They made many unjustifiable calls/contests. Attitude: Highest level of self-control and positive attitude shown throughout game towards opponents, officials, and spectators. Communication: They listened. Conflicts were resolved without incident"
    },
    {
      opponent: "Hakuna Matata",
      subscores: [2, 1, 3, 0, 2],
      total: 8,
      feedback:
        "Rules2: When they didn’t know the rules, they showed a real willingness to learn them. For the level of play they showed good knowledge of the rules. Fouls: Nothing significant occurred beyond incidental contact. Fairness: They frequently fouled and/or made calls for tactical reasons. They made many unjustifiable calls/contests. Attitude: Highest level of self-control and positive attitude shown throughout game towards opponents, officials, and spectators. Communication: They listened. Conflicts were resolved without incident"
    },
    {
      opponent: "Spirit Animals",
      subscores: [2, 4, 3, 4, 2],
      total: 15,
      feedback:
        "Rules3: When they didn’t know the rules, they showed a real willingness to learn them. For the level of play they showed good knowledge of the rules. Fouls: Nothing significant occurred beyond incidental contact. Fairness: They frequently fouled and/or made calls for tactical reasons. They made many unjustifiable calls/contests. Attitude: Highest level of self-control and positive attitude shown throughout game towards opponents, officials, and spectators. Communication: They listened. Conflicts were resolved without incident"
    }
  ];
  const handleClick = x => () => {
    setCurrentFeedback(x);
    toggleDialog(true);
  };
  const expanded = (index, opponent, subscores, total, feedback) => {
    return (
      <Grid
        container
        alignItems="center"
        style={
          index % 2 === 1
            ? { background: "darkgray" }
            : { background: "lightgray" }
        }
        direction="column"
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="caption">opponent:</Typography> {opponent}
            </Grid>
            <Grid item container>
              {subscores.map(subscore => (
                <Grid item xs>
                  <Box
                    border="1px black solid"
                    paddingX=".2em"
                    //minWidth="1.5em"
                    textAlign="center"
                  >
                    <Typography variant="caption">{subscore}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item style={{ minWidth: "2em" }}>
            <Typography variant="h6" align="right">
              {total}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs>
            <Typography
              variant="caption"
              style={{
                maxWidth: "60vw",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {feedback}
              {/* {truncateString(feedback, 25)} */}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              style={{ color: "black", padding: ".1em .3em" }}
              onClick={handleClick(feedback)}
            >
              More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      <div style={{ margin: "0 .5em" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="h5" align="left">
              #
            </Typography>
          </Grid>
          <Grid item xs container justify="space-between">
            {categories.map(cat => (
              <Grid item xs>
                <Typography style={{ fontSize: "6pt" }}>{cat}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item>Total</Grid>
        </Grid>
      </div>
      <div style={{ margin: "0 -1em" }}>
        {dummyData.map((data, index) => (
          <ExpansionPanel>
            <ExpansionPanelSummary>
              {summary(index, data.team, data.subscores, data.total)}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container direction="column">
                {expandedData.map((data, index) =>
                  expanded(
                    index,
                    data.opponent,
                    data.subscores,
                    data.total,
                    data.feedback
                  )
                )}
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
      <Dialog open={isDialogOpen} onClose={() => toggleDialog(false)} maxWidth>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>{currentFeedback}</DialogContent>
      </Dialog>
    </div>
  );
}

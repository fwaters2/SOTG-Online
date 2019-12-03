import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";

//takes props
const props = {
  team: "Team 1",
  opponent: "Team 2",
  scores: {
    cat1: 2,
    cat2: 2,
    cat3: 3,
    cat4: 1,
    cat5: 2
  }
};

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

export default function ScoreCardView() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const anArray = [
    { cat: "Rules", score: 2 },
    { cat: "Fouls", score: 2 },
    { cat: "Fairness", score: 3 },
    { cat: "attitude", score: 1 },
    { cat: "Comm", score: 4 }
  ];

  return (
    <div>
      <ExpansionPanel
        //square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Grid container spacing={1}>
            <Grid item xs>
              <Grid container justify="space-between" spacing={1}>
                <Grid item align="left">
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="caption">Team</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">My Team</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item align="right">
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="caption">Opponent</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">The other team</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box border="1px solid black" p={1}>
                <Typography variant="h4">12</Typography>
              </Box>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item xs={12}>
              <Grid container justify="space-evenly" spacing={1}>
                {anArray.map(x => (
                  <Grid item align="center">
                    <Box borderBottom="1px solid black">
                      <Typography variant="h6">{x.score}</Typography>
                    </Box>
                    <Typography variant="caption">{x.cat}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Feedback: "some stuff"</Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

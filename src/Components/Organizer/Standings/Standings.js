import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";
import ScoreSummary from "./ScoreSummary";
import ScoreExpanded from "./ScoreExpanded";
import builder from "./builder";
import StandingsExpansionPanel from "./StandingsExpansionPanel";

export default function Standings({ eventInfo, scores }) {
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const [currentFeedback, setCurrentFeedback] = React.useState("");
  const categories = [
    "rules",
    "fouls",
    "fairness",
    "attitude",
    "communication"
  ];

  const handleClick = x => () => {
    setCurrentFeedback(x);
    toggleDialog(true);
  };

  return (
    <div>
      {/* <div style={{ margin: "0 .5em" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="h5" align="left">
              #
            </Typography>
          </Grid>
          <Grid item xs container justify="space-between">
            {categories.map(cat => (
              <Grid item xs key={cat}>
                <Typography style={{ fontSize: "6pt" }}>{cat}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item>Total</Grid>
        </Grid>
      </div> */}
      <div style={{ margin: "0 -1em" }}>
        {builder(eventInfo, scores).map((data, index) => (
          <StandingsExpansionPanel
            key={index}
            data={data}
            index={index}
            handleClick={handleClick}
          />
        ))}
        {/* <Grid container justify="center">
          <Grid item>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/" + eventInfo.slug}
            >
              <IconButton color="primary">
                <Add />
              </IconButton>
            </Link>
          </Grid>
        </Grid> */}
      </div>
      <Dialog open={isDialogOpen} onClose={() => toggleDialog(false)}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>{currentFeedback}</DialogContent>
      </Dialog>
    </div>
  );
}

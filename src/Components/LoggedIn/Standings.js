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

const defaultScores = [-1, -1, -1, -1, -1];

export default function Standings({ eventInfo, scores }) {
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const [currentFeedback, setCurrentFeedback] = React.useState("");
  const [fbData, setFbData] = React.useState([]);
  const categories = [
    "rules",
    "fouls",
    "fairness",
    "attitude",
    "communication"
  ];
  React.useEffect(() => {
    const categories = [
      "rules",
      "fouls",
      "fairness",
      "attitude",
      "communication"
    ];
    const summarizeData = eventInfo.teams.map(team => ({
      team: team,
      subscores:
        scores.filter(score => score.opponent === team).length >= 1
          ? categories.map(
              cat =>
                Math.round(
                  (scores
                    .filter(score => score.opponent === team)
                    .map(x => x[cat])
                    .reduce((total, num) => total + num) /
                    scores.filter(score => score.opponent === team).length) *
                    10
                ) / 10
            )
          : defaultScores,
      total:
        scores.filter(score => score.opponent === team).length >= 1
          ? Math.round(
              (categories
                .map(cat =>
                  scores
                    //only scores for that team
                    .filter(score => score.opponent === team)
                    //grab points in each category
                    .map(x => x[cat])
                    //add them up
                    .reduce((total, num) => total + num)
                )
                .reduce((total, num) => total + num) /
                scores.filter(score => score.opponent === team).length) *
                10
            ) / 10
          : -1,

      individualGames: scores
        .filter(score => score.opponent === team)
        .map(x => ({
          opponent: x.myTeam,
          subscores: [
            x.rules,
            x.fouls,
            x.fairness,
            x.attitude,
            x.communication
          ],
          total: x.rules + x.fouls + x.fairness + x.attitude + x.communication
        }))
    }));

    setFbData(summarizeData);
  }, [eventInfo, scores]);

  function sortData(b, a) {
    if (a.total < b.total) {
      return -1;
    }
    if (a.total > b.total) {
      return 1;
    }
    return 0;
  }
  const handleClick = x => () => {
    setCurrentFeedback(x);
    toggleDialog(true);
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
        {fbData.sort(sortData).map((data, index) => (
          <ExpansionPanel>
            <ExpansionPanelSummary>
              {
                <ScoreSummary
                  index={index}
                  team={data.team}
                  subscores={data.subscores}
                  total={data.total}
                />
              }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container direction="column">
                {data.individualGames.map((data, index) => (
                  <ScoreExpanded
                    index={index}
                    opponent={data.opponent}
                    subscores={data.subscores}
                    total={data.total}
                    feedback={data.feedback}
                    handleClick={handleClick}
                  />
                ))}
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

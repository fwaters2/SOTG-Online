import React from "react";
import { Paper, Grid, Typography, Tabs, Tab } from "@material-ui/core";
import BoxScores from "../Organizer/Standings/BoxScores";

export default function PlayerView() {
  return (
    <div>
      Components needed:
      <br />
      tab header
      <Tabs vfullWidth color="primary">
        <Tab label="Submittted" />
        <Tab label="Received" />
      </Tabs>
      <br />
      grid for cards with spirit scores(submitted/recieved)
      <Paper>
        <Grid container>
          <Grid item xs={9} container direction="column">
            <Grid item>
              <Typography>Opponent</Typography>
            </Grid>

            <BoxScores subscores={[0, 1, 2, 3, 4]} type="main" />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4">10</Typography>
          </Grid>
        </Grid>
      </Paper>
      <br />
      cards for announcements "awaiting submission", "waiting for opponent
      score"
    </div>
  );
}

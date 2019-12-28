import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

export default function ScoreSummary({ index, team, subscores, total }) {
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
                <Typography variant="caption">
                  {subscore === -1 ? "--" : subscore}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h5">{total === -1 ? "--" : total}</Typography>
      </Grid>
    </Grid>
  );
}

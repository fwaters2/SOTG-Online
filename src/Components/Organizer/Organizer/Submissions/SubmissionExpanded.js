import React from "react";
import { Grid, Typography } from "@material-ui/core";
import BoxScores from "../../Standings/BoxScores";

export default function SubmissionExpanded({ subscores, feedback }) {
  return (
    <div
      style={{
        background: "#0038ae",
        margin: "0 -1em",
        padding: "1em 0",
        boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)",
        color: "white",
        borderRadius: "8px"
      }}
    >
      <Grid
        container
        alignItems="center"
        style={{ margin: "0.5em 0", padding: "0 1em" }}
        direction="column"
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item container>
              <BoxScores subscores={subscores} type="secondary" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs>
            <Typography
              variant="caption"
              style={{
                margin: "1em 0",
                display: "block"
              }}
            >
              {feedback}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

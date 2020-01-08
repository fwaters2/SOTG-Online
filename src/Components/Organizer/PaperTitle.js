import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function PaperTitle({ children }) {
  return (
    <div
      style={{
        padding: "0 0 1em 0",
        margin: "0 1em"
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h5">{children}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

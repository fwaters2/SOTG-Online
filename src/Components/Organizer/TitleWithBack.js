import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

export default function TitleWithBack(props) {
  const { children, toggleEventView } = props;
  return (
    <div
      style={{
        padding: "0 0 1em 0",
        margin: "-1em 1em 0 1em"
      }}
    >
      <Grid container alignItems="center">
        <Grid item>
          <IconButton
            onClick={() => toggleEventView(false)}
            style={{ color: "white", paddingLeft: 0 }}
          >
            <ChevronLeft />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Typography variant="h5">{children}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

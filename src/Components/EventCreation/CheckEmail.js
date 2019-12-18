import React from "react";
import { SvgIcon, Typography, Container, Grid } from "@material-ui/core";
import { Email } from "@material-ui/icons";

export default function CheckEmail() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={4}
      justify="center"
      style={{ height: "100%" }}
    >
      <Grid item>
        <SvgIcon fontSize="large" style={{ color: "#E82178" }}>
          <Email />
        </SvgIcon>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">
          Please check your email and follow the link to finish setting up your
          event!
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body2" align="center">
          (Feel free to close this tab)
        </Typography>
      </Grid>
    </Grid>
  );
}

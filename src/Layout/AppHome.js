import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import NavLink from "../Components/NavLink";

export default function AppHome() {
  return (
    <Container maxWidth="xs" align="center">
      <Grid
        container
        direction="column"
        spacing={2}
        style={{ marginTop: "2em" }}
      >
        <Grid item>
          <Typography variant="h2">SOTG Online</Typography>
          <Typography>Electronic Spirit Score Manager</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <NavLink label="Demo" extension="demo" />
            </Grid>
            <Grid item>
              <NavLink label="Create Event" extension="createevent" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

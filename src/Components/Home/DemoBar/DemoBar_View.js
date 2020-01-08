import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";
import { Add, Replay } from "@material-ui/icons";

function handleDemoAdd() {
  return () => alert("Demo Add");
}
function handleReset() {
  return () => alert("Reset");
}

export default function DemoBar_View() {
  return (
    <AppBar
      position="static"
      color="secondary"
      style={{ marginBottom: ".5em" }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography>Demo Tools</Typography>
          </Grid>
          <Grid
            item
            xs={9}
            container
            spacing={1}
            alignItems="center"
            justify="flex-end"
          >
            <Grid item>
              <IconButton
                onClick={handleDemoAdd}
                color="primary"
                style={{ background: "white" }}
              >
                <Add />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="caption">Scores</Typography>
            </Grid>
            <Grid item>
              <IconButton
                color="secondary"
                style={{ background: "white" }}
                onClick={handleReset}
              >
                <Replay />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import { Grid, Icon } from "@material-ui/core";
import { Check } from "@material-ui/icons";

export default function Card_CompleteMatch({ props }) {
  const { team1, team2 } = props;
  return (
    <React.Fragment>
      <Grid item style={{ marginLeft: "1em" }}>
        <Icon>
          <Check />
        </Icon>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>{team1}</Grid>
          <Grid item>{team2}</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

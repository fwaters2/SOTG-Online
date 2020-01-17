import React from 'react';
import { Grid, Icon } from '@material-ui/core';
import { Check, CheckBoxOutlineBlank } from '@material-ui/icons';

export default function Card_IncompleteMatch({ props }) {
  const { team1Submitted, team1, team2Submitted, team2 } = props;
  return (
    <Grid item>
      <Grid container style={{ marginLeft: '1em', alignItems: 'center' }} spacing={1}>
        <Grid item>
          <Icon>{team1Submitted ? <Check /> : <CheckBoxOutlineBlank />}</Icon>
        </Grid>
        <Grid item>{team1}</Grid>
      </Grid>
      <Grid container style={{ marginLeft: '1em', alignItems: 'center' }} spacing={1}>
        <Grid item>
          <Icon>{team2Submitted ? <Check /> : <CheckBoxOutlineBlank />}</Icon>
        </Grid>
        <Grid item>{team2}</Grid>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import { Card, Grid } from '@material-ui/core';
import CardCompleteMatch from './CardCompleteMatch';
import CardIncompleteMatch from './CardIncompleteMatch';

export default function MatchCard(props) {
  const { completed } = props;
  return (
    <Card style={{ margin: '.5em 1em', padding: '.5em 0', borderRadius: '8px' }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={completed ? { background: '#8FDE58' } : null}
      >
        {completed ? <CardCompleteMatch props={props} /> : <CardIncompleteMatch props={props} />}
      </Grid>
    </Card>
  );
}

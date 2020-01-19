import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function StyledTitle({ children }) {
  return (
    <div
      style={{
        padding: '0 0 2em 0',
        marginLeft: '2em',
        marginRight: '2em',
        marginBottom: 0,
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

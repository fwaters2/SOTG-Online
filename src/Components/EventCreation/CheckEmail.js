import React from 'react';
import { SvgIcon, Typography, Grid } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import PreloaderPeeps from '../../Assets/Loader/PreloaderPeeps';

export default function CheckEmail({ location }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={4}
      justify="center"
      style={{ height: '100%' }}
    >
      <Grid item>
        <Typography variant="h6" align="center">
          Check Email
        </Typography>
        <Typography variant="subtitle2" align="center">
          Click link in email to verify your account!
          <br />
          We can wait! :D
        </Typography>
      </Grid>

      <Grid item>
        <SvgIcon fontSize="large" style={{ color: '#E82178' }}>
          <Email />
        </SvgIcon>
      </Grid>
      <div style={{ position: 'fixed', zIndex: -1 }}>
        <PreloaderPeeps />
      </div>

      <Grid item>
        <Typography variant="body2" align="center">
          Sent to:
          <br /> <strong>{new URLSearchParams(location.search).get('email')}</strong>
          <br />
          Check junk mail folder!
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

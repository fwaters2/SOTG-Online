import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { ArrowBack, Check } from '@material-ui/icons';

export default function LastButtons({ handleSubmit, step, setStep }) {
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <Button fullWidth variant="contained" color="default" onClick={handleBack}>
          <ArrowBack />
        </Button>
      </Grid>
      <Grid item xs>
        <Button fullWidth variant="contained" color="secondary" onClick={handleSubmit}>
          <Check />
        </Button>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import { makeStyles, FormLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formLabel: {
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    fontSize: '10pt',
    display: 'inline-block',
    margin: '0 0 0.75em',
  },
}));
export default function StyledFormLabel({ children }) {
  const classes = useStyles();
  return <FormLabel className={classes.formLabel}>{children}</FormLabel>;
}

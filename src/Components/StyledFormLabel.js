import React from "react";
import { makeStyles, FormLabel } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  formLabel: {
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    fontSize: "10pt"
  }
}));
export default function StyledFormLabel({ children }) {
  const classes = useStyles();
  return <FormLabel className={classes.formLabel}>{children}</FormLabel>;
}

import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "1em 0",
    padding: ".5em",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    fontSize: "14pt"
  }
}));

export default function FirstButton({ action, children }) {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={action}
      className={classes.button}
    >
      {children}
    </Button>
  );
}

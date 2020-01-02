import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  DialogActions,
  Button
} from "@material-ui/core";

export default function ShareDialog({ open, onClose }) {
  const [copySuccess, setCopySuccess] = React.useState("Copy");
  const linkRef = React.useRef(null);

  function copyToClipboard(e) {
    linkRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    //e.target.focus();
    setCopySuccess("Copied!");
  }
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Share Event</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs>
            <input ref={linkRef} value="http://sotg.online/organizerdemo" />
          </Grid>
          <Grid item>
            <button onClick={copyToClipboard}>{copySuccess}</button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          variant="contained"
          onClick={onClose}
          color="secondary"
        >
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ConfirmationDialog({ open, onClose, slug }) {
  const [copySuccess, setCopySuccess] = React.useState("Copy");
  const linkRef = React.useRef(null);
  function copyToClipboard(e) {
    linkRef.current.select();
    document.execCommand("copy");
    setCopySuccess("Copied!");
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Event Created!</DialogTitle>
      <DialogContent>
        Share your event's link to players submitting spirit scores!
        <Grid container>
          <Grid item xs>
            <input ref={linkRef} value={"http://sotg.online/" + slug} />
          </Grid>
          <Grid item>
            <button onClick={copyToClipboard}>{copySuccess}</button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button component={Link} to="/">
          Dashboard
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import React from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogContent,
  DialogActions,
  DialogContentText
} from "@material-ui/core";
import Firebase from "../../../Firebase";

export default function DeleteDialog({ open, onClose, eventId, settingsInfo }) {
  const [name, setName] = React.useState("");
  const handleDelete = () => {
    Firebase.firestore()
      .collection("events")
      .doc(settingsInfo.id)
      .delete();
    onClose();
    //console.log("delete is firing");
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please re-type the event name to confirm!
        </DialogContentText>
        <TextField
          label="Event Name"
          placeholder={settingsInfo.name}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Back
        </Button>
        <Button
          color="secondary"
          onClick={handleDelete}
          disabled={name !== settingsInfo.name}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

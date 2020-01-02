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

export default function DeleteDialog({ open, onClose, eventId, deleteInfo }) {
  const [name, setName] = React.useState("");
  const handleDelete = () => {
    onClose();
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
          placeholder={deleteInfo.name}
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
          disabled={name !== deleteInfo.name}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

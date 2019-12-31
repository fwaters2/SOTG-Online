import React from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogContent,
  DialogActions
} from "@material-ui/core";

export default function DeleteDialog({ open, onClose, eventId }) {
  const handleDelete = () => {
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>DELETE EVENT</DialogTitle>
      <DialogContent>
        <TextField label="Event Name" />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Back
        </Button>
        <Button color="secondary" onClick={handleDelete}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

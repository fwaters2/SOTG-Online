import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ConfirmationDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Still in Development!</DialogTitle>
      <DialogContent>
        But Check out the <Link to="/organizerdemo">Organizer Demo</Link> to get
        the idea of how it will work
      </DialogContent>
    </Dialog>
  );
}

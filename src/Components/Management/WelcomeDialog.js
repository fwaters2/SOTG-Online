import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

export default function WelcomeDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>You Are Signed In!</DialogTitle>
    </Dialog>
  );
}

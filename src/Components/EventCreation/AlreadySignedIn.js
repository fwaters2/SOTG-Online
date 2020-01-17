import React from 'react';
import { Button, Typography } from '@material-ui/core';
import ConfirmationDialog from './ConfirmationDialog';

export default function AlreadySignedIn({ formResponses, createEvent }) {
  const [isConfirmDialogOpen, toggleConfirmDialog] = React.useState(false);
  const handleCreate = () => {
    toggleConfirmDialog(true);
    createEvent();
  };
  return (
    <div>
      <Typography variant="h6">Summary:</Typography>
      <Typography variant="body1">Name: {formResponses.eventName}</Typography>
      <Typography variant="body1">
        Teams ({formResponses.teams.length}): {formResponses.teams.join(', ')}
      </Typography>
      <Typography variant="body1">Event Link: http://sotg.online/{formResponses.slug}</Typography>
      {/* <Link to="/">
        <Button>Go Home</Button>
      </Link> */}
      <Button fullWidth variant="contained" color="primary" onClick={handleCreate}>
        Go Online!
      </Button>
      <ConfirmationDialog
        slug={formResponses.slug}
        open={isConfirmDialogOpen}
        onClose={() => toggleConfirmDialog(false)}
      />
    </div>
  );
}

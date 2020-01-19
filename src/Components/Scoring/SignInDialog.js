import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ButtonGroup,
  Button,
  TextField,
} from '@material-ui/core';

export default function SignInDialog(props) {
  const { isSignInDialogOpen, formResponses, setFormResponses, onClose } = props;
  return (
    <Dialog open={isSignInDialogOpen} onClose={onClose}>
      <DialogTitle>
        Would you like to be able to see any scores for submitted for your team?
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          variant="outlined"
          type="email"
          placeholder="Email"
          value={formResponses.submttedBy}
          onChange={e => setFormResponses({ ...formResponses, submittedBy: e.target.value })}
        />
        <DialogActions>
          <ButtonGroup>
            <Button color="secondary" onClick={onClose}>
              No Thanks
            </Button>
            <Button variant="contained" color="primary" onClick={onClose}>
              Submit Email
            </Button>
          </ButtonGroup>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

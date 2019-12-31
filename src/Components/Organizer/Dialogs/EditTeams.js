import React from "react";
import AddTeam from "../../EventCreation/AddTeam";
import { Dialog, Button, DialogContent } from "@material-ui/core";

export default function EditTeams({ open, onClose }) {
  const [formResponses, setFormResponses] = React.useState({
    teams: ["Team 1"]
  });

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogContent>
        <AddTeam
          formResponses={formResponses}
          setFormResponse={setFormResponses}
        />

        <Button fullWidth variant="contained" onClick={onClose}>
          Back
        </Button>
      </DialogContent>
    </Dialog>
  );
}

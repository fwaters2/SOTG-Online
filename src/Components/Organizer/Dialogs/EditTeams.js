import React from "react";
import AddTeam from "../../EventCreation/AddTeam";
import { Dialog, Button, DialogContent } from "@material-ui/core";

export default function EditTeams({ open, onClose, settingsInfo }) {
  const [formResponses, setFormResponses] = React.useState({ teams: [] });
  React.useState(() => {
    const unsubscribe = setFormResponses(settingsInfo);
    return () => unsubscribe;
  }, [settingsInfo]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onEntering={() => "on entering"}
      fullScreen
    >
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

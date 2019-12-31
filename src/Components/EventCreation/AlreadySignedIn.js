import React from "react";
import Firebase from "../../Firebase";
import ConfirmationDialog from "./ConfirmationDialog";
import { Button, Typography } from "@material-ui/core";

export default function AlreadySignedIn({ formResponses, email }) {
  const [isConfirmDialogOpen, toggleConfirmDialog] = React.useState(false);
  const handleCreate = () => {
    toggleConfirmDialog(true);
    // Firebase.firestore()
    //   .collection("events")
    //   .add({
    //     email: email,
    //     name: formResponses.eventName,
    //     teams: formResponses.teams,
    //     slug: formResponses.slug
    //   })
    //   .then(docRef => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(error => {
    //     console.error("Error adding document: ", error);
    //   });
  };
  return (
    <div>
      <Typography variant="h6">Summary:</Typography>
      <Typography variant="body1">Name: {formResponses.eventName}</Typography>
      <Typography variant="body1">
        Teams ({formResponses.teams.length}): {formResponses.teams.join(", ")}
      </Typography>
      <Typography variant="body1">
        Event Link: http://sotg.online/{formResponses.slug}
      </Typography>
      {/* <Link to="/">
        <Button>Go Home</Button>
      </Link> */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleCreate}
      >
        Go Online!
      </Button>
      <ConfirmationDialog
        open={isConfirmDialogOpen}
        onClose={() => toggleConfirmDialog(false)}
      />
    </div>
  );
}

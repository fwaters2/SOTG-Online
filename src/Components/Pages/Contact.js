import React from "react";
import StyledTextField from "../StyledTextField";
import {
  Button,
  Box,
  InputBase,
  FormControl,
  Dialog,
  DialogTitle
} from "@material-ui/core";
import StyledPaper from "../StyledPaper";
import Firebase from "../../Firebase";
import { Redirect } from "react-router-dom";

export default function Contact() {
  const [redirect, setRedirect] = React.useState(false);
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const [formResponses, setFormResponses] = React.useState({
    name: "",
    email: "",
    comment: ""
  });
  const handleSubmit = () => {
    toggleDialog(true);
    Firebase.collection("Contact").add({
      ...formResponses,
      timestamp: Firebase.firestore.FieldValue.serverTimestamp
    });
  };
  return redirect ? (
    <Redirect push to="/demo" />
  ) : (
    <StyledPaper title="Contact Form">
      <Dialog open={isDialogOpen} onClose={() => setRedirect(true)}>
        <DialogTitle>Thank you for your feedback!</DialogTitle>
      </Dialog>
      <Box pl={"2em"} pr={"2em"} mt={"-2em"}>
        <StyledTextField
          label="Name"
          autoFocus={true}
          stateKey="name"
          placeholder="Name"
          formResponses={formResponses}
          setFormResponses={setFormResponses}
        />
        <Box mt={"-.5em"}>
          <StyledTextField
            label="Email (if response desired)"
            stateKey="email"
            placeholder="Email"
            formResponses={formResponses}
            setFormResponses={setFormResponses}
          />
        </Box>
        <Box mt={"-2em"}>
          <FormControl>
            <InputBase
              multiline
              required
              rows="4"
              placeholder="Comment"
              value={formResponses.comment}
              onChange={e =>
                setFormResponses({ ...formResponses, comment: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Contact
        </Button>
      </Box>
    </StyledPaper>
  );
}

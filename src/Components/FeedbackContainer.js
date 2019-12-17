import React from "react";
import { Paper, TextField } from "@material-ui/core";

export default function FeedbackContainer({
  feedback,
  formResponses,
  setFormResponses
}) {
  return (
    <Paper elevation={0} style={{ borderRadius: "8px" }}>
      <TextField
        variant="filled"
        fullWidth
        multiline
        label="Optional Feedback"
        rows="3"
        rowsMax="4"
        value={formResponses[feedback]}
        onChange={e =>
          setFormResponses({ ...formResponses, [feedback]: e.target.value })
        }
      />
    </Paper>
  );
}

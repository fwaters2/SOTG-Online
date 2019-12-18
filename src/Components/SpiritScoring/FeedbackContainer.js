import React from "react";
import { Paper, TextField, FormControl, InputBase } from "@material-ui/core";

export default function FeedbackContainer({
  feedback,
  formResponses,
  setFormResponses
}) {
  return (
    <FormControl>
      <InputBase
        variant="filled"
        fullWidth
        multiline
        placeholder="Additional Feedback"
        rows="4"
        value={formResponses[feedback]}
        onChange={e =>
          setFormResponses({ ...formResponses, [feedback]: e.target.value })
        }
      />
    </FormControl>
  );
}

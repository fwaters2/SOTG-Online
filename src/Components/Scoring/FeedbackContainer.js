import React from 'react';
import { FormControl, InputBase } from '@material-ui/core';

export default function FeedbackContainer({
  feedback,
  formResponses,
  setFormResponses,
  currentLanguage,
}) {
  return (
    <FormControl>
      <InputBase
        variant="filled"
        fullWidth
        multiline
        placeholder={currentLanguage.general.additionalFeedback}
        rows="4"
        value={formResponses[feedback]}
        onChange={e => setFormResponses({ ...formResponses, [feedback]: e.target.value })}
      />
    </FormControl>
  );
}

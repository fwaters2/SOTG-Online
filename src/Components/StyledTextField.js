import React from "react";
import { Box, FormControl, InputBase } from "@material-ui/core";
import StyledFormLabel from "./StyledFormLabel";

export default function StyledTextField({
  label,
  autoFocus,
  stateKey,
  type,
  placeholder,
  formResponses,
  setFormResponses
}) {
  return (
    <Box mt={2} mb={2}>
      <StyledFormLabel>{label}</StyledFormLabel>
      <FormControl variant="outlined">
        <InputBase
          autoFocus={autoFocus}
          required
          style={{ padding: ".5em 1em" }}
          type={type}
          placeholder={placeholder}
          value={formResponses[stateKey]}
          onChange={e =>
            setFormResponses({ ...formResponses, [stateKey]: e.target.value })
          }
        />
      </FormControl>
    </Box>
  );
}

import React from "react";
import { makeStyles, Box, FormControl, InputBase } from "@material-ui/core";
import StyledFormLabel from "./StyledFormLabel";
const useStyles = makeStyles(theme => ({
  formControl: {
    background: "white",
    width: "100%",
    margin: "1em 0",
    padding: 0
  }
}));
export default function StyledTextField({
  label,
  stateKey,
  type,
  placeholder,
  formResponses,
  setFormResponses
}) {
  const classes = useStyles();
  return (
    <Box mt={2} mb={2}>
      <StyledFormLabel>{label}</StyledFormLabel>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputBase
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

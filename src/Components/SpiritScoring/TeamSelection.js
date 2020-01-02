import React from "react";
import { Box, Button } from "@material-ui/core";
import StyledSelect from "../StyledSelect";

export default function TeamSelection({
  formResponses,
  setFormResponses,
  teams,
  step,
  setStep
}) {
  return (
    <React.Fragment>
      <Box my={4}>
        <StyledSelect
          stateKey="myTeam"
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          label={"Your Team"}
          teams={teams}
        />
        <StyledSelect
          stateKey="opponent"
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          label={"Opponent Team"}
          teams={teams}
        />
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => setStep(step + 1)}
      >
        Begin
      </Button>
    </React.Fragment>
  );
}

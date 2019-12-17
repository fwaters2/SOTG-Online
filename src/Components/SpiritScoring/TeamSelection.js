import React from "react";
import { Box } from "@material-ui/core";
import StyledSelect from "../StyledSelect";
import FirstButton from "../Stepper/FirstButton";

export default function TeamSelection({
  formResponses,
  setFormResponses,
  teams,
  step,
  setStep
}) {
  return (
    <React.Fragment>
      <Box mt={8} mb={8}>
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

      <FirstButton action={() => setStep(step + 1)}>Begin</FirstButton>
    </React.Fragment>
  );
}

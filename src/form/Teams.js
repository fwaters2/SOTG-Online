import React from "react";
import {
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from "@material-ui/core";

//to-do import team options from current seasons teams
const teams = [
  "Big Dumps",
  "Disc Jockeys",
  "Galaxy",
  "Hakuna Matata",
  "Spirit Animals",
  "UP!",
  "Young Bloods"
];

export default function Teams({ state, data, text }) {
  const { formResponses, setFormResponses, step, setStep } = state;
  const { name } = data;
  const importedTeams = data.teams;
  function dropdowns(label, variable) {
    return (
      <Paper style={{ margin: "10px 0" }}>
        <FormControl
          variant="standard"
          className="dropdownlabel"
          style={{ width: "90%", margin: "10px" }}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            value={formResponses[variable]}
            onChange={e =>
              setFormResponses({ ...formResponses, [variable]: e.target.value })
            }
          >
            <MenuItem value="">
              <em>Choose</em>
            </MenuItem>
            {importedTeams
              ? importedTeams.map(team => (
                  <MenuItem key={team} value={team}>
                    {team}
                  </MenuItem>
                ))
              : teams.map(team => (
                  <MenuItem key={team} value={team}>
                    {team}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </Paper>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column", flexShrink: 1 }}>
        <div
          style={{ height: "30vh", marginBottom: "10px" }}
          //className="background-glow"
        >
          <div style={{ height: "70%", marginRight: "10%" }}>
            {/* <img height="100%" src={KULlogo} alt="Kul logo" /> */}
          </div>
        </div>
        <Typography variant="h4">{data ? name : text.general.title}</Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center"
          //width: "90vw"
        }}
      >
        {dropdowns(text.general.yourTeam, "myTeam")}
        {dropdowns(text.general.opponent, "opponent")}
      </div>

      <Button
        className="btn"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => setStep(step + 1)}
        disabled={formResponses.opponent === "" || formResponses.myTeam === ""}
      >
        {text.general.next}
      </Button>
    </div>
  );
}

import React from "react";
import {
  Chip,
  Box,
  FormControl,
  InputBase,
  makeStyles,
  Grid,
  IconButton
} from "@material-ui/core";
import StyledFormLabel from "../StyledFormLabel";
import { Add } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  formControl: {
    background: "white",
    width: "100%",
    margin: "1em 0",
    padding: 0
  }
}));

export default function AddTeam({ formResponses, setFormResponses }) {
  const classes = useStyles();
  const [newTeam, setNewTeam] = React.useState("");
  const handleAdd = e => {
    e.preventDefault();
    newTeam !== "" &&
      setFormResponses({
        ...formResponses,
        teams: [...formResponses.teams, newTeam].sort((b, a) => {
          if (a > b) {
            return -1;
          }
          if (b > a) {
            return 1;
          }
          return 0;
        })
      });
    setNewTeam("");
  };
  const handleDelete = team => {
    setFormResponses({
      ...formResponses,
      teams: formResponses.teams.filter(x => x !== team)
    });
  };
  return (
    <React.Fragment>
      <Box mt={2}>
        {console.log("formResponses inside AddTeam", formResponses)}
        <StyledFormLabel>Add Teams</StyledFormLabel>
        <form onSubmit={handleAdd}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Grid container>
              <Grid item xs>
                <InputBase
                  autoFocus
                  style={{ padding: ".5em 1em" }}
                  type="text"
                  value={newTeam}
                  onChange={e => setNewTeam(e.target.value)}
                  placeholder="Add Team"
                />
              </Grid>
              <Grid item>
                <IconButton style={{ color: "black" }} onClick={handleAdd}>
                  <Add />
                </IconButton>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </Box>
      <StyledFormLabel>
        Total Teams: {formResponses.teams.length}
      </StyledFormLabel>
      <br />
      {formResponses.teams.map(team => (
        <Chip
          key={team}
          style={{ margin: ".5em" }}
          label={team}
          onDelete={() => handleDelete(team)}
          color="primary"
        />
      ))}
    </React.Fragment>
  );
}

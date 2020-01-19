import React from 'react';
import { Box, FormControl, Select, MenuItem, InputBase } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles, withStyles } from '@material-ui/styles';
import StyledFormLabel from './StyledFormLabel';

const exampleTeams = [
  'Disc Jockeys',
  'Galaxy',
  'Hakuna Matata',
  'Big Dumps',
  'Young Bloods',
  'Spirit Animals',
  'UP!',
];

const MatusInput = withStyles(() => ({
  input: {
    padding: '0.5em',
    '&:focus': {
      background: 'none',
    },
  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  formControl: {
    background: 'white',
    margin: 0,
    padding: 0,
  },
}));

export default function StyledSelect({ stateKey, label, formResponses, setFormResponses, teams }) {
  const classes = useStyles();

  return (
    <Box my={2}>
      <StyledFormLabel>{label}</StyledFormLabel>
      <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <Select
          input={<MatusInput />}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={formResponses[stateKey]}
          IconComponent={ExpandMore}
          onChange={e => setFormResponses({ ...formResponses, [stateKey]: e.target.value })}
        >
          <MenuItem value="Select">
            <em>Select</em>
          </MenuItem>
          {teams
            ? teams.map(team => (
                <MenuItem key={team} value={team}>
                  {team}
                </MenuItem>
              ))
            : exampleTeams.map(team => (
                <MenuItem key={team} value={team}>
                  {team}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </Box>
  );
}

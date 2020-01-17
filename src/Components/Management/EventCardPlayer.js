import React from 'react';
import { Paper, IconButton, Menu, MenuItem, ListItem, Grid, Typography } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

export default function EventCard_Player(props) {
  const {
    x,
    anchorEl,
    handleMenuCopy,
    handleMenuTeams,
    handleMenuDelete,
    spiritScores,
    handleSettings,
    setAnchorEl,
    handleClick,
    handlePlayerClick,
    email,
  } = props;
  return (
    <Paper
      style={{
        margin: '1em',
        borderRadius: '8px',
      }}
      key={x.eventName}
    >
      <div
        style={{
          position: 'absolute',
          right: '1.5em',
          marginTop: '0.3em',
          zIndex: 10,
        }}
      >
        <IconButton size="small" onClick={handleSettings(x)}>
          <Settings />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={handleMenuCopy}>Copy Link</MenuItem>
          <MenuItem onClick={handleMenuTeams}>Update Teams</MenuItem>
          <MenuItem onClick={handleMenuDelete}>Delete</MenuItem>
        </Menu>
      </div>
      <ListItem
        button
        divider
        onClick={() => (x.role === 'Organizer' ? handleClick(x) : handlePlayerClick(x))}
      >
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs>
              <Typography>{x.eventName}</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs>
              <Typography>({x.role})</Typography>
            </Grid>
            <Grid item>
              <Typography>
                {x.role === 'Organizer'
                  ? `Scores: ${
                      spiritScores.filter(score => score.eventName === x.eventName).length
                    }`
                  : `Submissions: ${
                      spiritScores.filter(
                        score => score.eventName === x.eventName && score.submittedBy === email
                      ).length
                    }`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </Paper>
  );
}

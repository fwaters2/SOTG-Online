import React from 'react';
import { Grid, Typography, Box, IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import RankingIcon from './RankingIcon';

export default function ScoreSummary({
  index,
  team,
  total,
  submissions,
  toggleExpanded,
  isExpanded,
}) {
  return (
    <Grid container spacing={1} alignItems="center" direction="row">
      <Grid item>
        <RankingIcon>{index}</RankingIcon>
      </Grid>
      <Grid item xs>
        {team}
      </Grid>
      <Grid item>
        <Box
          style={{
            minWidth: '2.2em',
            minHeight: '2.2em',
            height: '100%',
            border: '1px solid black',
            padding: '0 .2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            color: 'black',
            boxShadow: '1px 1px 1px black',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {total === -1 ? '--' : total}
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">{`(${submissions})`}</Typography>
          </Grid>
          {submissions === 0 ? null : (
            <Grid item>
              <IconButton style={{ padding: 0 }} onClick={() => toggleExpanded(!isExpanded)}>
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

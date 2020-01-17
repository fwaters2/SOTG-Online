import React from 'react';
import { Paper, Grid, Box, Typography, Tooltip, IconButton } from '@material-ui/core';

export default function BoxScores({ subscores, type }) {
  const myGreen = '143,222,88,';
  // const myGreen = "#8FDE58";143,222,88
  // const myPurple = "#E82178";
  const myPurple = '232,33,120,';
  const tooltips = [
    'Rules Knowledge and Use',
    'Fouls',
    'Attitude',
    'Fairmindedness',
    'Communication',
  ];

  return (
    <Paper style={{ borderRadius: '8px', width: '100%' }} elevation={1}>
      <Grid container>
        {subscores.map((subscore, index) => {
          const fillColor =
            subscore === -1
              ? null
              : subscore > 2
              ? `rgba(${myGreen}${(subscore - 2) / 2})`
              : subscore < 2
              ? `rgba(${myPurple}${(2 - subscore) / 2})`
              : null;
          const buttonGroupBorders =
            index === 0 ? '8px 0 0 8px' : index + 1 === subscores.length ? '0 8px 8px 0' : null;

          return (
            <Grid item xs key={index}>
              <Box
                style={{
                  backgroundColor: fillColor,
                  borderRadius: buttonGroupBorders,
                  borderRight: index + 1 !== subscores.length && '1px lightgray solid',
                }}
                paddingY={type === 'main' ? '.5em' : '.1em'}
                // minWidth="1.5em"
                textAlign="center"
              >
                <Tooltip title="test">
                  <Typography variant="caption" style={{ fontWeight: 'bold' }}>
                    {subscore === -1 ? '--' : subscore}
                  </Typography>
                </Tooltip>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

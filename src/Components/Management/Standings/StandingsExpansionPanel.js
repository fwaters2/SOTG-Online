import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
} from '@material-ui/core';
import ScoreSummary from './ScoreSummary';
import ScoreExpanded from './ScoreExpanded';

export default function StandingsExpansionPanel({ data, index, handleClick }) {
  const [isExpanded, toggleExpanded] = React.useState(false);

  return (
    <ExpansionPanel
      key={data.team}
      expanded={isExpanded}
      style={
        isExpanded || data.individualGames.length === 0
          ? { borderRadius: '8px', margin: '.5em 1em' }
          : {
              borderRadius: '8px 8px 0px 0px',
              margin: '.5em 1em',
            }
      }
    >
      <ExpansionPanelSummary style={{ padding: '0 .5em 0 1em' }}>
        <ScoreSummary
          index={index}
          team={data.team}
          subscores={data.subscores}
          total={data.total}
          submissions={data.individualGames.length}
          toggleExpanded={toggleExpanded}
          isExpanded={isExpanded}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container direction="column">
          {data.individualGames.map((data, index) => (
            <ScoreExpanded
              key={index}
              index={index}
              opponent={data.opponent}
              subscores={data.subscores}
              total={data.total}
              feedback={data.feedback}
              handleClick={handleClick}
            />
          ))}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
} from '@material-ui/core';
import SubmissionSummary from './SubmissionSummary';
import SubmissionExpanded from './SubmissionExpanded';

export default function SubmissionExpansionPanel({ data, index, handleClick }) {
  const [isExpanded, toggleExpanded] = React.useState(false);

  return (
    <ExpansionPanel
      key={data.team}
      expanded={isExpanded}
      style={{ borderRadius: '8px', margin: '.5em 0' }}
    >
      <ExpansionPanelSummary style={{ padding: '0 .5em 0 1em' }}>
        <SubmissionSummary
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
            <SubmissionExpanded
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

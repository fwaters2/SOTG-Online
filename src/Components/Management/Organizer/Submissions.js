import React from 'react';
import { Box } from '@material-ui/core';
import PlayerTabs from './Submissions/PlayerTabs';
import Submitted from './Submissions/Submitted';
import Received from './Submissions/Received';

export default function Submissions({ scores, reciprocatedScores, email }) {
  const demoSubmissions = scores.map(x => ({
    team: x.opponent,
    total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
    individualGames: [
      {
        subscores: [x.rules, x.fouls, x.fairness, x.attitude, x.communication],
        feedback: x.feedback,
      },
    ],
  }));
  const playerSubmissions = scores.map(x => ({
    team: x.opponent,
    total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
    individualGames: [
      {
        subscores: [x.rules, x.fouls, x.fairness, x.attitude, x.communication],
        feedback: x,
      },
    ],
  }));
  const demoReceived = reciprocatedScores.map(x => ({
    team: x.myTeam,
    total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
    individualGames: [
      {
        subscores: [x.rules, x.fouls, x.fairness, x.attitude, x.communication],
        feedback: x.feedback,
      },
    ],
  }));
  const playerReceived = reciprocatedScores.map(x => ({
    team: x.myTeam,
    total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
    individualGames: [
      {
        subscores: [x.rules, x.fouls, x.fairness, x.attitude, x.communication],
        feedback: x,
      },
    ],
  }));
  const [currentTab, setCurrentTab] = React.useState(0);
  const submissions = email ? playerSubmissions : demoSubmissions;
  const received = email ? playerReceived : demoReceived;

  return (
    <div>
      <div style={{ background: '#0038ae', padding: '.5em 0' }}>
        <PlayerTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 0 ? (
          <Box ml="1em" mr="1em">
            <Submitted submissions={submissions} />
          </Box>
        ) : (
          <Box ml="1em" mr="1em">
            <Received reciprocatedScores={received} />
          </Box>
        )}
      </div>
    </div>
  );
}

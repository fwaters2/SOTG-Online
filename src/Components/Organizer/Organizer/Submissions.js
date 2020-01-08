import React from "react";
import { Box } from "@material-ui/core";
import PlayerTabs from "../../Player/PlayerTabs";
import Submitted from "./Submissions/Submitted";
import Received from "./Submissions/Received";

export default function Submissions({ scores, reciprocatedScores }) {
  const submissions = scores.map(x => ({
    team: x.opponent,
    total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
    individualGames: [
      {
        subscores: [x.rules, x.fouls, x.fairness, x.attitude, x.communication],
        feedback: x.feedback
      }
    ]
  }));
  const received = reciprocatedScores.map(x => ({
    team: x.myTeam,
    total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
    individualGames: [
      {
        subscores: [x.rules, x.fouls, x.fairness, x.attitude, x.communication],
        feedback: x.feedback
      }
    ]
  }));
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div>
      <div style={{ background: "#0038ae", padding: ".5em 0" }}>
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

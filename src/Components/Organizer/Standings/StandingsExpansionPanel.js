import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core";
import ScoreSummary from "./ScoreSummary";
import ScoreExpanded from "./ScoreExpanded";
export default function StandingsExpansionPanel({ data, index, handleClick }) {
  const [isExpanded, toggleExpanded] = React.useState(false);
  const myBlue = "#0C61E1";
  return (
    <ExpansionPanel
      key={data.team}
      expanded={isExpanded}
      style={{
        background: myBlue,
        color: "white",
        borderRadius: "8px",
        margin: "1em 0"
      }}
    >
      {console.log("data", data)}
      <ExpansionPanelSummary>
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

import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core";
import ScoreSummary from "../Organizer/Standings/ScoreSummary";
import ScoreExpanded from "../Organizer/Standings/ScoreExpanded";

export default function SubmissionExpansionPanel({ data, index, handleClick }) {
  const [isExpanded, toggleExpanded] = React.useState(false);
  //const myBlue = "#0C61E1";
  return (
    <ExpansionPanel
      key={data.team}
      expanded={isExpanded}
      style={
        isExpanded || data.individualGames.length === 0
          ? { borderRadius: "8px", margin: ".5em 1em" }
          : {
              //background: myBlue,
              //color: "white",
              borderRadius: "8px 8px 0px 0px",
              margin: ".5em 1em"
            }
      }
    >
      <ExpansionPanelSummary style={{ padding: "0 .5em 0 1em" }}>
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

import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import builder from "./builder";
import StandingsExpansionPanel from "./StandingsExpansionPanel";
import OrganizerView from "../Organizer/OrganizerView";
import MatchCard from "../Organizer/Matches/MatchCard";

export default function Standings({ eventInfo, scores, matches }) {
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const [currentFeedback, setCurrentFeedback] = React.useState("");
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleClick = x => () => {
    setCurrentFeedback(x);
    toggleDialog(true);
  };

  return (
    <div>
      <div style={{ background: "#0038ae", padding: ".5em 0" }}>
        <OrganizerView currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 0
          ? builder(eventInfo, scores).map((data, index) => (
              <StandingsExpansionPanel
                key={index}
                data={data}
                index={index}
                handleClick={handleClick}
              />
            ))
          : matches.map((x, index) => (
              <MatchCard
                key={index}
                completed={x.completed}
                team1={x.team1}
                team1Submitted={x.team1Submitted}
                team2={x.team2}
                team2Submitted={x.team2Submitted}
              />
            ))}
      </div>
      <Dialog open={isDialogOpen} onClose={() => toggleDialog(false)}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>{currentFeedback}</DialogContent>
      </Dialog>
    </div>
  );
}

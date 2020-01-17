import React from "react";
import OrganizerView from "../OrganizerView";

const initialState = [
  {
    id: 1,
    eventName: "Demo Tourney",
    team1: "Huck Buddies",
    team1Submitted: true,
    team1scoreid: "bigdumps1",
    team2: "SanMa",
    team2Submitted: false,
    team2scoreid: null,
    completed: false
  },
  {
    id: 2,
    eventName: "Demo Tourney",
    team1: "Galaxy",
    team1Submitted: true,
    team2: "Kaohsiung Love",
    team2Submitted: false,
    completed: false
  }
];

export default function DemoMatches(props) {
  const [matches, setMatches] = React.useState(initialState);
  return <OrganizerView props={...props, matches, setMatches} />;
}

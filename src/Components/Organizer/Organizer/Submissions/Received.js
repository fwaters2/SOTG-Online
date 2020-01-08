import React from "react";
import SubmissionExpansionPanel from "./SubmissionExpansionPanel";

export default function Received({ reciprocatedScores }) {
  return (
    <div>
      {reciprocatedScores.map(x => (
        <SubmissionExpansionPanel
          data={x}
          index={0}
          handleClick={() => alert("clicked")}
        />
      ))}
    </div>
  );
}

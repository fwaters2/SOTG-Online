import React from "react";
import SubmissionExpansionPanel from "./SubmissionExpansionPanel";
export default function Submitted({ submissions }) {
  return (
    <div>
      {submissions.map(x => (
        <SubmissionExpansionPanel
          data={x}
          index={0}
          handleClick={() => alert("clicked")}
        />
      ))}
    </div>
  );
}

import React from 'react';
import SubmissionExpansionPanel from './SubmissionExpansionPanel';

export default function Received({ reciprocatedScores }) {
  return (
    <div>
      {reciprocatedScores.map((x, index) => (
        <SubmissionExpansionPanel
          key={index}
          data={x}
          index={0}
          handleClick={() => alert('clicked')}
        />
      ))}
    </div>
  );
}

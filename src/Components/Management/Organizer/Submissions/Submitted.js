import React from 'react';
import SubmissionExpansionPanel from './SubmissionExpansionPanel';

export default function Submitted({ submissions }) {
  return (
    <div>
      {submissions.map(x => (
        <SubmissionExpansionPanel key={x} data={x} index={0} handleClick={() => alert('clicked')} />
      ))}
    </div>
  );
}

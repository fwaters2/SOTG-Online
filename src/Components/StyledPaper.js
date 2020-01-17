import React from 'react';
import { Paper } from '@material-ui/core';

const myBlue = '#0C61E1';

export default function StyledPaper({ children }) {
  return (
    <Paper
      style={{
        color: 'white',
        backgroundColor: myBlue,
        borderRadius: '12px',
        marginBottom: '1em',
        padding: '2em 0',
      }}
    >
      {children}
    </Paper>
  );
}

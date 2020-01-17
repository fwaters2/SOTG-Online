import React from 'react';
import { List, ListItem, Paper, ListItemText, Typography, Box } from '@material-ui/core';
import StyledFormLabel from '../StyledFormLabel';
import FeedbackContainer from './FeedbackContainer';
import FeedbackSummary from '../FeedbackSummary';

const categories = ['rules', 'fouls', 'fairness', 'attitude', 'communication'];
export default function Summary({ formResponses, setFormResponses, currentLanguage }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          margin: '2em 0',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <StyledFormLabel>{formResponses.opponent}</StyledFormLabel>

        <Paper
          style={{
            margin: '1em -2em 0em',
            borderRadius: 0,
          }}
        >
          <List dense>
            {categories.map((x, y) => (
              <ListItem
                style={{ padding: '4px 2em' }}
                key={x}
                divider={y === categories.length - 1}
              >
                <ListItemText primary={currentLanguage[categories[y]].title} />
                <Typography variant="h6">{formResponses[x]}</Typography>
              </ListItem>
            ))}

            <ListItem dense={false} style={{ padding: '4px 2em' }}>
              <ListItemText primary="Total" />
              <Typography variant="h4" color="secondary">
                {categories.map(x => formResponses[x]).reduce((x, y) => x + y)}
              </Typography>
            </ListItem>
          </List>
        </Paper>
      </div>
      <FeedbackContainer
        feedback="feedback"
        formResponses={formResponses}
        setFormResponses={setFormResponses}
        currentLanguage={currentLanguage}
      />

      <div
        style={{
          background: '#0038ae',
          margin: '5px -2em 20px',
          boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.1)',
        }}
      >
        <Box m="1em 2em">
          <FeedbackSummary currentLanguage={currentLanguage} formResponses={formResponses} />
        </Box>
      </div>
    </div>
  );
}

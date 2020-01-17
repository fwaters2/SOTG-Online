import React from 'react';
import { Typography } from '@material-ui/core';
import '../Assets/Lang/enSpirit2019.json';

const currentLanguage = require('../Assets/Lang/enSpirit2019.json');

export default function FeedbackSummary(props) {
  const { formResponses } = props;

  const categories = ['rules', 'fouls', 'fairness', 'attitude', 'communication'];
  return categories
    .map(cat => ({
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      state: `${cat}Examples`,
      categoryState: cat,
    }))
    .map((category, index) => (
      <Typography key={index} variant="body2" style={{ margin: '.5em 0' }}>
        {`${category.name}: ${[
          formResponses[`${category.categoryState}Feedback`],
          ...formResponses[category.state].map(
            example =>
              currentLanguage[example.category].examples[example.categoryScore][example.index]
          ),
        ].join(' ')}`}
      </Typography>
    ));
}

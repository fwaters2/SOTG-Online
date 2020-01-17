import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const myBlue = '#0C61E1';
const myGreen = '#8FDE58';
// const myPurple = "#E82178";
const useQontoStepIconStyles = makeStyles({
  root: {
    color: myBlue,
  },
  active: {
    color: 'white',
  },
  circle: {
    width: 8,
    height: 8,
    border: '2px solid white',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    position: 'relative',
    zIndex: 10,
  },
  circleCompleted: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    color: myGreen,
    zIndex: 1,
    fontSize: 18,
  },
});

export default function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <div className={classes.circleCompleted} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const BLUE = "#0C61E1";
const GREEN = "#8FDE58";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: BLUE,
  },
  active: {
    color: "white",
  },
  circle: {
    width: 8,
    height: 8,
    border: "2px solid white",
    borderRadius: "50%",
    backgroundColor: "currentColor",
    position: "relative",
    zIndex: 10,
  },
  circleCompleted: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: "currentColor",
    color: GREEN,
    zIndex: 1,
    fontSize: 18,
  },
});

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={classes.circleCompleted} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

export default QontoStepIcon;

import React from "react";
import {
  SvgIcon,
  List,
  ButtonGroup,
  Button,
  Tabs,
  Tab,
  makeStyles
} from "@material-ui/core";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Whatshot
} from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  tabs: { background: "white", color: "black" },
  tab: { minWidth: 0, padding: "1em", fontWeight: "bold" }
}));
export default function NumberScore({
  formResponses,
  setFormResponses,
  tempScore,
  stateKey,
  examplesTab,
  setExamplesTab
}) {
  const classes = useStyles();
  const handleClick = score => {
    setFormResponses({
      ...formResponses,
      [stateKey]: score
    });
    setExamplesTab(score);
  };
  return (
    <div
      style={{
        margin: "1em 0 0",
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <List
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <SvgIcon>
          <SentimentVeryDissatisfied />
        </SvgIcon>
        <SvgIcon>
          <SentimentDissatisfied />
        </SvgIcon>
        <SvgIcon>
          <SentimentSatisfied />
        </SvgIcon>
        <SvgIcon>
          <SentimentVerySatisfied />
        </SvgIcon>
        <SvgIcon>
          <Whatshot />
        </SvgIcon>
      </List>
      <Tabs
        value={examplesTab}
        className={classes.tabs}
        variant="fullWidth"
        style={{ borderRadius: "8px" }}
        indicatorColor="secondary"
      >
        {[0, 1, 2, 3, 4].map(x => (
          <Tab
            className={classes.tab}
            label={x}
            key={x}
            style={
              tempScore === x
                ? { background: "#8FDE58" }
                : x <= 3
                ? { borderRight: "1px solid darkgrey" }
                : null
            }
            selected={tempScore === x}
            onClick={() => handleClick(x)}
          />
        ))}
      </Tabs>
    </div>
  );
}

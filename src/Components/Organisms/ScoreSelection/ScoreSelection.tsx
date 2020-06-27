import React from "react";
import { List, SvgIcon, Tabs, Tab } from "@material-ui/core";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Whatshot,
} from "@material-ui/icons";
import ThemeContext from "../../themes/default";

interface Props {
  currentScore: number;
  updateCurrentScore: (x: number) => void;
  examplesTab: number;
}

const Wrapper = (props: any) => (
  <div
    {...props}
    style={{
      margin: "1em 0",
      flex: 1,
      display: "flex",
      flexDirection: "column",
    }}
  />
);
const icons = [
  <SentimentVeryDissatisfied key={0} />,
  <SentimentDissatisfied key={1} />,
  <SentimentSatisfied key={2} />,
  <SentimentVerySatisfied key={3} />,
  <Whatshot key={4} />,
];

const ScoreSelection = ({
  currentScore,
  updateCurrentScore,
  examplesTab,
  ...props
}: Props) => {
  const theme = React.useContext(ThemeContext);
  const { palette } = theme;
  const defaultTabStyle = {
    minWidth: 0,
    padding: "1em",
    fontWeight: "bold" as "bold",
  };
  const tabStyle = (x: number) =>
    currentScore === x
      ? {
          background: "#8FDE58",
          ...defaultTabStyle,
        }
      : x <= 3
      ? {
          borderRight: "1px solid darkgrey",
          ...defaultTabStyle,
        }
      : defaultTabStyle;

  return (
    <Wrapper {...props}>
      <List
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {icons.map((icon, index) => (
          <SvgIcon
            key={index}
            style={index === currentScore ? { color: palette.secondary } : {}}
          >
            {icon}
          </SvgIcon>
        ))}
      </List>
      <Tabs
        value={examplesTab}
        variant="fullWidth"
        style={{ borderRadius: "8px", background: "white", color: "black" }}
        indicatorColor="secondary"
      >
        {[0, 1, 2, 3, 4].map((x) => (
          <Tab
            label={x}
            key={x}
            style={tabStyle(x)}
            selected={currentScore === x}
            onClick={() => updateCurrentScore(x)}
          />
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default ScoreSelection;

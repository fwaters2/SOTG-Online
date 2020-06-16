import React from "react";
import { List, SvgIcon, Tabs, Tab } from "@material-ui/core";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Whatshot,
} from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";

interface Props {
  id?: string;
  tempScore?: any;
  examplesTab?: any;
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

const ScoreSelection = ({ tempScore, examplesTab, ...props }: Props) => {
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
            style={index === tempScore ? { color: GREEN } : {}}
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
            style={
              tempScore === x
                ? {
                    background: "#8FDE58",
                    minWidth: 0,
                    padding: "1em",
                    fontWeight: "bold",
                  }
                : x <= 3
                ? {
                    borderRight: "1px solid darkgrey",
                    minWidth: 0,
                    padding: "1em",
                    fontWeight: "bold",
                  }
                : { minWidth: 0, padding: "1em", fontWeight: "bold" }
            }
            selected={tempScore === x}
            onClick={() => alert("changed the button")}
          />
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default ScoreSelection;

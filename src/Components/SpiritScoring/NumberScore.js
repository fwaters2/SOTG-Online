import React from "react";
import { SvgIcon, List, ButtonGroup, Button } from "@material-ui/core";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Whatshot
} from "@material-ui/icons";

export default function NumberScore({
  formResponses,
  setFormResponses,
  tempScore,
  stateKey
}) {
  return (
    <div
      style={{
        margin: "2em 0",
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
      <ButtonGroup variant="contained" fullWidth>
        {[0, 1, 2, 3, 4].map(x => (
          <Button
            key={x}
            style={
              tempScore === x
                ? { background: "#8FDE58", margin: "0" }
                : { margin: "0" }
            }
            selected={tempScore === x}
            onClick={() =>
              setFormResponses({
                ...formResponses,
                [stateKey]: x
              })
            }
          >
            {x}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

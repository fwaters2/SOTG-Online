import React from "react";
import {
  ButtonGroup,
  Button,
  List,
  ListItem,
  //SvgIcon,
  ListItemText,
  Typography,
  ListItemIcon,
  Paper,
  TextField
} from "@material-ui/core";
// import {
//   SentimentDissatisfied,
//   SentimentSatisfied,
//   Whatshot,
//   SentimentVeryDissatisfied,
//   SentimentVerySatisfied,
//   ArrowRight
// } from "@material-ui/icons";

export default function Category({ state, textGen, categories }) {
  const { step, setStep, formResponses, setFormResponses } = state;
  const text = textGen[categories[step - 2]];
  const { title, examples } = text;
  const tempScore = formResponses[categories[step - 2]];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <div
        style={{
          margin: "3vh 0",
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h1 style={{ marginBottom: "10vh" }}>{title}</h1>
        <List
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          {/* <SvgIcon>
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
          </SvgIcon> */}
        </List>
        <ButtonGroup variant="contained" fullWidth>
          {[0, 1, 2, 3, 4].map(x => (
            <Button
              key={x}
              name={title}
              style={tempScore === x ? { background: "#DF3E40" } : null}
              selected={tempScore === x}
              onClick={() =>
                setFormResponses({
                  ...formResponses,
                  [categories[step - 2]]: x
                })
              }
            >
              {x}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <Typography variant="h6">Examples:</Typography>
      <div
        style={{
          background: "#50546f",
          margin: "2px 0 10px 0",
          boxShadow: "inset 5px 5px 5px black",
          flex: 1,
          maxHeight: "35vh",
          overflow: "auto"
        }}
      >
        <List dense>
          {examples[tempScore].map(x => (
            <ListItem key={x} divider={examples[tempScore].length !== 1}>
              <ListItemIcon style={{ color: "white" }}>
                {/* <ArrowRight /> */}
              </ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          ))}
        </List>
      </div>
      <Paper>
        <TextField
          variant="filled"
          fullWidth
          multiline
          label="Optional Feedback"
          rowsMax="4"
          value={formResponses[categories[step - 2] + "Feedback"]}
          onChange={e =>
            setFormResponses({
              ...formResponses,
              [categories[step - 2] + "Feedback"]: e.target.value
            })
          }
        />
      </Paper>
      <ButtonGroup variant="contained" fullWidth style={{ marginTop: "10px" }}>
        <Button className="btn" onClick={() => setStep(step - 1)}>
          {textGen.general.back}
        </Button>
        <Button className="btn" onClick={() => setStep(step + 1)}>
          {textGen.general.next}
        </Button>
      </ButtonGroup>
    </div>
  );
}

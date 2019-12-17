import React from "react";
import {
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListItemText,
  SvgIcon
} from "@material-ui/core";
import {
  SentimentDissatisfied,
  SentimentSatisfied,
  Whatshot,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied
} from "@material-ui/icons";
import EnglishText from "../../Assets/Lang/enSpirit.json";
import StyledFormLabel from "../StyledFormLabel.js";
import FeedbackContainer from "../FeedbackContainer.js";
import StepButtonGroup from "../Stepper/StepButtonGroup.js";
const spiritTexts = { en: EnglishText };
const lang = "en";
const SpiritText = spiritTexts[lang];
const categories = Object.keys(SpiritText).filter(x => x !== "general");

export default function Category({
  step,
  setStep,
  formResponses,
  setFormResponses
}) {
  const textGen = SpiritText;
  const currentStep = step - 1;
  const text = textGen[categories[currentStep]];
  const { title, examples } = text;
  const tempScore = formResponses[categories[currentStep]];

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
              name={title}
              style={tempScore === x ? { background: "#8FDE58" } : null}
              selected={tempScore === x}
              onClick={() =>
                setFormResponses({
                  ...formResponses,
                  [categories[currentStep]]: x
                })
              }
            >
              {x}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <StyledFormLabel>Examples:</StyledFormLabel>
      <div
        style={{
          background: "#0038ae",
          margin: "5px -2em 20px",
          boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.1)",
          //flex: 1,
          height: "30vh",
          overflow: "auto"
          // borderRadius: "8px"
        }}
      >
        <List dense>
          {examples[tempScore].map(x => (
            <ListItem
              style={{ paddingLeft: "0", paddingRight: "0" }}
              key={x}
              divider={examples[tempScore].length !== 1}
            >
              {/* <ListItemIcon style={{ color: "white" }}>
                {/* <ArrowRight /> 
              </ListItemIcon> */}
              <ListItemText style={{ padding: "0 2em" }} primary={x} />
            </ListItem>
          ))}
        </List>
      </div>
      <FeedbackContainer
        feedback={formResponses[categories[currentStep] + "Feedback"]}
        formResponses={formResponses}
        setFormResponses={setFormResponses}
      />
      <StepButtonGroup step={step} setStep={setStep} />
    </div>
  );
}

import React from "react";
import {
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  TextField,
  Divider
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
import FeedbackContainer from "./FeedbackContainer.js";
import StepButtonGroup from "../Stepper/StepButtonGroup.js";
import ListCheckBox from "./ListCheckBox.js";
import NumberScore from "./NumberScore.js";
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
      <NumberScore
        formResponses={formResponses}
        setFormResponses={setFormResponses}
        tempScore={tempScore}
        stateKey={categories[currentStep]}
      />

      <StyledFormLabel>Examples:</StyledFormLabel>
      <div
        style={{
          background: "#0038ae",
          margin: "5px -2em 0px",
          boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)",
          height: "30vh",
          overflow: "auto"
        }}
      >
        <List dense>
          {examples[tempScore].map(x => (
            <React.Fragment key={x}>
              <ListCheckBox
                examples={categories[currentStep] + "Examples"}
                formResponses={formResponses}
                setFormResponses={setFormResponses}
                example={x}
              />

              {examples[tempScore].length !== 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </List>
      </div>
      <FeedbackContainer
        feedback={categories[currentStep] + "Feedback"}
        formResponses={formResponses}
        setFormResponses={setFormResponses}
      />
      <StepButtonGroup step={step} setStep={setStep} />
    </div>
  );
}

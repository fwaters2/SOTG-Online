import React from "react";
import { List, Grid, IconButton } from "@material-ui/core";
import { Language } from "@material-ui/icons";
import StyledFormLabel from "../StyledFormLabel.js";
import FeedbackContainer from "./FeedbackContainer.js";
import StepButtonGroup from "../Stepper/StepButtonGroup.js";
import ListCheckBox from "./ListCheckBox.js";
import NumberScore from "./NumberScore.js";
import LangDialog from "./LangDialog.js";
import { SnackbarProvider, useSnackbar } from "notistack";

export default function Category({
  step,
  setStep,
  formResponses,
  setFormResponses,
  currentLanguage,
  setLang
}) {
  const [isLangSelectOpen, toggleLangSelect] = React.useState(false);
  const categories = Object.keys(currentLanguage).filter(x => x !== "general");
  const currentStep = step - 1;
  const text = currentLanguage[categories[currentStep]];
  const { examples } = text;
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
      <Grid container alignItems="center">
        <Grid item xs>
          <StyledFormLabel>{currentLanguage.general.feedback}:</StyledFormLabel>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => toggleLangSelect(!isLangSelectOpen)}
            style={{
              color: "#0038ae",

              padding: 0
            }}
            size="small"
          >
            <Language />
          </IconButton>
        </Grid>
      </Grid>
      <LangDialog
        open={isLangSelectOpen}
        onClose={() => toggleLangSelect(false)}
        setLang={setLang}
        currentLanguage={currentLanguage}
      />
      <div
        style={{
          //background: "#0038ae",
          margin: "0px -2em"
          //boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)"
          //height: "30vh",
          //overflow: "auto"
        }}
      >
        <List dense>
          {examples[tempScore].map((x, index) => (
            <React.Fragment key={x}>
              <SnackbarProvider maxSnack={3}>
                <ListCheckBox
                  examples={categories[currentStep] + "Examples"}
                  formResponses={formResponses}
                  setFormResponses={setFormResponses}
                  example={x}
                  isLastListItem={examples[tempScore].length === index + 1}
                  //For storing of the example
                  category={categories[currentStep]}
                  categoryScore={tempScore}
                  index={index}
                />
              </SnackbarProvider>
            </React.Fragment>
          ))}
        </List>
      </div>
      <FeedbackContainer
        feedback={categories[currentStep] + "Feedback"}
        formResponses={formResponses}
        setFormResponses={setFormResponses}
        currentLanguage={currentLanguage}
      />
      <StepButtonGroup
        step={step}
        setStep={setStep}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

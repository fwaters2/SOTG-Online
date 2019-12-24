import React from "react";
import {
  List,
  Grid,
  Button,
  Dialog,
  Slide,
  DialogContent,
  TextField,
  Box,
  Typography
} from "@material-ui/core";
import { PostAdd, Check } from "@material-ui/icons";
import StyledFormLabel from "../StyledFormLabel.js";
import StepButtonGroup from "../Stepper/StepButtonGroup.js";
import ListCheckBox from "./ListCheckBox.js";
import NumberScore from "./NumberScore.js";
import { SnackbarProvider } from "notistack";
import SwipeableViews from "react-swipeable-views";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Category({
  step,
  setStep,
  formResponses,
  setFormResponses,
  currentLanguage
}) {
  const [isDialogOpen, toggleDialog] = React.useState(false);

  const categories = Object.keys(currentLanguage).filter(x => x !== "general");
  const currentStep = step - 1;
  const text = currentLanguage[categories[currentStep]];
  const { examples } = text;
  const tempScore = formResponses[categories[currentStep]];
  const [examplesTab, setExamplesTab] = React.useState(2);

  const handleOpen = () => {
    console.log("Open");
    toggleDialog(true);
  };
  const handleClose = () => {
    console.log("Close");
    toggleDialog(false);
  };
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
        examplesTab={examplesTab}
        setExamplesTab={setExamplesTab}
      />

      {/* <LangDialog
        open={isLangSelectOpen}
        onClose={() => toggleLangSelect(false)}
        setLang={setLang}
        currentLanguage={currentLanguage}
      /> */}
      <Box mt=".5em" mb="0.5em">
        {/* <Typography align="right" style={{ fontSize: "10px" }}>
          Swipe for more examples
        </Typography> */}

        <Grid container alignItems="center">
          <Grid item xs>
            <StyledFormLabel>
              {currentLanguage.general.feedback}:
            </StyledFormLabel>
          </Grid>
          {/* <Grid item>
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
        </Grid> */}
        </Grid>
      </Box>
      <div
        style={{
          background: "#0038ae",
          margin: "0px -2em",
          boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)"
          //height: "30vh",
          //overflow: "auto"
        }}
      >
        <SnackbarProvider maxSnack={3}>
          <SwipeableViews
            animateHeight
            resistance
            index={examplesTab}
            onChangeIndex={e => setExamplesTab(e)}
          >
            {[0, 1, 2, 3, 4].map(page => (
              <List
                dense
                // style={
                //   page === 4
                //     ? { borderRight: "#E82178 2px solid" }
                //     : page === 0
                //     ? { borderLeft: "#E82178 2px solid" }
                //     : null
                // }
              >
                {examples[page].map((x, index) => (
                  <ListCheckBox
                    key={x}
                    examples={categories[currentStep] + "Examples"}
                    formResponses={formResponses}
                    setFormResponses={setFormResponses}
                    example={x}
                    isLastListItem={examples[page].length === index + 1}
                    //For storing of the example
                    category={categories[currentStep]}
                    categoryScore={page}
                    index={index}
                  />
                ))}
              </List>
            ))}
          </SwipeableViews>
        </SnackbarProvider>
      </div>

      <Box>
        <Typography variant="caption">
          {formResponses[categories[currentStep] + "Examples"]
            .map(
              example =>
                currentLanguage[example.category].examples[
                  example.categoryScore
                ][example.index]
            )
            .map(feedback => feedback)
            .join(" ")}
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="outlined"
        color={
          formResponses[categories[currentStep] + "Feedback"] === ""
            ? "default"
            : "primary"
        }
        onClick={handleOpen}
      >
        <PostAdd />
      </Button>
      <Dialog
        fullWidth
        open={isDialogOpen}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            label={currentLanguage.general.additionalFeedback}
            rows="4"
            value={formResponses[categories[currentStep] + "Feedback"]}
            onChange={e =>
              setFormResponses({
                ...formResponses,
                [categories[currentStep] + "Feedback"]: e.target.value
              })
            }
          />

          <Button
            color={
              formResponses[categories[currentStep] + "Feedback"] === ""
                ? "default"
                : "primary"
            }
            variant={
              formResponses[categories[currentStep] + "Feedback"] === ""
                ? "outlined"
                : "contained"
            }
            style={
              formResponses[categories[currentStep] + "Feedback"] === ""
                ? { color: "slategrey" }
                : null
            }
            onClick={handleClose}
            fullWidth
          >
            <Check />
          </Button>
        </DialogContent>
      </Dialog>
      {/* <FeedbackContainer
        feedback={categories[currentStep] + "Feedback"}
        formResponses={formResponses}
        setFormResponses={setFormResponses}
        currentLanguage={currentLanguage}
      /> */}
      <StepButtonGroup
        step={step}
        setStep={setStep}
        currentLanguage={currentLanguage}
        formResponses={formResponses}
        categories={categories}
        currentStep={currentStep}
        setExamplesTab={setExamplesTab}
      />
    </div>
  );
}

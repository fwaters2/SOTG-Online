import React from "react";
import {
  List,
  ListItem,
  Paper,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle
} from "@material-ui/core";

import EnglishText from "../../Assets/Lang/enSpirit.json";
import StyledFormLabel from "../StyledFormLabel.js";
import FeedbackContainer from "../FeedbackContainer.js";
import LastButtons from "../Stepper/LastButtons.js";
const spiritTexts = { en: EnglishText };
const lang = "en";
const SpiritText = spiritTexts[lang];
const categories = Object.keys(SpiritText).filter(x => x !== "general");

export default function Summary({
  step,
  setStep,
  formResponses,
  setFormResponses,
  handleSubmit
}) {
  const summaryText = SpiritText;
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const handleFormSubmit = () => {
    toggleDialog(true);
    handleSubmit();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%"
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
        <StyledFormLabel>{formResponses.opponent}</StyledFormLabel>

        <Paper
          style={{
            margin: "5px -2em 20px",
            borderRadius: 0
          }}
        >
          <List dense>
            {categories.map((x, y) => (
              <ListItem
                style={{ padding: "4px 2em" }}
                key={x}
                divider={y === categories.length - 1}
              >
                <ListItemText primary={summaryText[categories[y]].title} />
                <Typography variant="h6">{formResponses[x]}</Typography>
              </ListItem>
            ))}

            <ListItem dense={false} style={{ padding: "4px 2em" }}>
              <ListItemText primary="Total" />
              <Typography variant="h4" color="secondary">
                {categories.map(x => formResponses[x]).reduce((x, y) => x + y)}
              </Typography>
            </ListItem>
          </List>
        </Paper>
      </div>
      <FeedbackContainer
        feedback="feedback"
        formResponses={formResponses}
        setFormResponses={setFormResponses}
      />
      <LastButtons
        step={step}
        setStep={setStep}
        handleSubmit={handleFormSubmit}
        label="Submit"
      />
      <Dialog
        open={isDialogOpen}
        //onClose={() => setStep(1)}
      >
        <DialogTitle>Thanks for Scoring!</DialogTitle>
      </Dialog>
    </div>
  );
}

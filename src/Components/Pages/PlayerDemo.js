import React from "react";
import Stepper from "../Stepper/Index";
import Summary from "../SpiritScoring/Summary";
import Category from "../SpiritScoring/Category";
import TeamSelection from "../SpiritScoring/TeamSelection";
import LastButtons from "../Stepper/LastButtons";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  ButtonGroup
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function PlayerDemo() {
  const [step, setStep] = React.useState(1);
  const [formResponses, setFormResponses] = React.useState({
    myTeam: "Select",
    opponent: "Select",
    rules: 2,
    rulesFeedback: "",
    rulesExamples: [],
    fouls: 2,
    foulsFeedback: "",
    foulsExamples: [],
    fairness: 2,
    fairnessFeedback: "",
    fairnessExamples: [],
    attitude: 2,
    attitudeFeedback: "",
    attitudeExamples: [],
    communication: 2,
    communicationFeedback: "",
    communicationExamples: [],
    feedback: ""
  });
  const [isDialogOpen, toggleDialog] = React.useState(false);

  const exampleTeams = ["Team A", "Team B", "Team C"];
  const steps = [
    "Teams",
    "Rules Knowledge and Use",
    "Fouls and Body Contact",
    "Fair-Mindedness",
    "Positive Attitude and Self-Control",
    "Communication",
    "Summary"
  ];
  const stepContent = step => {
    switch (step) {
      case 0:
        return (
          <TeamSelection
            formResponses={formResponses}
            setFormResponses={setFormResponses}
            teams={exampleTeams}
            step={step}
            setStep={setStep}
          />
        );
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return (
          <Category
            formResponses={formResponses}
            setFormResponses={setFormResponses}
            step={step}
            setStep={setStep}
          />
        );
      case 6:
        return (
          <React.Fragment>
            <Summary
              step={step}
              setStep={setStep}
              formResponses={formResponses}
              setFormResponses={setFormResponses}
              isDialogOpen={isDialogOpen}
            />
            <LastButtons
              step={step}
              setStep={setStep}
              handleSubmit={() => toggleDialog(!isDialogOpen)}
              label="Submit"
            />
            <Dialog
              open={isDialogOpen}
              onClose={() => toggleDialog(!isDialogOpen)}
            >
              <DialogTitle>Thanks for trying it out!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  The response would then be emailed to the event organizer.
                </DialogContentText>
                <DialogContentText>Penny for your thoughts?</DialogContentText>

                <ButtonGroup fullWidth>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => toggleDialog(!isDialogOpen)}
                    style={{ color: "black" }}
                  >
                    Not Yet!
                  </Button>
                  <Button variant="contained" color="secondary">
                    <Link
                      to="/contact"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Feedback
                    </Link>
                  </Button>
                </ButtonGroup>
              </DialogContent>
            </Dialog>
          </React.Fragment>
        );
      default:
        return "Step Not Found";
    }
  };
  return <Stepper step={step} steps={steps} stepContent={stepContent(step)} />;
}

import React from "react";
import NavigationButtons from "../../Organisms/NavigationButtons";
// import AdditionalFeedback from "../../Molecules/AdditionalFeedback";
// import ScoreSelection from "../../Organisms/ScoreSelection";
import ProgressBar from "../../Organisms/ProgressBar";
// import CheckboxList from "../../Organisms/CheckboxList";
// import { Language } from "@material-ui/icons";
import ScoringSummary from "../../Templates/ScoringSummary";
import { TextField } from "@material-ui/core";
import ScoreList from "../../Templates/ScoringSummary/ScoreList";

interface validatedExample {
  stringsId: string;
  isChecked: boolean;
}

interface Props {
  currentStep: number;
  steps: string[];
  title: any;
  currentScore: number;
  setCurrentScore: (newScore: number) => void;
  examples: any;
  validatedFeedbacks: { [key: string]: boolean };
  setValidatedFeedbacks: any;
  additionalFeedback: string;
  setAdditionalFeedback: any;
  handleStepChange: (action: string) => void;
  setStep: any;
}

const SummaryData = ({
  currentStep,
  steps,
  title,
  currentScore,
  setCurrentScore,
  examples,
  validatedFeedbacks,
  setValidatedFeedbacks,
  additionalFeedback,
  setAdditionalFeedback,
  handleStepChange,
  setStep,
  ...props
}: Props) => {
  // const [examplesTab, setExamplesTab] = useState(currentScore);
  // const [currentFeedback, setCurrentFeedback] = useState("");

  // const validatedFeedbackToString = () => {
  //   return "Placeholder String from Validated Feedback";
  // };

  // const updateCurrentFeedback = () => {
  //   const allFeedback = `${validatedFeedbackToString()} ${additionalFeedback}`;
  //   setCurrentFeedback(allFeedback);
  // };

  // const updateCurrentScore = (newScore: number): void => {
  //   setCurrentScore(newScore);
  //   setExamplesTab(newScore);
  // };
  const categories = [
    { name: "rules", feedback: "They knew the rules" },
    { name: "fouls", feedback: "lorem ipsum" },
    { name: "fairness", feedback: "lorem ipsum" },
    {
      name: "attitude",
      feedback:
        "lorem ipsum, and a very long message that used the phrase the quicky brown fox jumps over the lazy dog",
    },
    { name: "communication", feedback: "lorem ipsum" },
  ];

  // const subtotalText = [
  //   {
  //     name: "Rules Knowledge and Use",
  //     score: 2,
  //   },
  //   {
  //     name: "Fouls and Body Contact",
  //     score: 2,
  //   },
  //   {
  //     name: "Fair-Mindedness",
  //     score: 2,
  //   },
  //   {
  //     name: "Positive Attitude and Self-Control",
  //     score: 2,
  //   },
  //   {
  //     name: "Communication",
  //     score: 2,
  //   },
  // ];

  return (
    <ScoringSummary
      title={"Summary"}
      progressBar={<ProgressBar steps={steps} activeStep={currentStep} />}
      subtotals={<ScoreList />}
      finalThoughts={
        <TextField
          style={{
            margin: "0 0 1em",
            // padding: "1em 0",
            background: "white",
          }}
          variant="outlined"
          placeholder="Great Game!"
          fullWidth
          multiline
          rows="4"
          value={""}
          onChange={() => alert("some text")}
        />
      }
      feedbackSummary={
        <div style={{ margin: "0 2em 2em 2em", padding: "1em 0" }}>
          {categories.map((x) => (
            <div style={{ display: "flex", margin: "1em 0" }}>
              <div
                style={{
                  textTransform: "capitalize",
                  width: "100px",
                  fontSize: "8pt",
                  fontWeight: "bolder",
                  textAlign: "right",
                }}
              >
                {x.name}:
              </div>
              <div style={{ flex: 1 }}>{x.feedback}</div>
            </div>
          ))}
        </div>
      }
      navigationButtons={
        <NavigationButtons currentStep={0} setStep={handleStepChange} />
      }
    />
  );
};

export default SummaryData;

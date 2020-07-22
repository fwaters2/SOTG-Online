import React from "react";
import { storiesOf } from "@storybook/react";
import ScoringSummary from ".";
import ProgressBar from "../../Organisms/ProgressBar";
// import ScoreSelection from "../../Organisms/ScoreSelection";
// import CheckboxList from "../../Organisms/CheckboxList";
import NavigationButtons from "../../Organisms/NavigationButtons";
import { TextField, Divider } from "@material-ui/core";
import ScoreList from "./ScoreList";

const subtotalText = [
  {
    name: "Rules Knowledge and Use",
    score: 2,
  },
  {
    name: "Fouls and Body Contact",
    score: 2,
  },
  {
    name: "Fair-Mindedness",
    score: 2,
  },
  {
    name: "Positive Attitude and Self-Control",
    score: 2,
  },
  {
    name: "Communication",
    score: 2,
  },
];

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

storiesOf("ScoringSummary", module).add("default", () => (
  <ScoringSummary
    title={"Summary"}
    progressBar={
      <ProgressBar
        steps={["step1", "step2", "step3", "step4"]}
        activeStep={4}
      />
    }
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
        //style={{ background: "white" }}
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
      <NavigationButtons currentStep={0} setStep={() => console.log("hello")} />
    }
  />
));

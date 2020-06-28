import React from "react";
import { storiesOf } from "@storybook/react";
import ScoringSummary from ".";
import ProgressBar from "../../Organisms/ProgressBar";
// import ScoreSelection from "../../Organisms/ScoreSelection";
// import CheckboxList from "../../Organisms/CheckboxList";
import NavigationButtons from "../../Organisms/NavigationButtons";
import { TextField, Divider } from "@material-ui/core";

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
    subtotals={
      <div style={{ margin: "0 2em 1em", padding: "10px 0" }}>
        {subtotalText.map((category) => (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: ".5em 0",
              }}
            >
              <div style={{ flex: 1 }}>{category.name}</div>
              <div style={{ fontSize: "18pt" }}>{category.score}</div>
            </div>
            <Divider />
          </>
        ))}
        <div style={{ display: "flex", alignItems: "center", margin: "1em 0" }}>
          <div style={{ flex: 1, fontSize: "18pt" }}>Total</div>
          <div style={{ fontSize: "24pt", fontWeight: "bolder" }}>10</div>
        </div>
      </div>
    }
    // feedbackSummary={
    //   <CheckboxList
    //     examplesTab={2}
    //     currentCategory={"A Category"}
    //     examples={[
    //       [
    //         "For the level of play they showed appropriate knowledge of the rules.",
    //         "They did not purposefully misinterpret the rules.",
    //         "When they didn’t know the rules, they showed a real willingness to learn them.",
    //         "They started on time and respected the time limits throughout.",
    //         "They abided by the rules throughout the game.",
    //       ],
    //     ]}
    //   />
    // }
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

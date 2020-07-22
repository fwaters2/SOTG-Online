import React from "react";
import { storiesOf } from "@storybook/react";
import ScoringForm from ".";
import { Language } from "@material-ui/icons";
// import ProgressBar from "../../Organisms/ProgressBar";
// import ScoreSelection from "../../Organisms/ScoreSelection";
// import CheckboxList from "../../Organisms/CheckboxList";
// import NavigationButtons from "../../Organisms/NavigationButtons";

storiesOf("ScoringForm", module).add("default", () => (
  <ScoringForm
    title={"Rules Knowledge and Use"}
    langSelectorIcon={<Language />}
    progressBar={
      <div />
      // <ProgressBar steps={[1, 2, 3, 4, 5, 6, 7]} activeStep={2} />
    }
    pillBox={
      <div />
      // <ScoreSelection tempScore={2} examplesTab={2} />
    }
    checkboxList={
      <div />
      // <CheckboxList
      //   examplesTab={2}
      //   currentCategory={"A Category"}
      //   examples={[
      //     [
      //       "For the level of play they showed appropriate knowledge of the rules.",
      //       "They did not purposefully misinterpret the rules.",
      //       "When they didn’t know the rules, they showed a real willingness to learn them.",
      //       "They started on time and respected the time limits throughout.",
      //       "They abided by the rules throughout the game.",
      //     ],
      //   ]}
      // />
    }
    additionalFeedback={<div />}
    navigationButtons={
      <div />
      // <NavigationButtons currentStep={0} setStep={() => console.log("hello")} />
    }
  />
));

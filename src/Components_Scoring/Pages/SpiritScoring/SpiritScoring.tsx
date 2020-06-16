import React from "react";
import ScoringForm from "../../Templates/ScoringForm";
import NavigationButtons from "../../Organisms/NavigationButtons";
import Feedback from "../../Organisms/Feedback";
import ScoringTitle from "../../Organisms/ScoringTitle";
import ScoreSelection from "../../Organisms/ScoreSelection";
import ProgressBar from "../../Organisms/ProgressBar";
import CheckboxList from "../../Organisms/CheckboxList";

const SpiritScoring = () => {
  return (
    <ScoringForm
      title={<ScoringTitle>Rules Knowledge and Use</ScoringTitle>}
      progressBar={<ProgressBar steps={[1, 2, 3, 4, 5, 6, 7]} activeStep={2} />}
      pillBox={<ScoreSelection tempScore={2} examplesTab={2} />}
      checkboxList={
        <CheckboxList
          examplesTab={2}
          currentCategory={"A Category"}
          examples={[
            [
              "For the level of play they showed appropriate knowledge of the rules.",
              "They did not purposefully misinterpret the rules.",
              "When they didn’t know the rules, they showed a real willingness to learn them.",
              "They started on time and respected the time limits throughout.",
              "They abided by the rules throughout the game.",
            ],
          ]}
        />
      }
      feedback={
        <Feedback
          feedbackPreview={"Great Game"}
          additionalFeedback={"Additional Feedback"}
          setAdditionalFeedback={() => alert("Setting additional Feedback")}
        />
      }
      navigationButtons={
        <NavigationButtons
          currentStep={0}
          setStep={() => console.log("hello")}
        />
      }
    />
  );
};

export default SpiritScoring;

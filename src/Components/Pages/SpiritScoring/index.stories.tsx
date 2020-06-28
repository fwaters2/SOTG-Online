import React from "react";
import { storiesOf } from "@storybook/react";
import SpiritScoring from ".";

const validatedFeedbacks = {
  RULES_0_0: false,
  RULES_0_1: false,
  RULES_0_2: false,
  RULES_1_0: false,
  RULES_1_1: false,
  RULES_1_2: false,
  RULES_1_3: false,
  RULES_1_4: false,
  RULES_2_0: true,
  RULES_2_1: false,
  RULES_2_2: false,
  RULES_2_3: false,
  RULES_2_4: false,
  RULES_3_0: false,
  RULES_3_1: false,
  RULES_4_0: false,
  RULES_4_1: false,
};

storiesOf("SpiritScoring", module).add("Page", () => (
  <SpiritScoring
    currentStep={3}
    steps={["step1", "step2", "step3"]}
    title={"Title in Stories"}
    currentScore={2}
    setCurrentScore={() => alert(2)}
    examples={["string", "string2", "string3"]}
    validatedFeedbacks={validatedFeedbacks}
    setValidatedFeedbacks={() => alert("toggleFeedback")}
    additionalFeedback={"some feedback"}
    setAdditionalFeedback={() => alert("change feedback")}
    handleStepChange={() => alert("changeStep")}
  />
));

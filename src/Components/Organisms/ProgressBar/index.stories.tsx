import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from ".";

storiesOf("ScoringForm", module).add("ProgressBar", () => (
  <ProgressBar steps={["step1", "step2", "step3"]} activeStep={3} />
));

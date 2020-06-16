import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from ".";

storiesOf("ScoringForm", module).add("ProgressBar", () => (
  <ProgressBar steps={[1, 2, 3, 4, 5]} activeStep={3} />
));

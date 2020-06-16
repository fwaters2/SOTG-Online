import React from "react";
import { storiesOf } from "@storybook/react";
import NavigationButtons from ".";

storiesOf("ScoringForm", module).add("NavigationButtons", () => (
  <NavigationButtons currentStep={0} setStep={() => alert("Button Clicked")} />
));

import React from "react";
import { storiesOf } from "@storybook/react";
import ScoreSelection from ".";
import { BLUE } from "../../themes/colors";

storiesOf("ScoringForm", module).add("ScoreSelection", () => (
  <div style={{ background: BLUE, padding: "1em" }}>
    <ScoreSelection
      currentScore={2}
      updateCurrentScore={() => 3}
      examplesTab={4}
    />
  </div>
));

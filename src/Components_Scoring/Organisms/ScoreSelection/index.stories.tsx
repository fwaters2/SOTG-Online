import React from "react";
import { storiesOf } from "@storybook/react";
import ScoreSelection from ".";
import { BLUE } from "../../../Components/Atoms/mycolors";

storiesOf("ScoringForm", module).add("ScoreSelection", () => (
  <div style={{ background: BLUE, padding: "1em" }}>
    <ScoreSelection />
  </div>
));

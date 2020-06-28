import React from "react";
import { storiesOf } from "@storybook/react";
import CheckboxList from ".";

storiesOf("ScoringForm", module).add("CheckboxList", () => (
  <CheckboxList
    examples={[]}
    setValidatedFeedbacks={() => alert("updatding feedback")}
  />
));

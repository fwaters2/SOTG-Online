import React from "react";
import { storiesOf } from "@storybook/react";
import CheckboxList from ".";

storiesOf("ScoringForm", module).add("CheckboxList", () => (
  <CheckboxList
    examplesTab={2}
    currentCategory={"A Category"}
    examples={[["I don't know"]]}
    //formResponses={"Form Responses"}
  />
));

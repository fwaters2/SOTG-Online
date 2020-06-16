import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBoxListItem from ".";

storiesOf("ScoringForm", module).add("CheckBoxListItem", () => (
  <CheckBoxListItem example={"test"} isLastListItem={false} />
));

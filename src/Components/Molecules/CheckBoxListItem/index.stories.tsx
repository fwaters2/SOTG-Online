import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBoxListItem from ".";

storiesOf("ScoringForm", module).add("CheckBoxListItem", () => (
  <CheckBoxListItem
    index={0}
    primary="test"
    isChecked={true}
    onClick={() => alert("clicked")}
  />
));

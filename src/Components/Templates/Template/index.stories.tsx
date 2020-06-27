import React from "react";
import { storiesOf } from "@storybook/react";
import Template from ".";

storiesOf("Prototypes", module).add("Template", () => (
  <Template header={<div />} footer={<div />} />
));

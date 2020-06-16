import React from "react";

import { storiesOf } from "@storybook/react";
import ActionButtons from ".";
import { MemoryRouter } from "react-router-dom";

storiesOf("Webpage", module).add("ActionButtons", () => (
  <MemoryRouter>
    <ActionButtons />
  </MemoryRouter>
));

import React from "react";
import { storiesOf } from "@storybook/react";
import HomePage from ".";
import { MemoryRouter } from "react-router-dom";

storiesOf("Webpage", module).add("HomePage", () => (
  <MemoryRouter>
    <HomePage />
  </MemoryRouter>
));

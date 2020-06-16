import React from "react";
import { storiesOf } from "@storybook/react";
import PrimaryNavigation from ".";
import { MemoryRouter } from "react-router-dom";

const MenuLinks = [
  { text: "Home", extension: "./home", to: "/" },
  { text: "Example Page", extension: "./example-page", to: "/example-page" },
];

storiesOf("Webpage", module).add("PrimaryNavigation", () => (
  <MemoryRouter>
    <PrimaryNavigation menuLinks={MenuLinks} />
  </MemoryRouter>
));

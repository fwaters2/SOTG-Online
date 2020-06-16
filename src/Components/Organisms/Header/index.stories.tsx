import React from "react";
import { storiesOf } from "@storybook/react";
import Header from ".";
import { MemoryRouter } from "react-router-dom";

const MenuLinks = [
  { text: "Home", extension: "./home", to: "/" },
  { text: "Example Page", extension: "./example-page", to: "/example-page" },
];

storiesOf("Webpage", module).add("Header", () => (
  <MemoryRouter>
    <Header menuLinks={MenuLinks} />
  </MemoryRouter>
));

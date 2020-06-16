import React from "react";
import { storiesOf } from "@storybook/react";
import Link from ".";
import { MemoryRouter } from "react-router-dom";

storiesOf("Webpage", module).add("Link", () => (
  <Link href="https://sotg.online">External Link</Link>
));
storiesOf("Webpage", module).add("Nav Link", () => (
  <MemoryRouter>
    <Link to="/">Navigation Link</Link>
  </MemoryRouter>
));

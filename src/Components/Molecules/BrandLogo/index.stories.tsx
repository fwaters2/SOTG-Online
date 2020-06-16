import React from "react";
import { storiesOf } from "@storybook/react";
import BrandLogo from ".";
import { MemoryRouter } from "react-router-dom";
import { ReactComponent as SOTGLogo } from "../../../Assets/Logos/SOTG_Full.svg";

storiesOf("Webpage", module).add("BrandLogo", () => (
  <MemoryRouter>
    <BrandLogo img={<SOTGLogo />} />
  </MemoryRouter>
));

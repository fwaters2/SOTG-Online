import React from "react";
import HomePageTemplate from "../../Templates/HomePageTemplate";
import Header from "../../Organisms/Header";
import MenuLinks from "../../../Assets/MenuLinks";
import Footer from "../../Organisms/Footer";
import Hero from "../../Organisms/Hero";
import { ReactComponent as Logo } from "../../../Assets/Logos/SOTG_Icon.svg";
import ActionButtons from "../../Organisms/ActionButtons";

const HomePage = () => {
  return (
    <HomePageTemplate
      header={<Header menuLinks={MenuLinks} />}
      hero={<Hero Logo={<Logo />} />}
      actionButtons={<ActionButtons />}
      footer={<Footer />}
    />
  );
};

export default HomePage;

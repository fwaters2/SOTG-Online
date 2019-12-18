import React from "react";
import { Switch, Route } from "react-router-dom";
import HowToUse from "./Components/Pages/HowToUse";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Verified from "./Components/Pages/Verified";
import SpiritScore from "./Components/SpiritScoring/Index";
import EventCreation from "./Components/EventCreation/Index";
import PlayerDemo from "./Components/Pages/PlayerDemo";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PlayerDemo} />
      <Route exact path="/howtouse" component={HowToUse} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/verified" component={PlayerDemo} />
      <Route exact path="/demo" component={PlayerDemo} />
      <Route path="/:event" component={PlayerDemo} />
    </Switch>
  );
}

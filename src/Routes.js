import React from "react";
import { Switch, Route } from "react-router-dom";
import HowToUse from "./Components/Pages/HowToUse";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Verified from "./Components/Pages/Verified";
import SpiritScore from "./Components/SpiritScoring/Index";
import EventCreation from "./Components/EventCreation/Index";
import PlayerDemo from "./Components/Pages/PlayerDemo";
import Login from "./Components/Login/Login";
import HomeNoUser from "./Components/HomeNoUser";
import HomeUser from "./Components/HomeUser";
import LoginAttempt from "./Components/Login/LoginAttempt";
import CopyLink from "./Components/EventCreation/CopyLink";

export default function Routes({ userEmail }) {
  return (
    <Switch>
      <Route exact path="/" component={userEmail ? HomeUser : HomeNoUser} />
      <Route path="/home" component={userEmail ? HomeUser : HomeNoUser} />
      <Route path="/loginAttempt" component={LoginAttempt} />
      <Route exact path="/howtouse" component={HowToUse} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/verified" component={Verified} />
      <Route exact path="/demo" component={PlayerDemo} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/createevent" component={EventCreation} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/testing" component={CopyLink} />
      <Route path="/:event" component={SpiritScore} />
    </Switch>
  );
}

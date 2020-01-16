import React from "react";
import { Switch, Route } from "react-router-dom";
import HowToUse from "./Components/Pages/HowToUse";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Verified from "./Components/Pages/Verified";
import SpiritScore from "./Components/SpiritScoring/Index";
import EventCreation from "./Components/EventCreation/Index";
import PlayerDemo from "./Components/SpiritScoring/PlayerDemo";
import Login from "./Components/Login/Login";
import HomeNoUser from "./Components/HomeNoUser";
import HomeUser from "./Components/Organizer/Index.js";
import LoginAttempt from "./Components/Login/LoginAttempt";
import OrganizerDemo from "./Components/Organizer/Demo/OrganizerDemo.js";

export default function Routes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          user ? <HomeUser user={user} /> : <HomeNoUser user={user} />
        }
      />
      <Route
        path="/home"
        render={() =>
          user ? <HomeUser user={user} /> : <HomeNoUser user={user} />
        }
      />
      <Route path="/loginAttempt" component={LoginAttempt} />
      <Route exact path="/howtouse" component={HowToUse} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/verified" component={Verified} />
      <Route exact path="/playerdemo" component={PlayerDemo} />
      <Route exact path="/organizerdemo" component={OrganizerDemo} />
      <Route exact path="/login" component={Login} />
      <Route
        exact
        path="/createevent"
        render={props => <EventCreation {...props} user={user} />}
      />
      <Route
        path="/:event"
        render={props => <SpiritScore {...props} user={user} />}
      />
    </Switch>
  );
}

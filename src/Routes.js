import React from "react";
import { Switch, Route } from "react-router-dom";
import EventHome from "./Layout/EventHome";
import AppHome from "./Layout/AppHome";
import CreateEvent from "./Components/CreateEvent";
import Demo from "./Demo/Index";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={AppHome} />
      <Route exact path="/createevent" component={CreateEvent} />
      <Route exact path="/demo" component={Demo} />
      <Route path="/:event" component={EventHome} />
    </Switch>
  );
}

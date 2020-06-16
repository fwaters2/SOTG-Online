import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import HowToUse from './Components/Pages/HowToUse';
// import About from './Components/Pages/About';
// import Contact from './Components/Pages/Contact';
// import Verified from './Components/Pages/Verified';
// import SpiritScore from './Components/Scoring/Index';
// import EventCreation from './Components/EventCreation/Index';
// import PlayerDemo from './Components/Scoring/PlayerDemo';
// import Login from './Components/Login/Login';
// import HomeNoUser from './Components/HomeNoUser';
// import HomeUser from './Components/Management/Index';
// import LoginAttempt from './Components/Login/LoginAttempt';
// import OrganizerDemo from './Components/Management/Demo/OrganizerDemo';
// import CheckEmail from './Components/EventCreation/CheckEmail';
// import HomePage from './Components/Pages/HomePage/HomePage';

type RoutesProps = { user: object }

export default function Routes({ user }: RoutesProps ) {
  return (
    <Switch>
      {/* <Route exact path="/" ><HomePage user ={ user } /></Route> */}
      {/* <Route
        path="/home"
        render={() => (user ? <HomeUser user={user} /> : <HomeNoUser user={user} />)}
      />
      <Route path="/loginAttempt" component={LoginAttempt} />
      <Route exact path="/howtouse" component={HowToUse} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/verified" component={Verified} />
      <Route exact path="/playerdemo" component={PlayerDemo} />
      <Route exact path="/organizerdemo" component={OrganizerDemo} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/checkemail" component={CheckEmail} />
      <Route exact path="/createevent" render={props => <EventCreation {...props} user={user} />} />
      <Route path="/:event" render={props => <SpiritScore {...props} user={user} />} /> */}
    </Switch>
  );
}

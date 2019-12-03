import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Signature from "./Layout/Signature";

function App() {
  return (
    <div id="root">
      <Router>
        <Routes />
        <Signature />
      </Router>
    </div>
  );
}

export default App;

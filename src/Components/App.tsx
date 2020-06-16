import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import HomePage from "./Pages/HomePage";
import theme from "../Themes";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} />
          {/* <Route path="/sample-page" component={SamplePage} /> */}
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;

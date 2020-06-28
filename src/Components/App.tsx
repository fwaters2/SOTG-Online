import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ThemeContext, { defaultPalette } from "./themes/default";
import ScoringData from "./ScoringData";

const App = () => {
  // const [theme, setTheme] = React.useState()

  // const changeTheme = (mode:string):void => {
  //     setTheme(setTheme(mode));
  // };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ palette: defaultPalette }}>
        <Switch>
          <Route>
            <ScoringData />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
export default App;

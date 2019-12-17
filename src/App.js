import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Signature from "./Components/Signature";
import StyledHeader from "./Components/StyledHeader";
import { createMuiTheme, ThemeProvider, Container } from "@material-ui/core";
import string_to_slug from "./slugify";
const myBlue = "#0C61E1";
const myGreen = "#8FDE58";
const myPurple = "#E82178";
const theme = createMuiTheme({
  palette: {
    primary: { main: myGreen },
    secondary: { main: myBlue },
    error: { main: myPurple }
  },
  overrides: {
    MuiButton: {
      root: { borderRadius: 8 }
    },
    MuiPaper: {
      root: {
        borderRadius: 8
      }
    },
    MuiFormControl: {
      root: {
        borderRadius: 8
      }
    }
  }
});
function App() {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <Router>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh"
            }}
          >
            <StyledHeader />
            <div style={{ display: "flex", flex: 1 }}>
              <Container maxWidth="xs" style={{ flex: 1 }}>
                <Routes />
              </Container>
            </div>
            <Signature />
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

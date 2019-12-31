import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Signature from "./Components/Signature";
import StyledHeader from "./Components/StyledHeader";
import { createMuiTheme, ThemeProvider, Container } from "@material-ui/core";
import Firebase from "./Firebase";
import Preloader from "./Assets/Loader/Preloader";

const myBlue = "#0C61E1";
const myGreen = "#8FDE58";
const myPurple = "#E82178";
const theme = createMuiTheme({
  palette: {
    primary: { main: myGreen },
    secondary: { main: myPurple }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        margin: ".5em 0",
        padding: ".5em",
        color: "white",
        textTransform: "none",
        fontSize: "14pt"
      }
    },
    MuiPaper: {
      root: {
        borderRadius: 8,
        background: myBlue
      }
    },
    MuiFormControl: {
      root: {
        borderRadius: 8,
        background: "white",
        width: "100%",
        margin: "1em 0",
        padding: 0
      }
    },
    MuiInputBase: {
      root: {
        padding: ".5em 1em"
      },
      multiline: {
        padding: "1em"
      }
    }
  }
});
function App() {
  const [userEmail, setUserEmail] = React.useState("");
  const [isLoading, toggleLoading] = React.useState(true);
  const handleUser = email => {
    setUserEmail(email);
    toggleLoading(false);
  };

  function setupListener() {
    Firebase.auth().onAuthStateChanged(user =>
      user ? handleUser(user.email) : toggleLoading(false)
    );
  }

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <Router>
          {setupListener()}
          {isLoading ? (
            <Preloader />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh"
              }}
            >
              <StyledHeader userEmail={userEmail} />
              <div style={{ display: "flex", flex: 1 }}>
                <Container maxWidth="xs" style={{ flex: 1 }}>
                  <Routes userEmail={userEmail} />
                </Container>
              </div>
              <Signature />
            </div>
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

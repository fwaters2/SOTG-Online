import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  Container,
  Hidden,
} from "@material-ui/core";
//import Routes from './Routes';
import Signature from "./Components/Signature";
import StyledHeader from "./Components/Organisms/Header/HeaderMobile";
import Firebase from "./Utils/Firebase";
import StyledHeaderDesktop from "./Components/Organisms/Header/HeaderDesktop";
import Logo from "./Assets/Loader/Spinner/Logo";
import { BLUE, GREEN, RED_PURPLE } from "./Components/Atoms/mycolors";

const theme = createMuiTheme({
  palette: {
    primary: { main: GREEN },
    secondary: { main: RED_PURPLE },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        margin: ".5em 0",
        padding: ".5em",
        color: "white",
        textTransform: "none",
        fontSize: "14pt",
      },
    },
    MuiPaper: {
      root: {
        borderRadius: 8,
        background: BLUE,
      },
    },
    MuiFormControl: {
      root: {
        borderRadius: 8,
        background: "white",
        width: "100%",
        margin: "1em 0",
        padding: 0,
      },
    },
    MuiInputBase: {
      root: {
        padding: ".5em 1em",
      },
      multiline: {
        padding: "1em",
      },
    },
  },
});
function App() {
  const [user, updateUser] = useState({});
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const { displayName } = firebaseUser;
        const { email } = firebaseUser;
        updateUser({ displayName, email });
        toggleLoading(false);
      } else {
        updateUser({});
        toggleLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <Router>
          {/* {isLoading ? (
            <div
              style={{
                position: "fixed",
                top: "40vh",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Logo />
            </div>
          ) : ( */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Hidden smDown>
              <StyledHeaderDesktop user={user} />
            </Hidden>
            <Hidden mdUp>
              <StyledHeader user={user} />
            </Hidden>
            <div style={{ display: "flex", flex: 1 }}>
              <Container maxWidth="xs" style={{ flex: 1 }}>
                {/* <Routes user={user} /> */}
              </Container>
            </div>
            <Signature />
          </div>
          {/* )} */}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

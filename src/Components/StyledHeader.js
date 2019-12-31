import React from "react";
import {
  Typography,
  IconButton,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemText,
  Divider,
  withStyles
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { ReactComponent as SOTGLogo } from "../Assets/Logos/SOTG_Full.svg";
import { Link as RouterLink } from "react-router-dom";
import Firebase from "../Firebase";

const myBlue = "#0C61E1";
const myPurple = "#E82178";
const links = [
  { text: "Home", extension: "" },
  { text: "How To Use", extension: "howtouse" },
  { text: "Demo", extension: "playerdemo" },
  { text: "About", extension: "about" },
  { text: "Contact", extension: "contact" }
];
const StyledExpansionPanel = withStyles({})(ExpansionPanel);
const StyledExpansionPanelSummary = withStyles({
  root: {},
  content: {
    "&$expanded": {
      //all this to get rid of the extra margin added when the panel is expanded
      //same margin as unexpanded expansion panel
      margin: "12px 0"
    }
  },
  expanded: {}
})(ExpansionPanelSummary);

export default function StyledHeader({ userEmail }) {
  const [expanded, toggleExpanded] = React.useState(false);

  const handleLogout = () => {
    Firebase.auth().signOut();
    window.location.reload();
  };
  return (
    <div>
      <StyledExpansionPanel elevation={0} expanded={expanded}>
        <StyledExpansionPanelSummary
          expandIcon={
            expanded ? (
              <IconButton
                onClick={() => toggleExpanded(!expanded)}
                style={{
                  color: myPurple,
                  boxShadow: "0 -3px 3px lightGray"
                }}
              >
                <Close />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => toggleExpanded(!expanded)}
                style={{ color: myBlue, boxShadow: "0 3px 3px lightGray" }}
              >
                <Menu />
              </IconButton>
            )
          }
        >
          <SOTGLogo
            style={{
              height: "2.5em",
              margin: "2em 1em"
            }}
          />
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ width: "100%" }}>
            {links.map((nav, index) => (
              <RouterLink
                key={nav.text}
                to={"/" + nav.extension}
                onClick={e => toggleExpanded(!expanded)}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h5"
                        style={{
                          fontWeight: "bold",
                          color: "grey"
                        }}
                      >
                        {nav.text}
                      </Typography>
                    }
                  />
                </ListItem>
                {/* {index === links.length - 1 ? null : <Divider />} */}
                <Divider />
              </RouterLink>
            ))}
            {userEmail ? (
              <ListItem button onClick={handleLogout}>
                <ListItemText
                  primary={
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: "bold",
                        color: "grey"
                      }}
                    >
                      Logout
                    </Typography>
                  }
                />
              </ListItem>
            ) : (
              <RouterLink
                to="/login"
                onClick={e => toggleExpanded(!expanded)}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h5"
                        style={{
                          fontWeight: "bold",
                          color: "grey"
                        }}
                      >
                        Login
                      </Typography>
                    }
                  />
                </ListItem>
              </RouterLink>
            )}
          </List>
        </ExpansionPanelDetails>
      </StyledExpansionPanel>
    </div>
  );
}

import React, { useState } from "react";
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
  withStyles,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { Link as RouterLink, Link } from "react-router-dom";
//import { ReactComponent as SOTGLogo } from "../../Assets/Logos/SOTG_Full.svg";
import Firebase from "../../../Utils/Firebase";
import { BLUE, RED_PURPLE, BLACK_OLIVE } from "../../Atoms/mycolors";
import MenuLinks from "../../../Assets/MenuLinks";

const StyledExpansionPanel = withStyles({})(ExpansionPanel);
const StyledExpansionPanelSummary = withStyles({
  root: {},
  content: {
    "&$expanded": {
      // all this to get rid of the extra margin added when the panel is expanded
      // same margin as unexpanded expansion panel
      margin: "12px 0",
    },
  },
  expanded: {},
})(ExpansionPanelSummary);

type StyledHeaderProps = { user: object };

export default function StyledHeader({ user }: StyledHeaderProps) {
  const [expanded, toggleExpanded] = useState(false);

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
                  color: RED_PURPLE,
                  boxShadow: "0 -3px 3px lightGray",
                }}
              >
                <Close />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => toggleExpanded(!expanded)}
                style={{ color: BLUE, boxShadow: "0 3px 3px lightGray" }}
              >
                <Menu />
              </IconButton>
            )
          }
        >
          <Link to="/">
            {/* <SOTGLogo
              style={{
                height: "2.5em",
                margin: "2em 1em",
              }}
            /> */}
          </Link>
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ width: "100%" }}>
            {MenuLinks.map((nav) => (
              <RouterLink
                key={nav.text}
                to={`/${nav.extension}`}
                onClick={() => toggleExpanded(!expanded)}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h5"
                        style={{
                          fontWeight: "bold",
                          color: "grey",
                        }}
                      >
                        {nav.text}
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider />
              </RouterLink>
            ))}
            {user ? (
              <ListItem button onClick={handleLogout}>
                <ListItemText
                  primary={
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: "bold",
                        color: BLACK_OLIVE,
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
                onClick={() => toggleExpanded(!expanded)}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h5"
                        style={{
                          fontWeight: "bold",
                          color: BLACK_OLIVE,
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

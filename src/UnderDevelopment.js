import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
  Paper
} from "@material-ui/core";
import "./construction.jpeg";
const construction = require("./construction.jpeg");
export default function UnderDevelopment() {
  const goals = [
    "Simplify scoresheet management",
    "Create a more dynamic scoresheet with examples of each score",
    "Reduce Paper waste"
  ];
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        color: "black"
      }}
    >
      <img
        src={construction}
        style={{
          position: "fixed",
          height: "100vh",
          minWidth: "100vw",
          objectFit: "cover",
          right: 0,
          zIndex: -99
        }}
      />
      <Container
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div className="title" style={{ margin: "2em" }}>
          <Typography variant="h2" align="center">
            SOTG Online
          </Typography>
        </div>
        <Typography variant="h4" align="center" style={{ margin: "2em" }}>
          Under Development
        </Typography>
        <Paper
          style={{
            alignSelf: "center",
            padding: "1em",
            background: "rgba(256,256,256,0.75)",
            maxWidth: "500px"
          }}
        >
          <Typography variant="h6">Project aims:</Typography>

          <List>
            {goals.map(goal => (
              <ListItem>
                <ListItemText primary={goal} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
}

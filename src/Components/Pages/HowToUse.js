import React from "react";
import { List, ListItem, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const steps = [
  { title: "Enter event Name, Teams, email" },
  { title: "Verify your email and receive your events link" },
  { title: "Share your event link to your team captains/spirit captains" },
  {
    title:
      "Check your email during/after event as the spirit scores are submitted!"
  }
];

export default function HowToUse() {
  return (
    <List>
      {steps.map((item, index) => (
        <ListItem key={item}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h4">{index + 1}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1">{item.title}</Typography>
            </Grid>
          </Grid>
        </ListItem>
      ))}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button fullWidth variant="contained" color="secondary">
          Create Event Now!
        </Button>
      </Link>
    </List>
  );
}

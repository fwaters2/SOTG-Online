import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { Check } from "@material-ui/icons";

const StyledCard = props => {
  return (
    <Card style={{ margin: "1em 0" }}>
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body1">{props.body}</Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};
const playerBenefits = [
  "Examples: WFDF examples next to every possible score for more confident assessments",
  "Convenience: available on any device",
  "Save the planet! (paperless)",
  "Multilingual (Under Development)"
];
const organizerBenefits = [
  "Easy to setup: Just need the of your event, team names, and an email",
  "More accurate spirit scores: Providing WFDF examples to players, with each score will standardize your events results",
  "No commitment: You can still offer players the normal paper option",
  "Less Mess: Scores arrive to your inbox and can be easily copy/pasted to your favorite spreadsheet"
];

export default function InfoLayout() {
  return (
    <div style={{ width: "100%" }}>
      <StyledCard
        title="What is SOTG Online?"
        body=" A tool for players and organizers to improve spirit score recording and
            management"
      ></StyledCard>

      <StyledCard title="Player Benefits">
        <List>
          {playerBenefits.map(x => (
            <ListItem key={x}>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          ))}
        </List>
      </StyledCard>
      <StyledCard title="Organizer Benefits">
        {organizerBenefits.map(x => (
          <ListItem key={x}>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText primary={x} />
          </ListItem>
        ))}
      </StyledCard>
    </div>
  );
}

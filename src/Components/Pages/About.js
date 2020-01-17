import React from 'react';
import { Card, CardHeader, CardMedia, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import scoreSheet from '../../Assets/photos/SpiritScoresheet-min.JPG';

// const StyledCard = props => {
//   return (
//     <Card style={{ margin: "1em 0" }}>
//       <CardHeader title={props.title} subheader={props.body} />
//       <CardContent>{props.children}</CardContent>
//     </Card>
//   );
// };
// const playerBenefits = [
//   "Examples: WFDF examples next to every possible score for more confident assessments",
//   "Convenience: available on any device",
//   "Save the planet! (paperless)",
//   "Multilingual (Under Development)"
// ];
// const organizerBenefits = [
//   "Easy to setup: Just need the of your event, team names, and an email",
//   "More accurate spirit scores: Providing WFDF examples to players, with each score will standardize your events results",
//   "No commitment: You can still offer players the normal paper option",
//   "Less Mess: Scores arrive to your inbox and can be easily copy/pasted to your favorite spreadsheet"
// ];

export default function InfoLayout() {
  return (
    <div style={{ width: '100%' }}>
      <Card style={{ margin: '2em 0' }}>
        <CardHeader
          title="What is SOTG Online?"
          subheader=" A tool for players and organizers to improve spirit score recording and
            management"
        />
      </Card>
      <Card style={{ margin: '2em 0' }}>
        <CardHeader title="What are we trying to improve upon?" subheader="The paper scoresheet" />
        <CardMedia>
          <img src={scoreSheet} alt="Paper Sheet" />
        </CardMedia>
      </Card>
      <Card style={{ margin: '2em 0' }}>
        <CardHeader title="Where did the examples come From?" subheader="Straight from WFDF!" />
        <CardMedia>
          <a href="http://www.wfdf.org/downloads/cat_view/42-sotg-documents/134-spirit-examples">
            <img
              src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/WFDF_Logo.png/400px-WFDF_Logo.png"
              alt="wfdf"
              width="100%"
            />
          </a>
        </CardMedia>
      </Card>
      <Button fullWidth variant="contained" color="primary">
        <Link to="/playerdemo" style={{ color: 'inherit', textDecoration: 'none' }}>
          Check Out Demo
        </Link>
      </Button>

      {/* <StyledCard title="Player Benefits">
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
      </StyledCard> */}
      {/* <StyledCard title="Organizer Benefits">
        {organizerBenefits.map(x => (
          <ListItem key={x}>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText primary={x} />
          </ListItem>
        ))}
      </StyledCard> */}
    </div>
  );
}

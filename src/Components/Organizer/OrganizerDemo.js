import React from "react";
import OrganizerView from "./OrgananizerView";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Grid
} from "@material-ui/core";
import { Add, Replay } from "@material-ui/icons";
import langStrings from "../../Assets/Lang/enSpirit2019.json";
import { Link } from "react-router-dom";

const initialEvents = [
  {
    email: "demo@demo.com",
    eventName: "Demo Tourney",
    slug: "demotourney",
    teams: [
      "Big Dumps",
      "Huck Buddies",
      "Kaohsiung Love",
      "Galaxy",
      "Team UFO",
      "SanMa",
      "Disc Combobulators",
      "The Designated Drinkers"
    ]
  }
];

const initialScores = [
  {
    id: 0,
    eventName: "Demo Tourney",
    myTeam: "Huck Buddies",
    opponent: "SanMa",
    rules: 3,
    fouls: 2,
    fairness: 2,
    attitude: 3,
    communication: 2,
    feedback:
      "They kept to reasonable time lengths. A Spirit time out was called. They respected and acknowledged our opinions on calls, even when they disagreed. They always used official hand signals to indicate fouls, scores, etc., and they echoed our calls also. They brought up spirit issues and general concerns as early as possible, directly or through (spirit) captains."
  },
  {
    id: 1,
    eventName: "Demo Tourney",
    myTeam: "Galaxy",
    opponent: "Kaohsiung Love",
    rules: 1,
    fouls: 2,
    fairness: 2,
    attitude: 2,
    communication: 2,
    feedback:
      "They adjusted their behavior based on our feedback in a way that improved the enjoyment of the game. They explained the game to spectators or new players. They exhibited the highest level of respect and positive attitude from start to finish. They kept to reasonable time lengths. The game flowed smoothly without frequent calls."
  }
];

export default function OrganizerDemo() {
  const [isLoading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [spiritScores, setSpiritScores] = React.useState([]);
  const email = "demo@demo.com";

  React.useEffect(() => {
    setEvents(initialEvents);
  }, [email]);
  React.useEffect(() => {
    setSpiritScores(initialScores);
    setLoading(false);
  }, [email]);

  const handleDelete = id => () => {
    setSpiritScores(spiritScores.filter(x => x.id !== id));
  };

  function guidGenerator() {
    var S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }
  const handleDemoAdd = () => {
    const randomTeam =
      initialEvents[0].teams[
        Math.floor(Math.random() * initialEvents[0].teams.length)
      ];
    const randomOpponent = initialEvents[0].teams.filter(x => x !== randomTeam)[
      Math.floor(Math.random() * initialEvents[0].teams.length)
    ];
    function randomFeedback() {
      const categories = [
        "rules",
        "fouls",
        "attitude",
        "fairness",
        "communication"
      ];
      const scores = [2, 3, 4];
      function allStrings() {
        let newArray = [];
        categories.map(cat =>
          scores.map(score => {
            newArray = [...newArray, ...langStrings[cat].examples[score]];
          })
        );
        return newArray;
      }
      return (
        allStrings()[Math.round(Math.random() * allStrings().length)] + " "
      );
    }
    function randomSpiritScore() {
      return Math.round(Math.random() * 4);
    }
    const newScore = {
      id: guidGenerator(),
      eventName: "Demo Tourney",
      myTeam: randomTeam,
      opponent: randomOpponent,
      rules: randomSpiritScore(),
      fouls: randomSpiritScore(),
      fairness: randomSpiritScore(),
      attitude: randomSpiritScore(),
      communication: randomSpiritScore(),
      feedback: [
        randomFeedback(),
        randomFeedback(),
        randomFeedback(),
        randomFeedback(),
        randomFeedback()
      ].join(" ")
    };
    const newArray = [...spiritScores, newScore];
    setSpiritScores(newArray);
  };
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <Typography>Demo Tools</Typography>
            </Grid>
            <Grid
              item
              xs={9}
              container
              spacing={1}
              alignItems="center"
              justify="flex-end"
            >
              <Grid item>
                <IconButton
                  onClick={handleDemoAdd}
                  color="primary"
                  style={{ background: "white" }}
                >
                  <Add />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="caption">Scores</Typography>
              </Grid>
              <Grid item>
                <IconButton
                  color="secondary"
                  style={{ background: "white" }}
                  onClick={() => setSpiritScores(initialScores)}
                >
                  <Replay />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <OrganizerView
        events={events}
        spiritScores={spiritScores}
        email={email}
        handleDelete={handleDelete}
        isLoading={isLoading}
      />

      <Grid container justify="center">
        <Grid item>
          <Link to="/createevent">
            <IconButton color="primary">
              <Add />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

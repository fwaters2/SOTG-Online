import React from "react";
import OrganizerView from "../OrgananizerView";
import langStrings from "../../../Assets/Lang/enSpirit2019.json";
import { initialEvents, initialScores, demoMatches } from "./DemoData";
import DemoToolBar from "./DemoToolBar";

export default function OrganizerDemo() {
  const [isLoading, setLoading] = React.useState(true);
  const [organizerEvents, setOrganizerEvents] = React.useState([]);
  const [playerEvents, setPlayerEvents] = React.useState([]);
  const [spiritScores, setSpiritScores] = React.useState([]);
  const [matches, setMatches] = React.useState(demoMatches);
  const email = "demo@demo.com";

  React.useEffect(() => {
    //This One Grabs the Organizer Events
    setOrganizerEvents(initialEvents.filter(x => x.email === email));
  }, [email]);
  React.useEffect(() => {
    //This one gets the scores for each event for this user
    setSpiritScores(initialScores);
    setLoading(false);
  }, [email]);
  React.useEffect(() => {
    //This one grabs the unique PLAYER Events
    const mySubmissions = demoMatches.filter(
      match =>
        match.team1SubmittedBy === email || match.team2SubmittedBy === email
    );
    const uniqueEventNames = [
      ...new Set(mySubmissions.map(obj => obj.eventName))
    ];
    const uniqueEvents = uniqueEventNames.map(event => ({
      email,
      eventName: event,
      role: "Player",
      teams: []
    }));
    setPlayerEvents(uniqueEvents);
  }, [email]);

  const handleDelete = id => () => {
    setSpiritScores(spiritScores.filter(x => x.id !== id));
  };

  return (
    <div>
      <DemoToolBar
        langStrings={langStrings}
        spiritScores={spiritScores}
        matches={matches}
        setSpiritScores={setSpiritScores}
        setMatches={setMatches}
      />
      <OrganizerView
        organizerEvents={organizerEvents}
        playerEvents={playerEvents}
        spiritScores={spiritScores}
        email={email}
        handleDelete={handleDelete}
        isLoading={isLoading}
        matches={matches}
        setMatches={setMatches}
      />
    </div>
  );
}

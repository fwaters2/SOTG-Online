import React from 'react';
import Firebase from '../../Utils/Firebase';
import OrganizerView from './OrganizerView';
import onlyUnique from '../../Utils/onlyUnique';

export default function OrganizerState({ user }) {
  const { email } = user;
  const [isLoading, setLoading] = React.useState(true);
  const [organizerEvents, setOrganizerEvents] = React.useState([]);
  const [playerEvents, setPlayerEvents] = React.useState([]);
  const [spiritScores, setSpiritScores] = React.useState([]);
  const [matches, setMatches] = React.useState([]);
  const [receivedScores, setRecievedScores] = React.useState([]);
  const [organizerMatches, setOrganizerMatches] = React.useState([]);

  // STEP 2: Grab the user's events
  React.useEffect(() => {
    const eventRef = Firebase.firestore().collection('events');
    const scoreRef = Firebase.firestore().collection('spiritScores');
    const matchRef = Firebase.firestore().collection('matches');

    eventRef.where('email', '==', email).onSnapshot(snapshot => {
      const fbArray = snapshot.docs.map(doc => ({
        id: doc.id,
        role: 'Organizer',
        ...doc.data(),
      }));
      setOrganizerEvents(fbArray);

      const allEventTitles = ['no matches', ...fbArray.map(x => x.eventName)];

      const organizerMatches = [];
      matchRef.where('eventName', 'in', allEventTitles).onSnapshot(snapshot => {
        const fbArray = snapshot.docs.map(doc => doc.data());
        organizerMatches.push(...fbArray);
      });
      setOrganizerMatches(organizerMatches);
    });

    scoreRef.onSnapshot(snapshot => {
      const fbArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSpiritScores(fbArray);
    });

    let reciprocatedScoreIds = ['none found'];

    matchRef
      .where('completed', '==', true)
      .where('team1SubmittedBy', '==', email)
      .onSnapshot(snapshot => {
        const fbArray = snapshot.docs.map(doc => doc.data());
        reciprocatedScoreIds = [...reciprocatedScoreIds, ...fbArray.map(x => x.team2SubmissionId)];
      });
    matchRef
      .where('completed', '==', true)
      .where('team2SubmittedBy', '==', email)
      .onSnapshot(snapshot => {
        const fbArray = snapshot.docs.map(doc => doc.data());
        reciprocatedScoreIds = [...reciprocatedScoreIds, ...fbArray.map(x => x.team1SubmissionId)];
        scoreRef.where('id', 'in', reciprocatedScoreIds).onSnapshot(snapshot => {
          const fbArray = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecievedScores(fbArray);
        });
      });

    scoreRef.where('submittedBy', '==', email).onSnapshot(snapshot => {
      const fbArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      const uniqueEvents = fbArray.map(x => x.eventName).filter(onlyUnique);
      const playerEvents = uniqueEvents.map(event => ({
        role: 'Player',
        eventName: event,
        // submissions:[]//this will be the submissions for this event
      }));
      setPlayerEvents(playerEvents);
      setLoading(false);
    });
  }, []);

  return (
    <OrganizerView
      email={email}
      isLoading={isLoading}
      // To-do separate these better
      organizerEvents={organizerEvents}
      playerEvents={playerEvents}
      spiritScores={spiritScores}
      matches={organizerMatches}
    />
  );
}

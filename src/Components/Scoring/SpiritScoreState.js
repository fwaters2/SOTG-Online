import React, { useEffect, useState } from 'react';
import Firebase from '../../Utils/Firebase';
import Stepper from './Stepper/Index';
import SpiritScoreView from './SpiritScoreView';
import EnglishText from '../../Assets/Lang/enSpirit.json';

export default function SpiritScoreState({ user, match }) {
  const [lang, setLang] = React.useState('en');
  const [step, setStep] = React.useState(0);
  const [exists, setExists] = useState(true);
  const [eventData, setEventData] = useState({
    name: 'Searching for Event...',
    email: '',
    teams: [],
  });
  const [formResponses, setFormResponses] = React.useState({
    myTeam: 'Select',
    opponent: 'Select',
    rules: 2,
    rulesFeedback: '',
    rulesExamples: [],
    fouls: 2,
    foulsFeedback: '',
    foulsExamples: [],
    fairness: 2,
    fairnessFeedback: '',
    fairnessExamples: [],
    attitude: 2,
    attitudeFeedback: '',
    attitudeExamples: [],
    communication: 2,
    communicationFeedback: '',
    communicationExamples: [],
    feedback: '',
    email: eventData.email,
    submittedBy: user.email,
  });
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const [isSignInDialogOpen, toggleSignInDialog] = React.useState(false);
  const spiritTexts = { en: EnglishText };
  const currentLanguage = spiritTexts[lang];
  const handleSubmit = () => {
    const {
      myTeam,
      opponent,
      rules,
      rulesFeedback,
      rulesExamples,
      fouls,
      foulsExamples,
      fairness,
      fairnessExamples,
      fairnessFeedback,
      attitude,
      attitudeExamples,
      attitudeFeedback,
      communication,
      communicationExamples,
      communicationFeedback,
      feedback,
      submittedBy,
    } = formResponses;
    Firebase.firestore()
      .collection('spiritScores')
      .add({
        eventName: eventData.name,
        email: eventData.email,
        myTeam,
        opponent,
        rules,
        rulesFeedback,
        rulesExamples,
        fouls,
        foulsExamples,
        fairness,
        fairnessExamples,
        fairnessFeedback,
        attitude,
        attitudeExamples,
        attitudeFeedback,
        communication,
        communicationExamples,
        communicationFeedback,
        feedback,
        created: Firebase.firestore.FieldValue.serverTimestamp(),
        submittedBy: submittedBy || null,
      });
  };
  const handleFormSubmit = () => {
    toggleSignInDialog(false);
    toggleDialog(true);
    handleSubmit();
  };
  const { event } = match.params;
  useEffect(() => {
    // Get all events where slug = the url
    const eventRef = Firebase.firestore()
      .collection('events')
      .where('slug', '==', event);
    // attempt with get
    const unsubscribe = eventRef
      .get()
      .then(doc => {
        // see if it exists
        const eventExists = doc.docs.length !== 0;
        if (eventExists) {
          const event = doc.docs[0].data();
          setEventData({
            name: event.eventName,
            email: event.email,
            teams: event.teams,
          });

          console.log('Event data:', event);
        } else {
          setExists(false);
          console.log('No such event!');
        }
      })
      .catch(function(error) {
        console.log('Error getting event:', error);
      });
    return () => unsubscribe;
  }, [event]);

  return exists ? (
    <Stepper
      step={step}
      formResponses={formResponses}
      setFormResponses={setFormResponses}
      currentLanguage={currentLanguage}
      lang={lang}
      setLang={setLang}
      steps={[
        eventData.name,
        'Rules Knowledge and Use',
        'Fouls and Body Contact',
        'Fair-Mindedness',
        'Positive Attitude and Self-Control',
        'Communication',
        'Summary',
      ]}
      stepContent={
        <SpiritScoreView
          step={step}
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          data={eventData}
          setStep={setStep}
          handleFormSubmit={handleFormSubmit}
          isDialogOpen={isDialogOpen}
          currentLanguage={currentLanguage}
          user={user}
          isSignInDialogOpen={isSignInDialogOpen}
          toggleSignInDialog={toggleSignInDialog}
        />
      }
    />
  ) : (
    <h1>No such event found!</h1>
  );
}

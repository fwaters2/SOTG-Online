import React from 'react';
import { Button, ButtonGroup, Box, FormControl, InputBase } from '@material-ui/core';
import AddTeam from './AddTeam';
import StyledFormLabel from '../StyledFormLabel';
import string_to_slug from '../../Utils/slugify';
import EmailVerification from './EmailVerification';
import AlreadySignedIn from './AlreadySignedIn';

export default function EventCreationView({
  step,
  setStep,
  formResponses,
  setFormResponses,
  currentLanguage,
  user,
  createEvent,
}) {
  const handleBack = () => {
    setStep(step - 1);

    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    });
  };

  function isBlank(input) {
    return input === '';
  }
  const handleEventNameCreate = e => {
    e.preventDefault();
    function actions() {
      setFormResponses({
        ...formResponses,
        slug: string_to_slug(formResponses.eventName),
      });
      setStep(step + 1);
    }
    isBlank(formResponses.eventName) ? alert('Please Create a Name for your Event') : actions();
  };
  const handleNext = () => {
    formResponses.teams.length < 2
      ? alert('Please create at least 2 teams to continue')
      : setStep(step + 1);
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    });
  };
  switch (step) {
    case 0:
      return (
        <>
          <Box mt={2} mb={2}>
            <form onSubmit={handleEventNameCreate}>
              <StyledFormLabel>Event Name</StyledFormLabel>
              <FormControl variant="outlined" color="secondary">
                <InputBase
                  error
                  style={{ padding: '.5em 1em' }}
                  type="text"
                  placeholder="Event Name"
                  value={formResponses.eventName}
                  onChange={e =>
                    setFormResponses({
                      ...formResponses,
                      eventName: e.target.value,
                    })
                  }
                />
              </FormControl>
            </form>
          </Box>
          <Button fullWidth variant="contained" color="primary" onClick={handleEventNameCreate}>
            Create
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <AddTeam formResponses={formResponses} setFormResponses={setFormResponses} />
          <ButtonGroup fullWidth>
            <Button
              variant="contained"
              color="default"
              onClick={handleBack}
              style={{ color: 'black' }}
            >
              {currentLanguage.general.back}
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {currentLanguage.general.next}
            </Button>
          </ButtonGroup>
        </>
      );
    case 2:
      return user ? (
        <AlreadySignedIn
          formResponses={formResponses}
          createEvent={createEvent}
          setFormResponses={setFormResponses}
          step={step}
          setStep={setStep}
          user={user}
        />
      ) : (
        <EmailVerification
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          step={step}
          setStep={setStep}
        />
      );

    default:
      return <div>Step Not Found</div>;
  }
}

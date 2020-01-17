import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import TeamSelection from './TeamSelection';
import Category from './Category';
import Summary from './Summary';
import LastButtons from './Stepper/LastButtons';
import SignInDialog from './SignInDialog';

export default function SpiritScoreView({
  step,
  formResponses,
  setFormResponses,
  data,
  setStep,
  handleFormSubmit,
  isDialogOpen,
  currentLanguage,
  user,
  isSignInDialogOpen,
  handleSignInClose,
  toggleSignInDialog,
}) {
  switch (step) {
    case 0:
      return (
        <TeamSelection
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          teams={data.teams}
          step={step}
          setStep={setStep}
        />
      );
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return (
        <Category
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          step={step}
          setStep={setStep}
          currentLanguage={currentLanguage}
        />
      );
    case 6:
      return (
        <>
          <Summary
            step={step}
            setStep={setStep}
            formResponses={formResponses}
            setFormResponses={setFormResponses}
            isDialogOpen={isDialogOpen}
            currentLanguage={currentLanguage}
          />

          <LastButtons
            step={step}
            setStep={setStep}
            handleSubmit={user ? handleFormSubmit : () => toggleSignInDialog(true)}
            label="Submit"
          />

          <Dialog open={isDialogOpen} onClose={() => window.location.reload()}>
            <DialogTitle>Thanks for Scoring!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {formResponses.submittedBy ? (
                  <>
                    <Typography>
                      Sign in to see any responses or review your submissions!
                    </Typography>
                    <Button
                      component={Link}
                      variant="contained"
                      color="primary"
                      fullWidth
                      to="/login"
                    >
                      Log In
                    </Button>
                  </>
                ) : (
                  'Your response has been submitted to the organizer!'
                )}
              </DialogContentText>
            </DialogContent>
          </Dialog>

          <SignInDialog
            open={isSignInDialogOpen}
            handleSignInClose={handleSignInClose}
            formResponses={formResponses}
            setFormResponses={setFormResponses}
            currentLanguage={currentLanguage}
            isSignInDialogOpen={isSignInDialogOpen}
            toggleSignInDialog={toggleSignInDialog}
            onClose={handleFormSubmit}
          />
        </>
      );
    default:
      return 'Step Not Found';
  }
}

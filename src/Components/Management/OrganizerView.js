import React from 'react';
import { List } from '@material-ui/core';
import Standings from './Standings/Standings';
import DeleteDialog from './Dialogs/DeleteDialog';
import EditTeams from './Dialogs/EditTeams';
import Logo from '../../Assets/Loader/Spinner/Logo';
import StyledPaper from '../StyledPaper';
import Submissions from './Organizer/Submissions';
import EventCardOrganizer from './EventCardOrganizer';
import TitleWithBack from './TitleWithBack';
import PaperTitle from './PaperTitle';

export default function OrganizerView({
  organizerEvents,
  playerEvents,
  spiritScores,
  email,
  isLoading,
  matches,
}) {
  const [isViewingEvent, toggleEventView] = React.useState(false);
  const [currentEventInfo, setCurrentEventInfo] = React.useState({});
  const [currentScores, setCurrentScores] = React.useState([]);
  const [currentEvent, setCurrentEvent] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Dialogs
  const [isTeamDialogOpen, toggleTeamDialog] = React.useState(false);
  const [isDeleteDialogOpen, toggleDeleteDialog] = React.useState(false);
  const [settingsInfo, setSettingsInfo] = React.useState({
    name: '',
    id: '',
    teams: [],
    slug: '',
  });
  const [reciprocatedScores, setReciprocatedScores] = React.useState([]);

  React.useEffect(() => {
    setCurrentScores(spiritScores.filter(score => score.eventName === currentEvent));
  }, [spiritScores]);

  const handleSettings = info => e => {
    setAnchorEl(e.currentTarget);
    setSettingsInfo(info);
  };

  const handleClick = eventInfo => {
    setCurrentEventInfo(eventInfo);
    setCurrentEvent(eventInfo.eventName);
    setCurrentScores(spiritScores.filter(score => score.eventName === eventInfo.eventName));
    toggleEventView(true);
  };
  const handlePlayerClick = eventInfo => {
    setCurrentEventInfo(eventInfo);
    setCurrentEvent(eventInfo.eventName);

    const myReciprocatedScoreIds = matches
      .filter(x => x.eventName === eventInfo.eventName)
      .filter(thisEventsMatch => thisEventsMatch.completed)
      .filter(
        completedMatch =>
          completedMatch.team1SubmittedBy === email || completedMatch.team2SubmittedBy === email
      )
      .map(score =>
        score.team1SubmittedBy === email ? score.team2SubmissionId : score.team1SubmissionId
      );
    // ORIGINAL WORKS WITH DEMO
    const demoReciprocatedScores = myReciprocatedScoreIds.map(id => spiritScores[id]);
    console.log(demoReciprocatedScores);
    const loggedInReciprocatedScores = myReciprocatedScoreIds.map(id =>
      spiritScores.find(x => x.id === id)
    );
    const myReciprocatedScores = email ? loggedInReciprocatedScores : demoReciprocatedScores;
    setReciprocatedScores(myReciprocatedScores);
    setCurrentScores(
      spiritScores.filter(
        score => score.eventName === eventInfo.eventName && score.submittedBy === email
      )
    );
    toggleEventView(true);
  };
  const handleMenuDelete = () => {
    setAnchorEl(null);
    toggleDeleteDialog(true);
  };
  const handleMenuTeams = () => {
    setAnchorEl(null);
    toggleTeamDialog(true);
  };
  const handleMenuCopy = x => {
    setAnchorEl(null);
    alert(`http://SOTG.online/${settingsInfo.slug}`);
  };

  return (
    <StyledPaper>
      {isViewingEvent ? (
        <TitleWithBack toggleEventView={toggleEventView}>
          {currentEventInfo.eventName}
        </TitleWithBack>
      ) : (
        <PaperTitle>Choose Event</PaperTitle>
      )}
      {isViewingEvent ? (
        currentEventInfo.role === 'Organizer' ? (
          <Standings eventInfo={currentEventInfo} scores={currentScores} matches={matches} />
        ) : (
          <Submissions
            scores={currentScores}
            reciprocatedScores={reciprocatedScores}
            email={email}
          />
        )
      ) : (
        // This is the event choice page
        <List>
          {isLoading ? (
            <>
              <Logo />
            </>
          ) : (
            [...organizerEvents, ...playerEvents].map((x, index) => (
              <EventCardOrganizer
                key={index}
                x={x}
                anchorEl={anchorEl}
                handleMenuCopy={handleMenuCopy}
                handleMenuTeams={handleMenuTeams}
                handleMenuDelete={handleMenuDelete}
                spiritScores={spiritScores}
                handleSettings={handleSettings}
                setAnchorEl={setAnchorEl}
                handleClick={handleClick}
                handlePlayerClick={handlePlayerClick}
                email={email}
              />
            ))
          )}
        </List>
      )}
      <EditTeams
        settingsInfo={settingsInfo}
        open={isTeamDialogOpen}
        onClose={() => toggleTeamDialog(false)}
      />
      <DeleteDialog
        settingsInfo={settingsInfo}
        open={isDeleteDialogOpen}
        onClose={() => toggleDeleteDialog(false)}
      />
    </StyledPaper>
  );
}

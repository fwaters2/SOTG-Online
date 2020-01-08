export default function newMatch(previousMatches, newScore) {
  const { id, eventName, myTeam, opponent } = newScore;

  function query(spiritScore) {
    const matchToUpdateStep1 = previousMatches
      //only grab matches from this tourney
      .filter(tourney => tourney.eventName === spiritScore.eventName)
      //only uncomploted matches
      .filter(x => x.completed !== true)
      //only matches with the 2 relevant teams
      .filter(
        team =>
          (team.team1 === spiritScore.myTeam ||
            team.team1 === spiritScore.opponent) &&
          (team.team2 === spiritScore.myTeam ||
            team.team2 === spiritScore.opponent)
      );
    const matchToUpdate = matchToUpdateStep1
      //grab match where the score is missing
      .filter(uncompleted => {
        //find out if they are team 1 or team 2
        const teamNo =
          uncompleted.team1 === spiritScore.myTeam ? "team1" : "team2";
        return !uncompleted[teamNo + "Submitted"];
      });
    const status = matchToUpdate.length === 1 ? "updateMatch" : "newMatch";

    switch (status) {
      case "newMatch":
        return [
          ...previousMatches,
          {
            id,
            eventName,
            team1: myTeam,
            team1Submitted: true,
            team2: opponent
          }
        ];
      case "updateMatch": {
        const team =
          matchToUpdate[0].team1 === spiritScore.myTeam ? "team1" : "team2";
        previousMatches.find(x => x.id === matchToUpdate[0].id)[
          team + "Submitted"
        ] = true;
        previousMatches.find(x => x.id === matchToUpdate[0].id)[
          "completed"
        ] = true;

        return previousMatches;
      }
      default:
        return previousMatches;
    }
  }

  return query(newScore).sort(function(a) {
    if (a.completed) {
      return 1;
    }
    return -1;
  });
}

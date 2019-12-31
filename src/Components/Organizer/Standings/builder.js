export default function(eventInfo, scores) {
  const categories = [
    "rules",
    "fouls",
    "fairness",
    "attitude",
    "communication"
  ];
  const defaultScores = [-1, -1, -1, -1, -1];
  function sortData(b, a) {
    if (a.total < b.total) {
      return -1;
    }
    if (a.total > b.total) {
      return 1;
    }
    return 0;
  }

  return eventInfo.teams
    .map(team => ({
      team: team,
      subscores:
        scores.filter(score => score.opponent === team).length >= 1
          ? categories.map(
              cat =>
                Math.round(
                  (scores
                    .filter(score => score.opponent === team)
                    .map(x => x[cat])
                    .reduce((total, num) => total + num) /
                    scores.filter(score => score.opponent === team).length) *
                    10
                ) / 10
            )
          : defaultScores,
      total:
        scores.filter(score => score.opponent === team).length >= 1
          ? Math.round(
              (categories
                .map(cat =>
                  scores
                    //only scores for that team
                    .filter(score => score.opponent === team)
                    //grab points in each category
                    .map(x => x[cat])
                    //add them up
                    .reduce((total, num) => total + num)
                )
                .reduce((total, num) => total + num) /
                scores.filter(score => score.opponent === team).length) *
                10
            ) / 10
          : -1,
      individualGames: scores
        .filter(score => score.opponent === team)
        .map(x => ({
          opponent: x.myTeam,
          subscores: [
            x.rules,
            x.fouls,
            x.fairness,
            x.attitude,
            x.communication
          ],
          total: x.rules + x.fouls + x.fairness + x.attitude + x.communication,
          feedback: x.feedback
        }))
    }))
    .sort(sortData);
}

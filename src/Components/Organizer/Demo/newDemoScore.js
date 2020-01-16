import newMatch from "./newMatch";
import idGenerator from "../../../Utils/idGenerator";

export default function newDemoScore(
  initialEvents,
  langStrings,
  spiritScores,
  previousMatches
) {
  const randomTeam =
    initialEvents[0].teams[
      Math.floor(Math.random() * initialEvents[0].teams.length)
    ];
  const randomOpponent = initialEvents[0].teams.filter(x => x !== randomTeam)[
    Math.floor(Math.random() * (initialEvents[0].teams.length - 1))
  ];
  function randomFeedback() {
    const categories = [
      "rules",
      "fouls",
      "attitude",
      "fairness",
      "communication"
    ];
    const scores = [1, 2, 3, 4];
    function allStrings() {
      let newArray = [];
      categories.map(cat =>
        scores.map(score => {
          newArray = [...newArray, ...langStrings[cat].examples[score]];
        })
      );
      return newArray;
    }
    return allStrings()[Math.round(Math.random() * allStrings().length)] + " ";
  }
  function randomSpiritScore() {
    return Math.round(Math.random() * 4);
  }
  const newScore = {
    id: idGenerator(),
    eventName: "Demo Tourney",
    myTeam: randomTeam,
    opponent: randomOpponent,
    rules: randomSpiritScore(),
    rulesExamples: [],
    rulesFeedback: "",
    fouls: randomSpiritScore(),
    foulsExamples: [],
    foulsFeedback: "",
    fairness: randomSpiritScore(),
    fairnessExamples: [],
    fairnessFeedback: "",
    attitude: randomSpiritScore(),
    attitudeExamples: [],
    attitudeFeedback: "",
    communication: randomSpiritScore(),
    communicationExamples: [],
    communicationFeedback: "",
    feedback: [
      randomFeedback(),
      randomFeedback(),
      randomFeedback(),
      randomFeedback(),
      randomFeedback()
    ].join(" ")
  };

  return {
    newArray: [...spiritScores, newScore],
    matches: newMatch(previousMatches, newScore)
  };
}

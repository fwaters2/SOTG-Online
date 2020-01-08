export const initialEvents = [
  {
    email: "demo@demo.com",
    eventName: "Demo Tourney",
    slug: "demotourney",
    role: "Organizer",
    teams: [
      "Big Dumps",
      "Huck Buddies",
      "Kaohsiung Love",
      "Galaxy",
      "Team UFO",
      "SanMa",
      "Team Demo",
      "The Designated Drinkers"
    ]
  },
  {
    email: "demo@demo.com",
    eventName: "Another Demo Tourney",
    slug: "anotherdemotourney",
    role: "Organizer",
    teams: [
      "Big Dumps2",
      "Huck Buddies2",
      "Kaohsiung Love2",
      "Galaxy2",
      "Team UFO2",
      "SanMa2",
      "Team Demo2",
      "The Designated Drinkers2"
    ]
  },
  {
    email: "imaginary@demo.com",
    eventName: "Imaginary Tourney",
    slug: "demotourney",
    role: "Organizer",
    teams: [
      "Big Dumps",
      "Huck Buddies",
      "Kaohsiung Love",
      "Galaxy",
      "Team UFO",
      "SanMa",
      "Team Demo",
      "The Designated Drinkers"
    ]
  }
];

export const initialScores = [
  {
    id: 0,
    eventName: "Demo Tourney",
    myTeam: "Team Demo",
    submittedBy: "demo@demo.com",
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
    myTeam: "SanMa",
    opponent: "Team Demo",
    rules: 1,
    fouls: 2,
    fairness: 2,
    attitude: 2,
    communication: 2,
    feedback:
      "They adjusted their behavior based on our feedback in a way that improved the enjoyment of the game. They explained the game to spectators or new players. They exhibited the highest level of respect and positive attitude from start to finish. They kept to reasonable time lengths. The game flowed smoothly without frequent calls."
  },
  {
    id: 2,
    eventName: "Demo Tourney",
    myTeam: "Team Demo",
    submittedBy: "demo@demo.com",
    opponent: "Kaohsiung Love",
    rules: 1,
    fouls: 2,
    fairness: 1,
    attitude: 2,
    communication: 4,
    feedback:
      "They adjusted their behavior based on our feedback in a way that improved the enjoyment of the game. They explained the game to spectators or new players. They exhibited the highest level of respect and positive attitude from start to finish. They kept to reasonable time lengths. The game flowed smoothly without frequent calls."
  },
  {
    id: 1,
    eventName: "Demo Tourney",
    myTeam: "Galaxy",
    opponent: "Team Demo",
    rules: 0,
    fouls: 2,
    fairness: 1,
    attitude: 1,
    communication: 2,
    feedback:
      "They adjusted their behavior based on our feedback in a way that improved the enjoyment of the game. They explained the game to spectators or new players. They exhibited the highest level of respect and positive attitude from start to finish. They kept to reasonable time lengths. The game flowed smoothly without frequent calls."
  },
  {
    id: 1,
    eventName: "Another Tourney",
    myTeam: "Galaxy",
    opponent: "Team Demo",
    rules: 0,
    fouls: 2,
    fairness: 1,
    attitude: 1,
    communication: 2,
    feedback:
      "They adjusted their behavior based on our feedback in a way that improved the enjoyment of the game. They explained the game to spectators or new players. They exhibited the highest level of respect and positive attitude from start to finish. They kept to reasonable time lengths. The game flowed smoothly without frequent calls."
  }
];
export const demoMatches = [
  {
    id: 0,
    eventName: "Demo Tourney",
    //First Team
    team1: "Team Demo",
    team1Submitted: true,
    team1SubmittedBy: "demo@demo.com",
    team1SubmissionId: 0,
    //Second Team
    team2: "SanMa",
    team2Submitted: true,
    team2SubmittedBy: null,
    team2SubmissionId: 1,
    completed: true
  },
  {
    id: 1,
    eventName: "Demo Tourney",
    team1: "Team Demo",
    team1Submitted: true,
    team1SubmittedBy: "demo@demo.com",
    team1SubmissionId: 1,
    team2: "Kaohsiung Love",
    team2Submitted: false,
    team2SubmittedBy: null,
    team2SubmissionId: null,
    completed: false
  },
  {
    id: 2,
    eventName: "Demo Tourney",
    team1: "Galaxy",
    team1Submitted: true,
    team1SubmittedBy: null,
    team1SubmissionId: 1,
    team2: "Team Demo",
    team2Submitted: false,
    team2SubmittedBy: null,
    team2SubmissionId: null,
    completed: false
  },
  {
    id: 3,
    eventName: "Another Tourney",
    team1: "Galaxy",
    team1Submitted: true,
    team1SubmittedBy: null,
    team1SubmissionId: 1,
    team2: "Team Demo",
    team2Submitted: false,
    team2SubmittedBy: null,
    team2SubmissionId: null,
    completed: false
  }
];

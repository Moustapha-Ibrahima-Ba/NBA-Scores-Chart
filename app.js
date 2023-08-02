// API <=> DATA we need to build the table dynamically
const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

// Create container
const ulParent = document.createElement("ul");

// iterate through data
for (let game of warriorsGames) {
  // Create element
  const gameLi = document.createElement("li");
  // Access elements
  const { awayTeam, homeTeam } = game;
  const { team: aTeam, points: aPoints } = awayTeam; // Rename team (from awayTeam of game) by aTeam
  const { team: hTeam, points: hPoints } = homeTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  // Compare the scores
  let scores;
  if (aPoints > hPoints) {
    scores = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scores = `${aPoints}-<b>${hPoints}</b>`;
  }
  // Check where we have Golden State as a team
  const warriors = aTeam === "Golden State" ? awayTeam : homeTeam; // warriors is a reference to each object
  // Add the corresponding class
  gameLi.classList.add(warriors.isWinner ? "win" : "lost"); // Add the corresponding class depending on isWinner
  gameLi.innerHTML = `${teamNames} ${scores}`; // Add the content into the "li"
  ulParent.append(gameLi); // Add the liste "gameLi" into the "ul"
}

document.body.append(ulParent); // Add the "ul" into the body

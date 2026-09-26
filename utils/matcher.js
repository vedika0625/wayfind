function calculateMatch(destination, preferences) {
  let score = 0;

  if (destination.budget.includes(preferences.budget)) {
    score += 20;
  }

  if (destination.type.includes(preferences.type)) {
    score += 25;
  }

  if (destination.climate.includes(preferences.climate)) {
    score += 15;
  }

  if (destination.activities.includes(preferences.activity)) {
    score += 15;
  }

  if (destination.pace.includes(preferences.pace)) {
    score += 10;
  }

  if (destination.groups.includes(preferences.group)) {
    score += 5;
  }

  if (destination.duration.includes(Number(preferences.duration))) {
    score += 10;
  }

  return score;
}

function findMatches(destinations, preferences) {
  return destinations
    .map((destination) => ({
      ...destination,
      score: calculateMatch(destination, preferences)
    }))
    .sort((a, b) => b.score - a.score);
}

module.exports = {
  calculateMatch,
  findMatches
};
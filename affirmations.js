const affirmations = {
  happy: [
    "Shit yeah!",
    "YOU ARE A MARVELOUS BEAST AND A BADAS."
  ],
  sad: [
    "You tell me who did this! I'll GET THEM."
  ],
  anxious: [
    "Listen, shit's real scary but you're gonna get through it.",
    "Fear is the mindkiller."
  ],
  tired: [
    "But I am le tired.",
    "Drink some damn water and take a damn break."
  ],
  angry: [
    "May your house end up on CNN."
  ],
  confused: [
    "It hurt itself in its confusion."
  ],
  determined: [
    "I'm ready.",
    "LOOK OUT, FUCKERS."
  ],
};

function getRandomAffirmation(mood) {
  return affirmations[mood][
    Math.floor(Math.random() * affirmations[mood].length)
  ];
}

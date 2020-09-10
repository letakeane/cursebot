const affirmations = {
  happy: ['Today, you are brimming with energy and overflowing with joy!', ],
  sad: [''],
  scared: [],
  tired: [],
  angry: ['You have a right to healthy boundaries!'],
  confused: [],
  determined: []
};

function getRandomAffirmation(mood) {
  return affirmations[mood][Math.floor(Math.random() * affirmations[mood].length)];
}
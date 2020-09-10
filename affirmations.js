const affirmations = {
  happy: ['Today, you are brimming with energy and overflowing with joy!', 'Know yourself. Love yourself.', 'Your smile lights up the room!', 'Revel in the power of being you.'],
  sad: ['It\'s okay to be sad.', 'You are more than this heartache.', 'Sadness is you loving yourself enough to know that you deserve more.', 'You are worthy of happiness.'],
  anxious: ['Take deep breaths. You care so much!", "Tell me 3 things you can see right now.', 'Relax your shoulders and jaw.', 'Feel the ground gently and easily supporting you.'],
  tired: ['There is wisdom in your body. Listen when it tells you to rest!', 'Be sweet and gentle to yourself!', 'Stop and marvel at all the growth you\'ve been doing!', 'Peace is as worthy as productivity.', 'You deserve rest.'],
  angry: ['You have a right to healthy boundaries!', 'Be proud of your sense of justice!'],
  confused: ['It\'s okay to ask for help! You are worthy of other people\'s time.', 'Look for the helpers in your life!', 'What is this moment trying to teach you?'],
  determined: ['You deserve the life you want! Don\'t settle!', 'Free yourself from procrastination and take action!', 'Take pride and joy in your power!']
};

function getRandomAffirmation(mood) {
  return affirmations[mood][Math.floor(Math.random() * affirmations[mood].length)];
}
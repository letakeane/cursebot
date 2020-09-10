const affirmations = {
  happy: [
    "Today, you are brimming with energy and overflowing with joy!",
    "Know yourself. Love yourself.",
    "Your smile lights up the room!",
    "Revel in the power of being you.",
    "What a gift it is to be yourself in this moment!"
  ],
  sad: [
    "It's okay to be sad.",
    "You are more than this heartache.",
    "Sadness is you loving yourself enough to know that you deserve more.",
    "You are worthy of happiness.",
    "Your sadness is worthy of your time and attention."
  ],
  anxious: [
    "Breathe deeply. Feel your body and the movement of your breath.",
    "Look at how much you care! You are a treasure.",
    "Tell me 3 things you can reach out and touch right now.",
    "Relax your shoulders and jaw.",
    "Feel the ground gently and easily supporting you.",
    "Even if you are not fearless, you are courageous!"
  ],
  tired: [
    "There is wisdom in your body. Listen when it tells you to rest!",
    "Be sweet and gentle to yourself!",
    "Stop and marvel at all the growth you've been doing!",
    "Peace is as worthy as productivity.",
    "You deserve rest.",
    "Being alive is hard work! You don't need an excuse to relax.",
    "Taking time to care for yourself is still a generous act!"
  ],
  angry: [
    "You have a right to healthy boundaries!",
    "Be proud of your sense of justice!",
    "Anger illuminates your boundaries.",
    "Take a moment to appreciate your passion!",
    "Notice how your anger is driven by a desire for harmony.",
    "Recognize the effects of your actions in the world & people around you."
  ],
  confused: [
    "It's okay to ask for help! You are worthy of other people's time.",
    "Look for the helpers in your life!",
    "Take time to understand what this moment is trying to teach you.",
    "Knowing you don't understand is the first step of growth!",
    "See the abundance of your abilities and growth!",
    "You are in a state of exploration! See what you can find!"
  ],
  determined: [
    "You deserve the life you want! Don't settle!",
    "Free yourself from procrastination and take action!",
    "Take pride and joy in your power!",
    "You are radiant and full of vitality!"
  ],
};

function getRandomAffirmation(mood) {
  return affirmations[mood][
    Math.floor(Math.random() * affirmations[mood].length)
  ];
}

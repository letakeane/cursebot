// QUERY SELECTORS //
const beginButton = document.querySelector('.begin');
const speechBubble = document.querySelector('.speech-bubble');
const thoughtBubble = document.querySelector('.thought-bubble');
const changeMood = document.querySelector('.change-mood');
const another = document.querySelector('.another');
const light = document.querySelector('.light');
const eyes = document.querySelectorAll('.eye');
const eyeshine = document.querySelectorAll('.eye .shine');
const mouth = document.querySelector('.mouth');
let words = document.querySelector('.speech-bubble h2');

// SPEECH DEFINITIONS //
let SpeechRecognition;
let SpeechGrammarList;
let SpeechRecognitionEvent;
const grammar = '#JSGF V1.0; grammar moods; public <mood> = happy | sad | anxious | tired | angry | confused | determined ;'
let recognition;
let speechRecognitionList;
let mood;

// EVENT LISTENERS //
window.onload = initializeSpeech;
beginButton.addEventListener('click', () => speak('Why hello, friend! How are you feeling today?', true));
window.speechSynthesis.onvoiceschanged = function() {
  window.speechSynthesis.getVoices();
  beginButton.disabled = false;
};
another.addEventListener('click', () => speak(getRandomAffirmation(mood)));
changeMood.addEventListener('click', () => robotStopSpeaking(true));

// EVENT HANDLERS //
function initializeSpeech() {
  SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
}

function robotStartSpeaking(text) {
  speechBubble.classList.remove('hidden');
  thoughtBubble.classList.add('hidden');
  words.innerText = text;
  mouth.classList.add('speak');
}

function robotStopSpeaking(initial) {
  if (initial) {
    robotStartListening();
    setTimeout(() => {
      speechBubble.classList.add('hidden');
      thoughtBubble.classList.remove('hidden');
    }, 600);
  }

  mouth.classList.remove('speak');
  setTimeout(() => {
    changeMood.classList.remove('hidden');
    another.classList.remove('hidden');
  }, 600)
}

function robotStartListening() {
  // Create a new recognition instance
  recognition = new SpeechRecognition();
  // Create a new SpeechGrammarList instance 
  speechRecognitionList = new SpeechGrammarList();
  // Add our grammar string to the speechRecognitionList
  speechRecognitionList.addFromString(grammar, 1);
  // Tell recognition instance that its grammar is the speechRecognitionList
  recognition.grammars = speechRecognitionList;
  // Set other recognition data
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  // Tell recognition to update the mood & to speak when it receives a result
  recognition.onresult = function(event) {
    mood = event.results[0][0].transcript;

    speak(getRandomAffirmation(mood));
  }

  // Tell recognition to stop listening when the speaker stops talking
  recognition.onspeechend = function() {
    recognition.stop();
  }

  // Start listening!
  recognition.start();
}

function wakeUp() {
  beginButton.classList.add('hidden');
  eyes.forEach(eye => eye.classList.remove('asleep'));
  eyeshine.forEach(shine => shine.classList.remove('asleep'));
  light.classList.remove('asleep');
}

function speak(text, initial) {
  if (initial) wakeUp();
  
  robotStartSpeaking(text);
  synthVoice(text, initial)
}

function synthVoice(text, initial) {
  // Define the speechSynthesis object
  // Get the voices from the speechSynth object and specify the 11th voice
  // Create a new SpeechSynthesisUtterance instance
  // Tell the utterance its voice
  // Tell the utterance its text

  const synth = window.speechSynthesis;
  const thisVoice = synth.getVoices()[11];
  const utterance = new SpeechSynthesisUtterance();
  utterance.voice = thisVoice;
  utterance.text = text;

  // Tell the synth to speak the utterance
  synth.speak(utterance);

  utterance.addEventListener('end', () => robotStopSpeaking(initial));
}
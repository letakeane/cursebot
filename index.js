// QUERY SELECTORS //
const beginButton = document.querySelector('.begin');
const speechBubble = document.querySelector('.speech-bubble');
const thoughtBubble = document.querySelector('.thought-bubble');
const light = document.querySelector('.light');
const eyes = document.querySelectorAll('.eye');
const eyeshine = document.querySelectorAll('.eye .shine');
const mouth = document.querySelector('.mouth');
let words = document.querySelector('.speech-bubble h2');

// SPEECH DEFINITIONS //
let SpeechRecognition;
let SpeechGrammarList;
let SpeechRecognitionEvent;
const grammar = '#JSGF V1.0; grammar moods; public <mood> = happy | sad | scared | tired | angry | confused | determined ;'
let recognition;
let speechRecognitionList;

// EVENT LISTENERS //
window.onload = initializeSpeech;
beginButton.addEventListener('click', () => speak('Why hello, friend! How are you feeling today?', true));

// EVENT HANDLERS //
function initializeSpeech() {
  SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  recognition = new SpeechRecognition();
  speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}

function robotStartSpeaking(text) {
  speechBubble.classList.remove('hidden');
  thoughtBubble.classList.add('hidden');
  words.innerText = text;
  mouth.classList.add('speak');
}

function robotStopSpeaking() {
  setTimeout(() => {
    speechBubble.classList.add('hidden');
    thoughtBubble.classList.remove('hidden');
  }, 950);
  mouth.classList.remove('speak');
}

function wakeUp() {
  beginButton.classList.add('hidden');
  eyes.forEach(eye => eye.classList.remove('asleep'));
  eyeshine.forEach(shine => shine.classList.remove('asleep'));
  light.classList.remove('asleep');
}

function speak(text, initial) {
  if (initial) {
    wakeUp();
  }
  
  robotStartSpeaking(text);
  synthVoice(text)
}

function synthVoice(text) {
  const synth = window.speechSynthesis;
  const thisVoice = synth.getVoices()[11];
  const utterance = new SpeechSynthesisUtterance();
  utterance.voice = thisVoice;
  utterance.text = text;
  synth.speak(utterance);
  utterance.addEventListener('end', robotStopSpeaking);
}
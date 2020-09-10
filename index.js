const beginButton = document.querySelector('.begin');
const speechBubble = document.querySelector('.speech-bubble');
const thoughtBubble = document.querySelector('.thought-bubble');
const mouth = document.querySelector('.mouth');
let words = document.querySelector('h2');
let SpeechRecognition;
let SpeechGrammarList;
let SpeechRecognitionEvent;
const grammar = '#JSGF V1.0; grammar moods; public <mood> = happy | sad | scared | tired | angry | confused ;'
let recognition;
let speechRecognitionList;
// let synth;
// let myVoices;
// let myVoice;
// let speech;

window.onload = initializeSpeech;
beginButton.addEventListener('click', () => speak(true));

function initializeSpeech() {
  SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  recognition = new SpeechRecognition();
  speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;

  // synth = speechSynthesis;
  // myVoices = synth.getVoices();
  // myVoice = myVoices[10];

  // beginButton.disabled = false;
}

function robotStartSpeaking() {
  speechBubble.classList.remove('hidden');
  thoughtBubble.classList.add('hidden');
  mouth.classList.add('speak');
}

function robotStopSpeaking() {
  setTimeout(() => {
    speechBubble.classList.add('hidden');
    thoughtBubble.classList.remove('hidden');
  }, 1000);
  mouth.classList.remove('speak');
}

function speak(initial) {
  if (initial) {
    beginButton.classList.add('hidden');
  }
  
  robotStartSpeaking();
  synthVoice('Hello, friend! How are you feeling today?')
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


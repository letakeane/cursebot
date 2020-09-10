const speechBubble = document.querySelector('.speech-bubble');
const mouth = document.querySelector('.mouth');
let words = document.querySelector('h2');

let SpeechRecognition;
let SpeechGrammarList;
let SpeechRecognitionEvent;
const grammar = '#JSGF V1.0; grammar moods; public <mood> = happy | sad | scared | tired | angry | confused ;'
let recognition;
let speechRecognitionList;

window.onload = initializeSpeech;

function initializeSpeech() {
  SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  recognition = new SpeechRecognition();
  speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;

  setTimeout(function() {
    robotSpeakToggle();
  }, 1600)
}

function robotSpeakToggle() {
  speechBubble.classList.toggle('hidden');
  mouth.classList.toggle('speak');
}

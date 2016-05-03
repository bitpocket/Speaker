(function() {
  "use strict";

  angular
    .module("speakerApp")
    .service("speechService", speechService);

  speechService.$inject = ["$rootScope", "languages"];

  function speechService($rootScope, languages) {
    var utterance,
      voices,
      isRecognizing = false,
      recogizedPhrase = "say it ...",
      recognition = null;

    this.startSpeaking = function(phrase) {
      utterance.text = phrase.text;
      utterance.lang = phrase.language;
      utterance.rate = 1.0;

      if (phrase.language === languages.EN) {
        utterance.voice = voices.filter(function(voice) {
          return voice.name == 'Google UK English Male';
        })[0];
      }

      speechSynthesis.speak(utterance);
    };

    this.cancelSpeaking = function functionName() {
      window.speechSynthesis.cancel();
    };

    this.startRecongnition = function(phrase) {
      if (isRecognizing) {
        recognition.stop();
        isRecognizing = false;
      } else {
        recogizedPhrase = "say it ...";
        recognition.lang = phrase.language;
        recognition.start();
      }
    };

    this.stopRecongnition = function() {
      recognition.stop();
      speechRecognitionStateChanged(false, true);
    };

    var listenInit = function() {
      if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function() {
          isRecognizing = true;
          speechRecognitionStateChanged(true, false);
        };

        recognition.onerror = function(event) {
          recogizedPhrase = "There was a recognition error...";
          speechRecognitionStateChanged(false, true);
        };

        recognition.onend = function() {
          isRecognizing = false;
          speechRecognitionStateChanged(false, true);
        };

        recognition.onresult = function(event) {
          var interimTranscript = '';
          // Assemble the transcript from the array of results
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            var confid = event.results[i][0].confidence,
              confidFix = parseFloat(Math.round(confid * 100) / 100).toFixed(2);

            if (event.results[i].isFinal) {
              recogizedPhrase = event.results[i][0].transcript;
              recognition.stop();
              isRecognizing = false;
              console.log(recogizedPhrase, confidFix);
              speechRecognitionStateChanged(false, true);
              recognizedPhraseChanged(recogizedPhrase, confidFix);
            } else {
              recogizedPhrase = event.results[i][0].transcript;
              console.log(recogizedPhrase, confidFix);
              recognizedPhraseChanged(recogizedPhrase, confidFix);
            }
          }
        };

      }
    }

    function speechSyntheseStateChanged() {
      $rootScope.$broadcast("speechSyntheseStateChanged", speechSynthesis.speaking, speechSynthesis.paused);
    }

    function speechRecognitionStateChanged(started, stopped) {
      $rootScope.$broadcast("speechRecognitionStateChanged", started, stopped);
    }

    function recognizedPhraseChanged(recogizedPhrase, confidence) {
      $rootScope.$broadcast("recognizedPhraseChanged", {
        text: recogizedPhrase,
        confidence: confidence
      });
    }

    function init() {
      if ('speechSynthesis' in window) {
        utterance = new SpeechSynthesisUtterance();
        utterance.onstart = speechSyntheseStateChanged;
        utterance.onend = speechSyntheseStateChanged;
        utterance.onpause = speechSyntheseStateChanged;
        voices = window.speechSynthesis.getVoices();
      }
    }

    init();
    listenInit();
  }
})();

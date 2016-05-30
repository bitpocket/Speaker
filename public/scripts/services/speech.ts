module Speaker {

  export interface SpeechServiceInterface {

  }

  class SpeechService implements SpeechServiceInterface {
    static $inject = ["$rootScope"];
    $rootScope;
    utterance;
    voices
    isRecognizing = false;
    recogizedPhrase = "say it ...";
    recognition = undefined;

    constructor($rootScope) {
      this.$rootScope = $rootScope;
      this.init();
      this.listenInit();
    }

    public startSpeaking(phrase): void {
      this.utterance.text = phrase.text;
      this.utterance.lang = phrase.language;
      this.utterance.rate = 1.0;

      if (phrase.language === Languages.EN.id) {
        this.utterance.voice = this.voices.filter(function(voice) {
          return voice.name == 'Google UK English Male';
        })[0];
      }

      speechSynthesis.speak(this.utterance);
    };

    public cancelSpeaking(): void {
      window.speechSynthesis.cancel();
    };

    public startRecongnition(phrase): void {
      if (this.isRecognizing) {
        this.recognition.stop();
        this.isRecognizing = false;
      } else {
        this.recogizedPhrase = "say it ...";
        this.recognition.lang = phrase.language;
        this.recognition.start();
      }
    };

    public stopRecongnition(): void {
      this.recognition.stop();
      this.speechRecognitionStateChanged(false, true);
    };

    listenInit() {
      if ('webkitSpeechRecognition' in window) {
        let that = this;

        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onstart = function() {
          that.isRecognizing = true;
          that.speechRecognitionStateChanged(true, false);
        };

        this.recognition.onerror = function(event) {
          that.recogizedPhrase = "There was a recognition error...";
          that.speechRecognitionStateChanged(false, true);
        };

        this.recognition.onend = function() {
          that.isRecognizing = false;
          that.speechRecognitionStateChanged(false, true);
        };

        that.recognition.onresult = function(event) {
          var interimTranscript = '';
          // Assemble the transcript from the array of results
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            var confid = event.results[i][0].confidence,
              confidFix = parseFloat((Math.round(confid * 100) / 100).toString()).toFixed(2);

            if (event.results[i].isFinal) {
              that.recogizedPhrase = event.results[i][0].transcript;
              that.recognition.stop();
              that.isRecognizing = false;
              console.log(that.recogizedPhrase, confidFix);
              that.speechRecognitionStateChanged(false, true);
              that.recognizedPhraseChanged(that.recogizedPhrase, confidFix);
            } else {
              that.recogizedPhrase = event.results[i][0].transcript;
              console.log(that.recogizedPhrase, confidFix);
              that.recognizedPhraseChanged(that.recogizedPhrase, confidFix);
            }
          }
        };

      }
    }

    speechSyntheseStateChanged(that) {
      that.$rootScope.$broadcast("speechSyntheseStateChanged", speechSynthesis.speaking, speechSynthesis.paused);
    }

    speechRecognitionStateChanged(started, stopped) {
      this.$rootScope.$broadcast("speechRecognitionStateChanged", started, stopped);
    }

    recognizedPhraseChanged(recogizedPhrase, confidence) {
      this.$rootScope.$broadcast("recognizedPhraseChanged", {
        text: recogizedPhrase,
        confidence: confidence
      });
    }

    init() {
      if ('speechSynthesis' in window) {
        let that = this;
        this.utterance = new SpeechSynthesisUtterance();
        this.utterance.onstart = function() { that.speechSyntheseStateChanged(that) };
        this.utterance.onend = function() { that.speechSyntheseStateChanged(that) };
        this.utterance.onpause = function() { that.speechSyntheseStateChanged(that) };
        this.voices = window.speechSynthesis.getVoices();
      }
    }


  }

  angular
    .module("app")
    .service("speechService", SpeechService);
}

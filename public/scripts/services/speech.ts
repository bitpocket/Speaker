module Speaker {

  declare var webkitSpeechRecognition: any;
  declare var speechSynthesis: any;
  declare var SpeechSynthesisUtterance: any;

  export interface SpeechServiceInterface {
    playStopSentence(sentence: Sentence);
    startStopSpeechRecongnition(sentence: Sentence);
  }

  class SpeechService implements SpeechServiceInterface {
    static $inject = ["$rootScope"];
    $rootScope: ng.IScope;
    utterance: any;
    voices: any[];
    isRecognizing: boolean = false;
    recogizedPhrase: string = "say it ...";
    recognition: any = undefined;
    speechStateSpeaking: boolean = false;

    constructor($rootScope: ng.IScope) {
      this.$rootScope = $rootScope;
      this.init();
      this.listenInit();
    }

    public playStopSentence(sentence: Sentence): void {
      if (this.speechStateSpeaking) {
        this.cancelSpeaking();
      } else {
        this.startSpeaking(sentence);
      }
    }

    startSpeaking(sentence: Sentence): void {
      this.utterance.text = sentence.text;
      this.utterance.lang = sentence.language;
      this.utterance.rate = 1.0;

      if (sentence.language === Languages.EN.id) {
        this.utterance.voice = this.voices.filter((voice) => {
          return voice.name == 'Google UK English Male';
        })[0];
      }

      speechSynthesis.speak(this.utterance);
    };

    cancelSpeaking(): void {
      speechSynthesis.cancel();
    };

    public startStopSpeechRecongnition(sentence: Sentence): void {
      if (this.isRecognizing) {
        this.recognition.stop();
        this.isRecognizing = false;
      } else {
        this.recogizedPhrase = "say it ...";
        this.recognition.lang = sentence.language;
        this.recognition.start();
      }
    };

    listenInit(): void {
      if ('webkitSpeechRecognition' in window) {
        let that = this;

        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onstart = () => {
          that.isRecognizing = true;
          that.speechRecognitionStateChanged(true, false);
        };

        this.recognition.onerror = (event) => {
          that.recogizedPhrase = "There was a recognition error...";
          that.speechRecognitionStateChanged(false, true);
        };

        this.recognition.onend = () => {
          that.isRecognizing = false;
          that.speechRecognitionStateChanged(false, true);
        };

        that.recognition.onresult = (event: any) => {
          var interimTranscript = '';
          // Assemble the transcript from the array of results
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            var confid = event.results[i][0].confidence,
              confidFix = Utils.round(confid, 2);

            if (event.results[i].isFinal) {
              that.recogizedPhrase = event.results[i][0].transcript;
              that.recognition.stop();
              that.isRecognizing = false;
              console.log(that.recogizedPhrase, confidFix);
              that.speechRecognitionStateChanged(false, true);
              that.recognizedPhraseChanged(that.recogizedPhrase, confid);
            } else {
              that.recogizedPhrase = event.results[i][0].transcript;
              console.log(that.recogizedPhrase, confidFix);
              that.recognizedPhraseChanged(that.recogizedPhrase, confid);
            }
          }
        };

      }
    }

    speechSyntheseStateChanged(that: SpeechService): void {
      that.speechStateSpeaking = speechSynthesis.speaking;
      that.$rootScope.$broadcast("speechSyntheseStateChanged", speechSynthesis.speaking, speechSynthesis.paused);
    }

    speechRecognitionStateChanged(started: boolean, stopped: boolean): void {
      this.$rootScope.$broadcast("speechRecognitionStateChanged", started, stopped);
    }

    recognizedPhraseChanged(recogizedPhrase: string, confidence: number): void {
      this.$rootScope.$broadcast("recognizedPhraseChanged", recogizedPhrase, confidence);
    }

    init(): void {
      if ('speechSynthesis' in window) {
        let that = this;
        this.utterance = new SpeechSynthesisUtterance();
        this.utterance.onstart = () => { that.speechSyntheseStateChanged(that) };
        this.utterance.onend = () => { that.speechSyntheseStateChanged(that) };
        this.utterance.onpause = () => { that.speechSyntheseStateChanged(that) };
        this.voices = speechSynthesis.getVoices();
      }
    }


  }

  angular
    .module("app")
    .service("speechService", SpeechService);
}

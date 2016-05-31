module Speaker {
  class HomeController {
    // fields
    static $inject = ["$scope", "sentencesService", "speechService"];
    $scope: HomeControllerScopeInterface;
    sentencesService: SentencesServiceInterface;
    speechService: SpeechServiceInterface;

    // methods
    constructor($scope: HomeControllerScopeInterface, sentencesService: SentencesServiceInterface, speechService: SpeechServiceInterface) {
      this.$scope = $scope;
      this.sentencesService = sentencesService;
      this.speechService = speechService;
      this.$scope.language = Languages.EN;

      let that: HomeController = this;
      this.$scope.$on("sentencesListChanged", event => { that.sentencesListChanged(that) });
      this.$scope.$on("speechSyntheseStateChanged", (event, speaking, paused) => { that.speechSyntheseStateChanged(that, speaking, paused); });
      this.$scope.$on("recognizedPhraseChanged", (event, recognizedPhrase: string, confidence: number) => { that.recognizedPhraseChanged(that, recognizedPhrase, confidence); });
      this.$scope.$on("speechRecognitionStateChanged", (event, started, ended) => { that.speechRecognitionStateChanged(that, started, ended); });
      this.$scope.addSentence = (event, text: string) => { that.addSentence(that, event, text); };
      this.$scope.inputKeyPressed = (event, text: string) => { that.inputKeyPressed(that, event, text); };
      this.$scope.removeSentence = (event, sentence: Sentence) => { that.removeSentence(that, event, sentence); };
      this.$scope.selectSentence = (event, sentence: Sentence) => { that.selectSentence(that, event, sentence); };
      this.$scope.playStopSentence = (event, sentence: Sentence) => { that.playStopSentence(that, event, sentence); };
      this.$scope.startStopSpeechRecongnition = (event, sentence: Sentence) => { that.startStopSpeechRecongnition(that, event, sentence); };
      this.init();
    }

    init(): void {
      this.sentencesService.load(undefined, undefined);
      this.$scope.selectedSentence = this.$scope.sentences[0];
    }

    processParsedPhrase(recognizedPhrase: string, confidence: number): void {
      this.$scope.parsedSentence = SentencesDiff.getDiff(
        this.$scope.selectedSentence ? this.$scope.selectedSentence.text : "",
        recognizedPhrase,
        confidence
      );
    }

    sentencesListChanged(that: HomeController): void {
      that.$scope.sentences = that.sentencesService.sentences;
    }

    speechSyntheseStateChanged(that: HomeController, speaking: boolean, paused: boolean): void {
      that.$scope.speechStateSpeaking = speaking;
      that.$scope.speechStatePaused = paused;
      that.$scope.$apply();
    }

    recognizedPhraseChanged(that: HomeController, recognizedPhrase: string, confidence: number): void {
      that.processParsedPhrase(recognizedPhrase, confidence);
      that.$scope.$apply();
    }

    speechRecognitionStateChanged(that: HomeController, started, ended): void {
      that.$scope.recognitionSateStarted = started;
      that.$scope.recognitionSateEnded = ended;
      that.$scope.$apply();
    }

    addSentence(that: HomeController, event, test: string): void {
      that.sentencesService.addSentence(that.$scope.language, test);
      that.$scope.searchingPhrase = undefined;
      event.preventDefault();
    }

    removeSentence(that: HomeController, event, sentence: Sentence): void {
      that.sentencesService.removeSentence(sentence);
      event.preventDefault();
    }

    selectSentence(that: HomeController, event, sentence: Sentence): void {
      that.$scope.selectedSentence = sentence;
      that.$scope.parsedSentence = undefined;
      that.$scope.sentencesDiff = undefined;
      event.preventDefault();
    }

    inputKeyPressed(that: HomeController, event, text: string): boolean {
      if (event.keyCode == 13) {
        that.$scope.addSentence(event, text);
        return false; // returning false will prevent the event from bubbling up.
      } else {
        return true;
      }
    }

    playStopSentence(that: HomeController, event, sentence: Sentence): void {
      that.speechService.playStopSentence(sentence);
      event.preventDefault();
    }

    startStopSpeechRecongnition(that: HomeController, event, sentence: Sentence): void {
      that.speechService.startStopSpeechRecongnition(sentence);
      event.preventDefault();
    }
  }

  angular
    .module("app")
    .controller('homeController', HomeController);
}

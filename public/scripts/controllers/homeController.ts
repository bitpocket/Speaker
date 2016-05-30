module Speaker {

  class HomeController {
    static $inject = ["$scope", "sentencesService", "speechService"];
    $scope: HomeControllerScopeInterface;
    sentencesService: SentencesServiceInterface;
    speechService: SpeechServiceInterface;

    constructor($scope: HomeControllerScopeInterface, sentencesService: SentencesServiceInterface, speechService: SpeechServiceInterface) {
      this.$scope = $scope;
      this.sentencesService = sentencesService;
      this.speechService = speechService;
      this.$scope.language = Languages.EN;

      let that: HomeController = this;
      $scope.$on("sentencesListChanged", event => { that.sentencesListChanged(that) });
      $scope.$on("speechSyntheseStateChanged", (event, speaking, paused) => { that.speechSyntheseStateChanged(that, speaking, paused); });
      $scope.$on("recognizedPhraseChanged", (event, recognizedPhrase) => { that.recognizedPhraseChanged(that, recognizedPhrase); });
      $scope.$on("speechRecognitionStateChanged", (event, started, ended) => { that.speechRecognitionStateChanged(that, started, ended); });
      $scope.addSentence = (event, text: string) => { that.addSentence(that, event, text); };
      $scope.removeSentence = (event, sentence: Sentence) => { that.removeSentence(that, event, sentence); };
      $scope.selectSentence = (event, sentence: Sentence) => { that.selectSentence(that, event, sentence); };
      $scope.inputKeyPressed = (event, text: string) => { that.inputKeyPressed(that, event, text); };
      $scope.playSentence = (event, sentence: Sentence) => { that.playSentence(that, event, sentence); };
      $scope.startSpeechRecognition = (event, sentence: Sentence) => { that.startSpeechRecognition(that, event, sentence); };

      this.init();
    }

    init() {
      this.sentencesService.load(undefined, undefined);
      this.$scope.selectedSentence = this.$scope.sentences[0];
    }

    processParsedPhrase(recognizedPhrase: Sentence) {
      this.$scope.parsedSentence = recognizedPhrase;

      if (this.$scope.selectedSentence && this.$scope.selectedSentence.text && this.$scope.parsedSentence.text) {
        this.$scope.sentencesDiff = SentencesDiff.diffChars(this.$scope.selectedSentence.text, this.$scope.parsedSentence.text);
      }

      var confidence = recognizedPhrase.confidence,
        editDistance = SentencesDiff.getEditDistance(this.$scope.selectedSentence.text, this.$scope.parsedSentence.text),
        editDistanceNormalized = (1 - editDistance / this.$scope.selectedSentence.text.length),
        totalResult = Utils.round(editDistanceNormalized, 2);

      this.$scope.parsedSentence["editDistance"] = editDistanceNormalized;
      this.$scope.parsedSentence["totalResult"] = totalResult;
    }

    sentencesListChanged(that: HomeController) {
      that.$scope.sentences = that.sentencesService.sentences;
    }

    speechSyntheseStateChanged(that: HomeController, speaking: boolean, paused: boolean) {
      that.$scope.speechStateSpeaking = speaking;
      that.$scope.speechStatePaused = paused;
      that.$scope.$apply();
    }

    recognizedPhraseChanged(that: HomeController, recognizedPhrase) {
      that.processParsedPhrase(recognizedPhrase);
      that.$scope.$apply();
    }

    speechRecognitionStateChanged(that: HomeController, started, ended) {
      that.$scope.recognitionSateStarted = started;
      that.$scope.recognitionSateEnded = ended;
      that.$scope.$apply();
    }

    addSentence(that: HomeController, event, test: string) {
      that.sentencesService.addSentence(that.$scope.language, test);
      that.$scope.searchingPhrase = null;
      event.preventDefault();
    }

    removeSentence(that: HomeController, event, sentence: Sentence) {
      that.sentencesService.removeSentence(sentence);
      event.preventDefault();
    }

    selectSentence(that: HomeController, event, sentence: Sentence) {
      that.$scope.selectedSentence = sentence;
      that.$scope.parsedSentence = null;
      that.$scope.sentencesDiff = null;
      event.preventDefault();
    }

    inputKeyPressed(that: HomeController, event, text: string) {
      if (event.keyCode == 13) {
        that.$scope.addSentence(event, text);
        return false; // returning false will prevent the event from bubbling up.
      } else {
        return true;
      }
    }

    playSentence(that: HomeController, event, sentence: Sentence) {
      if (!that.$scope.speechStateSpeaking) {
        that.speechService.startSpeaking(that.$scope.selectedSentence);
      } else {
        that.speechService.cancelSpeaking();
      }

      event.preventDefault();
    }

    startSpeechRecognition(that: HomeController, event, sentence: Sentence) {
      if (!that.$scope.recognitionSateStarted) {
        that.speechService.startRecongnition(that.$scope.selectedSentence);
      } else {
        that.speechService.stopRecongnition();
      }
      event.preventDefault();
    }

    extend(ChildClass, ParentClass) {
      ChildClass.prototype = ParentClass();
      ChildClass.prototype.constructor = ChildClass;
    }

  }

  angular
    .module("app")
    .controller('homeController', HomeController);
}

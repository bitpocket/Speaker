var Speaker;
(function (Speaker) {
    var HomeController = (function () {
        // methods
        function HomeController($scope, sentencesService, speechService) {
            this.$scope = $scope;
            this.sentencesService = sentencesService;
            this.speechService = speechService;
            this.$scope.language = Speaker.Languages.EN;
            var that = this;
            this.$scope.$on("sentencesListChanged", function (event) { that.sentencesListChanged(that); });
            this.$scope.$on("speechSyntheseStateChanged", function (event, speaking, paused) { that.speechSyntheseStateChanged(that, speaking, paused); });
            this.$scope.$on("recognizedPhraseChanged", function (event, recognizedPhrase, confidence) { that.recognizedPhraseChanged(that, recognizedPhrase, confidence); });
            this.$scope.$on("speechRecognitionStateChanged", function (event, started, ended) { that.speechRecognitionStateChanged(that, started, ended); });
            this.$scope.addSentence = function (event, text) { that.addSentence(that, event, text); };
            this.$scope.inputKeyPressed = function (event, text) { that.inputKeyPressed(that, event, text); };
            this.$scope.removeSentence = function (event, sentence) { that.removeSentence(that, event, sentence); };
            this.$scope.selectSentence = function (event, sentence) { that.selectSentence(that, event, sentence); };
            this.$scope.playStopSentence = function (event, sentence) { that.playStopSentence(that, event, sentence); };
            this.$scope.startStopSpeechRecongnition = function (event, sentence) { that.startStopSpeechRecongnition(that, event, sentence); };
            this.init();
        }
        HomeController.prototype.init = function () {
            this.sentencesService.load(undefined, undefined);
            this.$scope.selectedSentence = this.$scope.sentences[0];
        };
        HomeController.prototype.processParsedPhrase = function (recognizedPhrase, confidence) {
            this.$scope.parsedSentence = Speaker.SentencesDiff.getDiff(this.$scope.selectedSentence ? this.$scope.selectedSentence.text : "", recognizedPhrase, confidence);
        };
        HomeController.prototype.sentencesListChanged = function (that) {
            that.$scope.sentences = that.sentencesService.sentences;
        };
        HomeController.prototype.speechSyntheseStateChanged = function (that, speaking, paused) {
            that.$scope.speechStateSpeaking = speaking;
            that.$scope.speechStatePaused = paused;
            that.$scope.$apply();
        };
        HomeController.prototype.recognizedPhraseChanged = function (that, recognizedPhrase, confidence) {
            that.processParsedPhrase(recognizedPhrase, confidence);
            that.$scope.$apply();
        };
        HomeController.prototype.speechRecognitionStateChanged = function (that, started, ended) {
            that.$scope.recognitionSateStarted = started;
            that.$scope.recognitionSateEnded = ended;
            that.$scope.$apply();
        };
        HomeController.prototype.addSentence = function (that, event, test) {
            that.sentencesService.addSentence(that.$scope.language, test);
            that.$scope.searchingPhrase = undefined;
            event.preventDefault();
        };
        HomeController.prototype.removeSentence = function (that, event, sentence) {
            that.sentencesService.removeSentence(sentence);
            event.preventDefault();
        };
        HomeController.prototype.selectSentence = function (that, event, sentence) {
            that.$scope.selectedSentence = sentence;
            that.$scope.parsedSentence = undefined;
            that.$scope.sentencesDiff = undefined;
            event.preventDefault();
        };
        HomeController.prototype.inputKeyPressed = function (that, event, text) {
            if (event.keyCode == 13) {
                that.$scope.addSentence(event, text);
                return false; // returning false will prevent the event from bubbling up.
            }
            else {
                return true;
            }
        };
        HomeController.prototype.playStopSentence = function (that, event, sentence) {
            that.speechService.playStopSentence(sentence);
            event.preventDefault();
        };
        HomeController.prototype.startStopSpeechRecongnition = function (that, event, sentence) {
            that.speechService.startStopSpeechRecongnition(sentence);
            event.preventDefault();
        };
        // fields
        HomeController.$inject = ["$scope", "sentencesService", "speechService"];
        return HomeController;
    }());
    angular
        .module("app")
        .controller('homeController', HomeController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=homeController.js.map
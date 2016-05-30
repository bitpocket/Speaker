var Speaker;
(function (Speaker) {
    var HomeController = (function () {
        function HomeController($scope, sentencesService, speechService) {
            this.$scope = $scope;
            this.sentencesService = sentencesService;
            this.speechService = speechService;
            this.$scope.language = Speaker.Languages.EN;
            var that = this;
            $scope.$on("sentencesListChanged", function (event) { that.sentencesListChanged(that); });
            $scope.$on("speechSyntheseStateChanged", function (event, speaking, paused) { that.speechSyntheseStateChanged(that, speaking, paused); });
            $scope.$on("recognizedPhraseChanged", function (event, recognizedPhrase) { that.recognizedPhraseChanged(that, recognizedPhrase); });
            $scope.$on("speechRecognitionStateChanged", function (event, started, ended) { that.speechRecognitionStateChanged(that, started, ended); });
            $scope.addSentence = function (event, text) { that.addSentence(that, event, text); };
            $scope.removeSentence = function (event, sentence) { that.removeSentence(that, event, sentence); };
            $scope.selectSentence = function (event, sentence) { that.selectSentence(that, event, sentence); };
            $scope.inputKeyPressed = function (event, text) { that.inputKeyPressed(that, event, text); };
            $scope.playSentence = function (event, sentence) { that.playSentence(that, event, sentence); };
            $scope.startSpeechRecognition = function (event, sentence) { that.startSpeechRecognition(that, event, sentence); };
            this.init();
        }
        HomeController.prototype.init = function () {
            this.sentencesService.load(undefined, undefined);
            this.$scope.selectedSentence = this.$scope.sentences[0];
        };
        HomeController.prototype.processParsedPhrase = function (recognizedPhrase) {
            this.$scope.parsedSentence = recognizedPhrase;
            if (this.$scope.selectedSentence && this.$scope.selectedSentence.text && this.$scope.parsedSentence.text) {
                this.$scope.sentencesDiff = Speaker.SentencesDiff.diffChars(this.$scope.selectedSentence.text, this.$scope.parsedSentence.text);
            }
            var confidence = recognizedPhrase.confidence, editDistance = Speaker.SentencesDiff.getEditDistance(this.$scope.selectedSentence.text, this.$scope.parsedSentence.text), editDistanceNormalized = (1 - editDistance / this.$scope.selectedSentence.text.length), totalResult = Speaker.Utils.round(editDistanceNormalized, 2);
            this.$scope.parsedSentence["editDistance"] = editDistanceNormalized;
            this.$scope.parsedSentence["totalResult"] = totalResult;
        };
        HomeController.prototype.sentencesListChanged = function (that) {
            that.$scope.sentences = that.sentencesService.sentences;
        };
        HomeController.prototype.speechSyntheseStateChanged = function (that, speaking, paused) {
            that.$scope.speechStateSpeaking = speaking;
            that.$scope.speechStatePaused = paused;
            that.$scope.$apply();
        };
        HomeController.prototype.recognizedPhraseChanged = function (that, recognizedPhrase) {
            that.processParsedPhrase(recognizedPhrase);
            that.$scope.$apply();
        };
        HomeController.prototype.speechRecognitionStateChanged = function (that, started, ended) {
            that.$scope.recognitionSateStarted = started;
            that.$scope.recognitionSateEnded = ended;
            that.$scope.$apply();
        };
        HomeController.prototype.addSentence = function (that, event, test) {
            that.sentencesService.addSentence(that.$scope.language, test);
            that.$scope.searchingPhrase = null;
            event.preventDefault();
        };
        HomeController.prototype.removeSentence = function (that, event, sentence) {
            that.sentencesService.removeSentence(sentence);
            event.preventDefault();
        };
        HomeController.prototype.selectSentence = function (that, event, sentence) {
            that.$scope.selectedSentence = sentence;
            that.$scope.parsedSentence = null;
            that.$scope.sentencesDiff = null;
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
        HomeController.prototype.playSentence = function (that, event, sentence) {
            if (!that.$scope.speechStateSpeaking) {
                that.speechService.startSpeaking(that.$scope.selectedSentence);
            }
            else {
                that.speechService.cancelSpeaking();
            }
            event.preventDefault();
        };
        HomeController.prototype.startSpeechRecognition = function (that, event, sentence) {
            if (!that.$scope.recognitionSateStarted) {
                that.speechService.startRecongnition(that.$scope.selectedSentence);
            }
            else {
                that.speechService.stopRecongnition();
            }
            event.preventDefault();
        };
        HomeController.prototype.extend = function (ChildClass, ParentClass) {
            ChildClass.prototype = ParentClass();
            ChildClass.prototype.constructor = ChildClass;
        };
        HomeController.$inject = ["$scope", "sentencesService", "speechService"];
        return HomeController;
    }());
    angular
        .module("app")
        .controller('homeController', HomeController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=homeController.js.map
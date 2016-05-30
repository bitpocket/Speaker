var Speaker;
(function (Speaker) {
    var SpeechService = (function () {
        function SpeechService($rootScope) {
            this.isRecognizing = false;
            this.recogizedPhrase = "say it ...";
            this.recognition = undefined;
            this.speechStateSpeaking = false;
            this.$rootScope = $rootScope;
            this.init();
            this.listenInit();
        }
        SpeechService.prototype.playStopSentence = function (sentence) {
            if (this.speechStateSpeaking) {
                this.cancelSpeaking();
            }
            else {
                this.startSpeaking(sentence);
            }
        };
        SpeechService.prototype.startSpeaking = function (sentence) {
            this.utterance.text = sentence.text;
            this.utterance.lang = sentence.language;
            this.utterance.rate = 1.0;
            if (sentence.language === Speaker.Languages.EN.id) {
                this.utterance.voice = this.voices.filter(function (voice) {
                    return voice.name == 'Google UK English Male';
                })[0];
            }
            speechSynthesis.speak(this.utterance);
        };
        ;
        SpeechService.prototype.cancelSpeaking = function () {
            speechSynthesis.cancel();
        };
        ;
        SpeechService.prototype.startStopSpeechRecongnition = function (sentence) {
            if (this.isRecognizing) {
                this.recognition.stop();
                this.isRecognizing = false;
            }
            else {
                this.recogizedPhrase = "say it ...";
                this.recognition.lang = sentence.language;
                this.recognition.start();
            }
        };
        ;
        SpeechService.prototype.listenInit = function () {
            if ('webkitSpeechRecognition' in window) {
                var that_1 = this;
                this.recognition = new webkitSpeechRecognition();
                this.recognition.continuous = true;
                this.recognition.interimResults = true;
                this.recognition.onstart = function () {
                    that_1.isRecognizing = true;
                    that_1.speechRecognitionStateChanged(true, false);
                };
                this.recognition.onerror = function (event) {
                    that_1.recogizedPhrase = "There was a recognition error...";
                    that_1.speechRecognitionStateChanged(false, true);
                };
                this.recognition.onend = function () {
                    that_1.isRecognizing = false;
                    that_1.speechRecognitionStateChanged(false, true);
                };
                that_1.recognition.onresult = function (event) {
                    var interimTranscript = '';
                    // Assemble the transcript from the array of results
                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        var confid = event.results[i][0].confidence, confidFix = Speaker.Utils.round(confid, 2);
                        if (event.results[i].isFinal) {
                            that_1.recogizedPhrase = event.results[i][0].transcript;
                            that_1.recognition.stop();
                            that_1.isRecognizing = false;
                            console.log(that_1.recogizedPhrase, confidFix);
                            that_1.speechRecognitionStateChanged(false, true);
                            that_1.recognizedPhraseChanged(that_1.recogizedPhrase, confid);
                        }
                        else {
                            that_1.recogizedPhrase = event.results[i][0].transcript;
                            console.log(that_1.recogizedPhrase, confidFix);
                            that_1.recognizedPhraseChanged(that_1.recogizedPhrase, confid);
                        }
                    }
                };
            }
        };
        SpeechService.prototype.speechSyntheseStateChanged = function (that) {
            that.speechStateSpeaking = speechSynthesis.speaking;
            that.$rootScope.$broadcast("speechSyntheseStateChanged", speechSynthesis.speaking, speechSynthesis.paused);
        };
        SpeechService.prototype.speechRecognitionStateChanged = function (started, stopped) {
            this.$rootScope.$broadcast("speechRecognitionStateChanged", started, stopped);
        };
        SpeechService.prototype.recognizedPhraseChanged = function (recogizedPhrase, confidence) {
            this.$rootScope.$broadcast("recognizedPhraseChanged", recogizedPhrase, confidence);
        };
        SpeechService.prototype.init = function () {
            if ('speechSynthesis' in window) {
                var that_2 = this;
                this.utterance = new SpeechSynthesisUtterance();
                this.utterance.onstart = function () { that_2.speechSyntheseStateChanged(that_2); };
                this.utterance.onend = function () { that_2.speechSyntheseStateChanged(that_2); };
                this.utterance.onpause = function () { that_2.speechSyntheseStateChanged(that_2); };
                this.voices = speechSynthesis.getVoices();
            }
        };
        SpeechService.$inject = ["$rootScope"];
        return SpeechService;
    }());
    angular
        .module("app")
        .service("speechService", SpeechService);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=Speech.js.map
var SpeakService = (function () {
    function SpeakService() {
        this.recognition = null;
        this.recognizing = false;
        this.recogizedPhrase = '';
        this.listenInit();
    }
    SpeakService.prototype.speak = function (phrase, CallBackScope) {
        this.CallBackScope = CallBackScope;
        var u = new SpeechSynthesisUtterance(), that = this;
        u.text = phrase.text;
        u.lang = phrase.languageId;
        u.rate = 1.0;
        u.onend = function () {
            that.listen(phrase);
        };
        speechSynthesis.speak(u);
    };
    SpeakService.prototype.listen = function (phrase) {
        if (this.isRecognizing()) {
            this.recognition.stop();
        }
        else {
            this.recognition.lang = phrase.languageId;
            this.recognition.start();
        }
    };
    SpeakService.prototype.isRecognizing = function () {
        return this.recognizing;
    };
    ;
    SpeakService.prototype.getRecogizedPhrase = function () {
        return this.recogizedPhrase || 'Say it ...';
    };
    ;
    SpeakService.prototype.listenInit = function () {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            var that = this;
            this.recognition.onstart = function () {
                that.recognizing = true;
            };
            this.recognition.onerror = function (event) {
                that.recogizedPhrase = "There was a recognition error...";
            };
            this.recognition.onend = function () {
                that.recognizing = false;
            };
            this.recognition.onresult = function (event) {
                var interimTranscript = '';
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    var confid = event.results[i][0].confidence, confidFix = parseFloat((Math.round(confid * 100) / 100).toFixed()).toFixed(2);
                    if (event.results[i].isFinal) {
                        that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
                        that.recognition.stop();
                        that.recognizing = false;
                        console.log(that.recogizedPhrase);
                    }
                    else {
                        that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
                        console.log(that.recogizedPhrase);
                    }
                    if (that.CallBackScope) {
                        that.CallBackScope.testcallback(888);
                    }
                }
            };
        }
    };
    return SpeakService;
})();
exports.SpeakService = SpeakService;
//# sourceMappingURL=speakService.js.map
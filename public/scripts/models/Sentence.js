var Speaker;
(function (Speaker) {
    var Sentence = (function () {
        function Sentence(language, text) {
            this.text = text;
            this.language = language;
            this.uuid = Speaker.Utils.getUuid();
        }
        return Sentence;
    }());
    Speaker.Sentence = Sentence;
})(Speaker || (Speaker = {}));
//# sourceMappingURL=sentence.js.map
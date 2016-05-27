var Speaker;
(function (Speaker) {
    var SentencesService = (function () {
        function SentencesService($rootScope) {
            this.localStorageKey = "speakerSentences";
            this.$rootScope = $rootScope;
        }
        SentencesService.prototype.getSentencesFromLocalStorage = function () {
            var stringSentences = window.localStorage.getItem(this.localStorageKey) || '[]';
            return JSON.parse(stringSentences);
        };
        SentencesService.prototype.setSentencesToLocalStorage = function (sentences) {
            var stringSentences = JSON.stringify(sentences);
            window.localStorage.setItem(this.localStorageKey, stringSentences);
        };
        SentencesService.prototype.getDefaultSentences = function () {
            return [
                new Speaker.Sentence(Speaker.Languages.EN.id, "The show lets us see the very familiar through fresh eyes."),
                new Speaker.Sentence(Speaker.Languages.EN.id, "Guests reaction vary from genuine enthisiasm, to absolute loathing: 'I couldn't bear it'"),
                new Speaker.Sentence(Speaker.Languages.EN.id, "He encourage his guests to undertake chellenges such as constructing flat-pack furniture."),
                new Speaker.Sentence(Speaker.Languages.EN.id, "Do you mind me asking if you’re in a relationship?"),
                new Speaker.Sentence(Speaker.Languages.EN.id, "I felt very awkward about it."),
            ];
        };
        SentencesService.prototype.removeSentence = function (sentence) {
            var index = this.sentences.indexOf(sentence);
            if (index > -1) {
                this.sentences.splice(index, 1);
            }
            this.$rootScope.$broadcast("sentencesListChanged");
            this.save(undefined, undefined);
        };
        SentencesService.prototype.load = function (success, error) {
            this.sentences = this.getSentencesFromLocalStorage();
            if (!this.sentences || !this.sentences.length) {
                this.sentences = this.getDefaultSentences();
            }
            if (success)
                success(this.sentences);
            this.$rootScope.$broadcast("sentencesListChanged");
        };
        SentencesService.prototype.save = function (success, error) {
            this.setSentencesToLocalStorage(this.sentences);
            if (success)
                success("OK");
        };
        SentencesService.prototype.addSentence = function (language, text) {
            this.sentences.push(new Speaker.Sentence(language.id, text));
            this.$rootScope.$broadcast("sentencesListChanged");
            this.save(undefined, undefined);
        };
        SentencesService.$inject = ["$rootScope"];
        return SentencesService;
    }());
    Speaker.SentencesService = SentencesService;
    angular
        .module("app")
        .service("sentencesService", SentencesService);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=sentences.js.map
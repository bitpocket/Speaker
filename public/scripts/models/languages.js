var Speaker;
(function (Speaker) {
    var Languages = (function () {
        function Languages() {
        }
        // fields
        Languages.CS = new Speaker.Language("CS", "cs-CS");
        Languages.EN = new Speaker.Language("GB", "en-GB");
        Languages.ES = new Speaker.Language("ES", "es-ES");
        Languages.DE = new Speaker.Language("DE", "de-DE");
        Languages.IT = new Speaker.Language("IT", "it-IT");
        Languages.PL = new Speaker.Language("PL", "pl-PL");
        Languages.PT = new Speaker.Language("PT", "pt-PT");
        Languages.SK = new Speaker.Language("SK", "sk-SK");
        return Languages;
    }());
    Speaker.Languages = Languages;
})(Speaker || (Speaker = {}));
//# sourceMappingURL=languages.js.map
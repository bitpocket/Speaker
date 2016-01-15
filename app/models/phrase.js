System.register(['../utils/uuid'], function(exports_1) {
    var uuid_1;
    var Phrase;
    return {
        setters:[
            function (uuid_1_1) {
                uuid_1 = uuid_1_1;
            }],
        execute: function() {
            Phrase = (function () {
                function Phrase(text, languageId) {
                    this.text = text;
                    this.languageId = languageId;
                    this.uuid = uuid_1.UUID();
                }
                return Phrase;
            })();
            exports_1("Phrase", Phrase);
        }
    }
});
//# sourceMappingURL=phrase.js.map
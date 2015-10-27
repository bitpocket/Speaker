var uuid_1 = require('../utils/uuid');
var Phrase = (function () {
    function Phrase(text, languageId) {
        this.text = text;
        this.languageId = languageId;
        this.uuid = uuid_1.UUID();
    }
    return Phrase;
})();
exports.Phrase = Phrase;
//# sourceMappingURL=phrase.js.map
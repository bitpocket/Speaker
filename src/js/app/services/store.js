var languages_1 = require('../models/languages');
var Store = (function () {
    function Store() {
        this.value = '';
    }
    Store.prototype.loadPhrases = function () {
        var res = this.getDefaultPhrases();
        return res;
    };
    Store.prototype.savePhrases = function (phrases) {
    };
    Store.prototype.getAllPhrases = function () {
        if (!this.allPhrases) {
            this.allPhrases = this.loadPhrases();
        }
        return this.allPhrases;
    };
    Store.prototype.getAllPhrasesByLanguage = function (languageId) {
        var allPhrases = this.getAllPhrases(), res = allPhrases.filter(function (item) { return item.languageId === languageId; });
        return res;
    };
    Store.prototype.getDefaultPhrases = function () {
        var res = [
            {
                text: "I'd just like a word with you, if I might.",
                languageId: languages_1.EN,
                uuid: "1"
            },
            {
                text: "God always had the final word.",
                languageId: languages_1.EN,
                uuid: "2"
            },
            {
                text: "Dass ein eigenes Zuhause durch nichts zu ersetzen ist.",
                languageId: languages_1.DE,
                uuid: "3"
            },
            {
                text: "wiadereczko z wodą",
                languageId: languages_1.PL,
                uuid: "4"
            }
        ];
        return res;
    };
    Store.prototype.getValue = function () {
        return this.value;
    };
    Store.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    return Store;
})();
exports.Store = Store;
//# sourceMappingURL=store.js.map
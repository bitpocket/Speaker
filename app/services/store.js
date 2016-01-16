System.register(['../models/languages'], function(exports_1) {
    var languages_1;
    var Store;
    return {
        setters:[
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store() {
                    this.defaultPhrases = [
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
                    this.value = '';
                }
                Store.prototype.loadPhrases = function () {
                    return this.defaultPhrases;
                };
                Store.prototype.savePhrases = function (phrases) {
                    // TODO:
                };
                Store.prototype.getAllPhrases = function () {
                    if (!this.allPhrases) {
                        this.allPhrases = this.loadPhrases();
                    }
                    return this.allPhrases;
                };
                Store.prototype.getAllPhrasesByLanguage = function (languageId) {
                    var allPhrases = this.getAllPhrases();
                    return allPhrases;
                };
                Store.prototype.getValue = function () {
                    return this.value;
                };
                Store.prototype.setValue = function (newValue) {
                    this.value = newValue;
                };
                return Store;
            })();
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=store.js.map
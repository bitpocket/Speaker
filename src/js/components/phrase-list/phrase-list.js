var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var languageService_1 = require('../../app/services/languageService');
var settingsService_1 = require('../../app/services/settingsService');
var phraseService_1 = require('../../app/services/phraseService');
var store_1 = require('../../app/services/store');
var PhraseList = (function () {
    function PhraseList(_ls, _settings, _phrases, _store) {
        this._ls = _ls;
        this._settings = _settings;
        this._phrases = _phrases;
        this._store = _store;
        this.selectedPhrases = {};
    }
    Object.defineProperty(PhraseList.prototype, "phrases", {
        get: function () {
            return this._store.getAllPhrasesByLanguage(this._ls.getSelectedLanguage());
        },
        enumerable: true,
        configurable: true
    });
    PhraseList.prototype.tooglePhrase = function (phrase) {
        this.selectedPhrases = {};
        this.selectedPhrases[phrase.text.toString()] = true;
    };
    PhraseList.prototype.isPhraseSelected = function (phrase) {
        return this.selectedPhrases[phrase.text.toString()];
    };
    PhraseList = __decorate([
        angular2_1.Component({
            selector: 'phrase-list',
            templateUrl: 'components/phrase-list/phrase-list.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [languageService_1.LanguageService, settingsService_1.SettingsService, phraseService_1.PhraseService, store_1.Store])
    ], PhraseList);
    return PhraseList;
})();
exports.PhraseList = PhraseList;
//# sourceMappingURL=phrase-list.js.map
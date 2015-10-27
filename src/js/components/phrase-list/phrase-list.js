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
var speakService_1 = require('../../app/services/speakService');
var PhraseList = (function () {
    function PhraseList(_ls, _settings, _phrases, _store, _ngZone, _speakService) {
        this._ls = _ls;
        this._settings = _settings;
        this._phrases = _phrases;
        this._store = _store;
        this._ngZone = _ngZone;
        this._speakService = _speakService;
        this._recogizedPhrase = 0;
        this.selectedPhrases = {};
        this.update = new angular2_1.EventEmitter();
    }
    PhraseList.prototype.onUpdate = function ($event) {
        this._recogizedPhrase = 123456789;
    };
    Object.defineProperty(PhraseList.prototype, "recogizedPhrase", {
        get: function () {
            return this._recogizedPhrase;
        },
        enumerable: true,
        configurable: true
    });
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
        var context = this;
        context.recognition = new webkitSpeechRecognition();
        context.recognition.continuous = false;
        context.recognition.interimResults = true;
        context.recognition.onresult = function (event) {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                context._recogizedPhrase += 1;
                context.update.next({ value: context._recogizedPhrase });
                console.log(event.results[i][0].transcript);
            }
        };
        context.recognition.lang = phrase.languageId;
        context.recognition.start();
        window.setTimeout(function () {
            context._recogizedPhrase = 555;
            console.log(555);
        }, 2000);
    };
    PhraseList.prototype.incommingPhraseCallback = function (incommingPhrase) {
    };
    PhraseList.prototype.isPhraseSelected = function (phrase) {
        return this.selectedPhrases[phrase.text.toString()];
    };
    PhraseList = __decorate([
        angular2_1.Component({
            selector: 'phrase-list',
            templateUrl: 'components/phrase-list/phrase-list.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgClass],
            events: ['update']
        }), 
        __metadata('design:paramtypes', [languageService_1.LanguageService, settingsService_1.SettingsService, phraseService_1.PhraseService, store_1.Store, angular2_1.NgZone, speakService_1.SpeakService])
    ], PhraseList);
    return PhraseList;
})();
exports.PhraseList = PhraseList;
//# sourceMappingURL=phrase-list.js.map
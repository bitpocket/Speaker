System.register(['angular2/core', '../../app/services/languageService', '../../app/services/settingsService', '../../app/services/phraseService', '../../app/services/store', '../../app/services/speakService', '../Pipes/selectLanguage'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, languageService_1, settingsService_1, phraseService_1, store_1, speakService_1, selectLanguage_1;
    var PhraseList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (languageService_1_1) {
                languageService_1 = languageService_1_1;
            },
            function (settingsService_1_1) {
                settingsService_1 = settingsService_1_1;
            },
            function (phraseService_1_1) {
                phraseService_1 = phraseService_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (speakService_1_1) {
                speakService_1 = speakService_1_1;
            },
            function (selectLanguage_1_1) {
                selectLanguage_1 = selectLanguage_1_1;
            }],
        execute: function() {
            PhraseList = (function () {
                function PhraseList(_zone, _ls, _settings, _phrases, _store, _speakService) {
                    this._zone = _zone;
                    this._ls = _ls;
                    this._settings = _settings;
                    this._phrases = _phrases;
                    this._store = _store;
                    this._speakService = _speakService;
                    this._recogizedPhrase = 'Say it...';
                    this.selectedPhrases = {};
                    _speakService.listenInit(_zone, this);
                }
                PhraseList.prototype.recogizedPhrase = function () {
                    return this._recogizedPhrase;
                };
                PhraseList.prototype.getSelectetLanguageId = function () {
                    return this._ls.getSelectedLanguage();
                };
                PhraseList.prototype.getPhrases = function () {
                    return this._store.getAllPhrases();
                };
                PhraseList.prototype.tooglePhrase = function (phrase) {
                    this.selectedPhrases = {};
                    this.selectedPhrases[phrase.text.toString()] = true;
                    this._speakService.listen(phrase);
                };
                PhraseList.prototype.incommingPhraseCallback = function (incommingPhrase) {
                    this._recogizedPhrase = incommingPhrase;
                };
                PhraseList.prototype.isPhraseSelected = function (phrase) {
                    return this.selectedPhrases[phrase.text.toString()];
                };
                PhraseList = __decorate([
                    core_1.Component({
                        selector: 'phrase-list',
                        pipes: [selectLanguage_1.SelectLanguage],
                        template: "\n  <div>\n    <div class=\"recogized-phrase\">\n      {{recogizedPhrase()}}\n    </div>\n  </div>\n\n  <div class=\"phrases\">\n    <div class=\"phrase\"\n      (click)=\"tooglePhrase(phrase)\"\n      [ngClass]=\"{'phrase-selected': isPhraseSelected(phrase)}\"\n      *ngFor=\"#phrase of getPhrases() | SelectLanguage: 'languageId' : getSelectetLanguageId()\">\n      {{phrase.text}}\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, languageService_1.LanguageService, settingsService_1.SettingsService, phraseService_1.PhraseService, store_1.Store, speakService_1.SpeakService])
                ], PhraseList);
                return PhraseList;
            })();
            exports_1("PhraseList", PhraseList);
        }
    }
});
//# sourceMappingURL=phraseList.js.map
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
var languages_1 = require('./languages');
var phrasesList_1 = require('./phrasesList');
var languagesSetComponent = (function () {
    function languagesSetComponent(phrasesListComponent, zone) {
        this.languageChange = new angular2_1.EventEmitter();
        this.selectedLanguages = {};
        this.languages = languages_1.LANGUAGES;
        this.phrasesListComponent = phrasesListComponent;
        this.zone = zone;
        this.toogleLanguage(this.languages[1]);
    }
    languagesSetComponent.prototype.toogleLanguage = function (language) {
        this.languageChange.next(language);
        this.selectedLanguages = {};
        this.selectedLanguages[language.code] = true;
        this.selectedLanguage = language;
    };
    languagesSetComponent.prototype.isLanguageSelected = function (language) {
        return this.selectedLanguages[language.code];
    };
    languagesSetComponent = __decorate([
        angular2_1.Component({
            selector: 'languages-set',
            template: "\n    <div class=\"languages\" *ng-for=\"#language of languages\">\n      <div class=\"language\"\n          (click)=\"toogleLanguage(language)\"\n          [ng-class]=\"{'language-selected': isLanguageSelected(language)}\">\n          {{language.label}}\n      </div>\n    </div>\n  ",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgClass],
            events: ['languageChange: languagechange']
        }), 
        __metadata('design:paramtypes', [phrasesList_1.phrasesListComponent, angular2_1.NgZone])
    ], languagesSetComponent);
    return languagesSetComponent;
})();
exports.languagesSetComponent = languagesSetComponent;
angular2_1.bootstrap(languagesSetComponent, [phrasesList_1.phrasesListComponent]);
//# sourceMappingURL=languagesBar.js.map
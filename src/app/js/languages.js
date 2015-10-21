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
var languagesSetComponent = (function () {
    function languagesSetComponent() {
        this.selectedLanguage = null;
        this.selectedLanguages = {};
        this.languages = LANGUAGES;
    }
    languagesSetComponent.prototype.toogleLanguage = function (language) {
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
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], languagesSetComponent);
    return languagesSetComponent;
})();
angular2_1.bootstrap(languagesSetComponent);
var CS = 'cs-CS', EN = 'en-US', ES = 'es-ES', DE = 'de-DE', IT = 'it-IT', PL = 'pl-PL', PT = 'pt-PT', SK = 'sk-SK';
var Language = (function () {
    function Language() {
    }
    return Language;
})();
var LANGUAGES = [
    { label: 'CS', code: CS },
    { label: 'EN', code: EN },
    { label: 'ES', code: ES },
    { label: 'DE', code: DE },
    { label: 'IT', code: IT },
    { label: 'PL', code: PL },
    { label: 'PT', code: PT },
    { label: 'SK', code: SK }];
//# sourceMappingURL=languages.js.map
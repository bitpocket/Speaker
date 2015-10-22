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
var LanguageMenu = (function () {
    function LanguageMenu(_langService, _settings) {
        this._langService = _langService;
        this._settings = _settings;
        this.toogleLanguage(_settings.getDefaultLanguageId());
    }
    Object.defineProperty(LanguageMenu.prototype, "languages", {
        get: function () {
            return this._langService.languages;
        },
        enumerable: true,
        configurable: true
    });
    LanguageMenu.prototype.toogleLanguage = function (languageId) {
        this._langService.toogleLanguage(languageId);
    };
    LanguageMenu.prototype.isLanguageSelected = function (languageId) {
        return this._langService.isLanguageSelected(languageId);
    };
    LanguageMenu = __decorate([
        angular2_1.Component({
            selector: 'language-menu',
            templateUrl: 'components/language-menu/language-menu.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [languageService_1.LanguageService, settingsService_1.SettingsService])
    ], LanguageMenu);
    return LanguageMenu;
})();
exports.LanguageMenu = LanguageMenu;
//# sourceMappingURL=language-menu.js.map
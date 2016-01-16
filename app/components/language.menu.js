System.register(['angular2/core', '../../app/services/languageService', '../../app/services/settingsService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, languageService_1, settingsService_1;
    var LanguageMenu;
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
            }],
        execute: function() {
            LanguageMenu = (function () {
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
                    core_1.Component({
                        selector: 'language-menu',
                        template: "\n  <div class=\"languages\" *ngFor=\"#language of languages; #i=index\">\n    <div class=\"language\"\n      (click)=\"toogleLanguage(language.id)\"\n      [ngClass]=\"{'language-selected': isLanguageSelected(language.id)}\">\n      {{language.label}}\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [languageService_1.LanguageService, settingsService_1.SettingsService])
                ], LanguageMenu);
                return LanguageMenu;
            })();
            exports_1("LanguageMenu", LanguageMenu);
        }
    }
});
//# sourceMappingURL=language.menu.js.map
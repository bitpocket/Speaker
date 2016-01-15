System.register(['../models/languages'], function(exports_1) {
    var languages_1;
    var LanguageService;
    return {
        setters:[
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            LanguageService = (function () {
                function LanguageService() {
                    this.selectedLanguages = {};
                    this.languages = languages_1.LANGUAGES;
                }
                LanguageService.prototype.toogleLanguage = function (languageId) {
                    this.selectedLanguages = {};
                    this.selectedLanguages[languageId.toString()] = true;
                    this.selectedLanguageId = languageId;
                };
                LanguageService.prototype.isLanguageSelected = function (languageId) {
                    return this.selectedLanguages[languageId.toString()];
                };
                LanguageService.prototype.getSelectedLanguage = function () {
                    return this.selectedLanguageId;
                };
                return LanguageService;
            })();
            exports_1("LanguageService", LanguageService);
        }
    }
});
//# sourceMappingURL=languageService.js.map
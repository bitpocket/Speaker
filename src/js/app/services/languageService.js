var languages_1 = require('../models/languages');
var LanguageService = (function () {
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
exports.LanguageService = LanguageService;
//# sourceMappingURL=languageService.js.map
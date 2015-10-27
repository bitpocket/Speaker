var languages_1 = require('../models/languages');
var SettingsService = (function () {
    function SettingsService() {
    }
    SettingsService.prototype.getDefaultLanguageId = function () {
        return languages_1.EN;
    };
    return SettingsService;
})();
exports.SettingsService = SettingsService;
//# sourceMappingURL=settingsService.js.map
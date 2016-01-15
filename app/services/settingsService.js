System.register(['../models/languages'], function(exports_1) {
    var languages_1;
    var SettingsService;
    return {
        setters:[
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            SettingsService = (function () {
                function SettingsService() {
                }
                SettingsService.prototype.getDefaultLanguageId = function () {
                    return languages_1.EN;
                };
                return SettingsService;
            })();
            exports_1("SettingsService", SettingsService);
        }
    }
});
//# sourceMappingURL=settingsService.js.map
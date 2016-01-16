System.register(['angular2/platform/browser', './components/main.app', '../app/services/languageService', '../app/services/settingsService', '../app/services/phraseService', '../app/services/speakService', '../app/services/store'], function(exports_1) {
    var browser_1, main_app_1, languageService_1, settingsService_1, phraseService_1, speakService_1, store_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
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
            function (speakService_1_1) {
                speakService_1 = speakService_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_app_1.MainApp, [
                languageService_1.LanguageService,
                store_1.Store,
                settingsService_1.SettingsService,
                phraseService_1.PhraseService,
                speakService_1.SpeakService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map
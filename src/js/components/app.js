var angular2_1 = require('angular2/angular2');
var main_app_1 = require('./main-app/main-app');
var languageService_1 = require('../app/services/languageService');
var settingsService_1 = require('../app/services/settingsService');
var phraseService_1 = require('../app/services/phraseService');
var speakService_1 = require('../app/services/speakService');
var store_1 = require('../app/services/store');
function main() {
    angular2_1.bootstrap(main_app_1.MainApp, [
        languageService_1.LanguageService,
        store_1.Store,
        settingsService_1.SettingsService,
        phraseService_1.PhraseService,
        speakService_1.SpeakService
    ]);
}
exports.main = main;
//# sourceMappingURL=app.js.map
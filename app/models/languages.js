System.register([], function(exports_1) {
    var Language, CS, EN, ES, DE, IT, PL, PT, SK, LANGUAGES;
    return {
        setters:[],
        execute: function() {
            Language = (function () {
                function Language(label, id) {
                    this.label = label;
                    this.id = id;
                }
                return Language;
            })();
            exports_1("Language", Language);
            exports_1("CS", CS = 'cs-CS'), exports_1("EN", EN = 'en-US'), exports_1("ES", ES = 'es-ES'), exports_1("DE", DE = 'de-DE'), exports_1("IT", IT = 'it-IT'), exports_1("PL", PL = 'pl-PL'), exports_1("PT", PT = 'pt-PT'), exports_1("SK", SK = 'sk-SK');
            exports_1("LANGUAGES", LANGUAGES = [
                { label: 'CS', id: CS },
                { label: 'EN', id: EN },
                { label: 'ES', id: ES },
                { label: 'DE', id: DE },
                { label: 'IT', id: IT },
                { label: 'PL', id: PL },
                { label: 'PT', id: PT },
                { label: 'SK', id: SK }]);
        }
    }
});
//# sourceMappingURL=languages.js.map
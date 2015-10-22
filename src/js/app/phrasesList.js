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
var languages_1 = require('./languages');
var phrasesListComponent = (function () {
    function phrasesListComponent() {
        this.selectedPhrases = {};
        this.allPhrases = [
            { text: "I'd just like a word with you, if I might.",
                language: languages_1.EN },
            { text: "God always had the final word.",
                language: languages_1.EN },
            { text: "Dass ein eigenes Zuhause durch nichts zu ersetzen ist.",
                language: languages_1.DE },
            { text: "wiadereczko z wodą",
                language: languages_1.PL }
        ];
        this.phrases = this.allPhrases;
    }
    phrasesListComponent.prototype.setLanguage = function (lang) {
    };
    phrasesListComponent.prototype.tooglePhrase = function (phrase) {
        this.selectedPhrases = {};
        this.selectedPhrases[phrase.text] = true;
    };
    phrasesListComponent.prototype.isPhraseSelected = function (phrase) {
        return this.selectedPhrases[phrase.text];
    };
    phrasesListComponent = __decorate([
        angular2_1.Component({
            selector: 'phrases-list',
            template: "\n  <div>\n    <div class=\"recogized-phrase\">\n      {{recogizedPhrase}}\n    </div>\n  </div>\n\n  <div class=\"phrases\">\n    <div class=\"phrase\"\n      (click)=\"tooglePhrase(phrase)\"\n      [ng-class]=\"{'phrase-selected': isPhraseSelected(phrase)}\"\n      *ng-for=\"#phrase of phrases; #i=index\">\n      {{phrase.text}}\n    </div>\n  </div>\n  ",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], phrasesListComponent);
    return phrasesListComponent;
})();
exports.phrasesListComponent = phrasesListComponent;
angular2_1.bootstrap(phrasesListComponent);
//# sourceMappingURL=phrasesList.js.map
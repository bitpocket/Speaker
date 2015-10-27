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
var phrase_list_1 = require('../phrase-list/phrase-list');
var MainContent = (function () {
    function MainContent() {
        this.SomeValue = '__';
    }
    MainContent.prototype.onUpdate = function (event) {
        this.SomeValue = event.value;
        console.log(event.value);
    };
    MainContent = __decorate([
        angular2_1.Component({
            selector: 'main-content',
            templateUrl: 'components/main-content/main-content.html',
            directives: [phrase_list_1.PhraseList]
        }), 
        __metadata('design:paramtypes', [])
    ], MainContent);
    return MainContent;
})();
exports.MainContent = MainContent;
//# sourceMappingURL=main-content.js.map
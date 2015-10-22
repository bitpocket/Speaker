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
var top_header_1 = require('../top-header/top-header');
var menu_1 = require('../menu/menu');
var main_content_1 = require('../main-content/main-content');
var MainApp = (function () {
    function MainApp() {
    }
    MainApp = __decorate([
        angular2_1.Component({
            selector: 'main-app',
            templateUrl: 'components/main-app/main-app.html',
            directives: [
                top_header_1.TopHeader,
                menu_1.Menu,
                main_content_1.MainContent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainApp);
    return MainApp;
})();
exports.MainApp = MainApp;
//# sourceMappingURL=main-app.js.map
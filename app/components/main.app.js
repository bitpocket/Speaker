System.register(['angular2/core', '../components//top.header'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, top_header_1;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (top_header_1_1) {
                top_header_1 = top_header_1_1;
            }],
        execute: function() {
            // import {Menu} from '../menu/menu';
            // import {MainContent} from '../main-content/main-content';
            MainApp = (function () {
                function MainApp() {
                }
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  Main\n  <div class=\"container\">\n    <top-header></top-header>\n    <menu></menu>\n    <main-content></main-content>\n  </div>\n    ",
                        directives: [
                            top_header_1.TopHeader
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainApp);
                return MainApp;
            })();
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=main.app.js.map
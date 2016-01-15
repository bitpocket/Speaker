System.register(['angular2/platform/browser', './components/main.app'], function(exports_1) {
    var browser_1, main_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            browser_1.bootstrap(main_app_1.MainApp);
        }
    }
});
//# sourceMappingURL=boot.js.map
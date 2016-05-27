(function () {
    "use strict";
    angular
        .module("app")
        .directive("parsedChar", parsedChar);
    function parsedChar() {
        return {
            restrict: 'E',
            template: '<div></div>',
            link: function (scope, element, attrs) {
            }
        };
    }
})();
//# sourceMappingURL=parsedChar.js.map
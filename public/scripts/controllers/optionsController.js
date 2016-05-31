var Speaker;
(function (Speaker) {
    var OptionsController = (function () {
        // methods
        function OptionsController($scope) {
        }
        // fileds
        OptionsController.$inject = ["$scope"];
        return OptionsController;
    }());
    angular
        .module("app")
        .controller('optionsController', OptionsController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=optionsController.js.map
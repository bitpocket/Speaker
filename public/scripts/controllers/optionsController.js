var Speaker;
(function (Speaker) {
    var OptionsController = (function () {
        function OptionsController($scope) {
        }
        OptionsController.$inject = ["$scope"];
        return OptionsController;
    }());
    angular
        .module("app")
        .controller('optionsController', OptionsController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=optionsController.js.map
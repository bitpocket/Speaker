var Speaker;
(function (Speaker) {
    var MainController = (function () {
        function MainController($scope) {
        }
        MainController.$inject = ["$scope"];
        return MainController;
    }());
    angular
        .module("app")
        .controller('mainController', MainController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=MainController.js.map
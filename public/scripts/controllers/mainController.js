var Speaker;
(function (Speaker) {
    var MainController = (function () {
        // methods
        function MainController($scope) {
        }
        // fields
        MainController.$inject = ["$scope"];
        return MainController;
    }());
    angular
        .module("app")
        .controller('mainController', MainController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=mainController.js.map
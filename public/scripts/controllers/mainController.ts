module Speaker {

    class MainController {
        static $inject = ["$scope"];
        constructor($scope) {
        }
    }

    angular
        .module("app")
        .controller('mainController', MainController);
}

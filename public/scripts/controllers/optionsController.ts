module Speaker {

    class OptionsController {
        static $inject = ["$scope"];
        constructor($scope) {
        }
    }

    angular
        .module("app")
        .controller('optionsController', OptionsController);
}

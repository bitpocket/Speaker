module Speaker {
  class MainController {
    // fields
    static $inject = ["$scope"];

    // methods
    constructor($scope) {
    }
  }

  angular
    .module("app")
    .controller('mainController', MainController);
}

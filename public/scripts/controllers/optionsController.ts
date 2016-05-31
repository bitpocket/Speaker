module Speaker {
  class OptionsController {
    // fileds
    static $inject = ["$scope"];

    // methods
    constructor($scope) {
    }
  }

  angular
    .module("app")
    .controller('optionsController', OptionsController);
}

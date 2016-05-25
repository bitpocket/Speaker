/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var Speaker;
(function (Speaker) {
    "use strict";
    function mainController($scope) {
        $scope.Name = "Hello TS from AngularJS";
    }
    mainController.$inject = ["$scope"];
    angular
        .module("app", [])
        .controller('mainController', mainController);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=mainController.js.map
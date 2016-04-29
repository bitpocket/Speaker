(function () {
	'use strict';

	angular
		.module("speakerApp", ['ngRoute'])
		.controller('mainController', mainController);

	mainController.$inject = ["$scope"];

	function mainController($scope) {
		$scope.message = "this is a mainController";
	}

})();

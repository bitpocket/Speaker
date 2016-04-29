(function () {
	"use strict";

	angular
		.module("speakerApp")
		.controller('optionsController', optionsController);

	optionsController.$inject = ["$scope"];

	function optionsController($scope) {
		$scope.message = "options";
	}

})();

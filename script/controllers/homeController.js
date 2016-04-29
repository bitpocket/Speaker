(function () {
	'use strict';

	angular
		.module("speakerApp")
		.controller('homeController', homeController);

	homeController.$inject = ["$scope"];

	function homeController($scope) {
		$scope.message = "home";
	}

})();

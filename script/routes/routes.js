(function () {
	"use strict";

	angular.module('speakerApp')
		.config(function($routeProvider) {
			$routeProvider
					.when('/options', {
							templateUrl : 'views/options.html',
							controller  : 'optionsController'
					})
					.when('/', {
							templateUrl : 'views/home.html',
							controller  : 'homeController'
					})
	});

})();

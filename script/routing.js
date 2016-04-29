(function () {
	"use strict";

	angular
		.module('speakerApp')
		.config(['$routeProvider',
			function ($routeProvider) {
				$routeProvider.
				when('/home', {
					templateUrl: 'views/home.html',
					controller: 'homeController'
				}).
				when('/options', {
					templateUrl: 'views/options.html',
					controller: 'optionsController'
				}).
				otherwise({
					redirectTo: '/home'
				});
			}
		]);

})();

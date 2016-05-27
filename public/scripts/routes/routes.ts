module Speaker {

	angular.module('app')
		.config(function($routeProvider: ng.route.IRouteProvider) {
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

}

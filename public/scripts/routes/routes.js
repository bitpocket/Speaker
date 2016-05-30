var Speaker;
(function (Speaker) {
    angular.module('app')
        .config(function ($routeProvider) {
        $routeProvider
            .when('/options', {
            templateUrl: 'views/options.html',
            controller: 'optionsController'
        })
            .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        });
    });
})(Speaker || (Speaker = {}));
//# sourceMappingURL=Routes.js.map
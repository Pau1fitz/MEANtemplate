angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){


	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})

	.when('/page2',{
		templateUrl: 'views/nerd.html',
		controller: 'NerdController'
	})

	$locationProvider.html5Mode(true);

}]);
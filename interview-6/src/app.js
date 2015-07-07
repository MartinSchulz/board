angular.module('interviewApp', [
  'ngRoute'
]);

angular.module('interviewApp')
.config([
  '$routeProvider',
  '$locationProvider',
  
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/random', {
        templateUrl: 'views/random/random.html',
        controller: 'RandomCtrl'
      })
      .when('/calculator', {
        templateUrl: 'views/calculator/calculator.html',
        controller: 'CalculatorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
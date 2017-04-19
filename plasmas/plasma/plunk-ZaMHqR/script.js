var app = angular.module("plunker", []).
  config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/home',
    {
      templateUrl:    'home.html',
      controller:     'HomeCtrl'
    });
    $routeProvider.when('/about',
    {
      templateUrl:    'about.html',
      controller:     'AboutCtrl'
    });
    $routeProvider.when('/contact',
    {
      templateUrl:    'contact.html',
      controller:     'ContactCtrl'
    });
    $routeProvider.otherwise(
    {
      redirectTo:     '/home',
      controller:     'HomeCtrl', 
    }
  );
});

app.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };
  
  $scope.loadHome = function () {
        $location.url('/home');
    };
    
      $scope.loadAbout = function () {
        $location.url('/about');
    };
    
      $scope.loadContact = function () {
        $location.url('/contact');
    };
    
}]);

app.controller('AboutCtrl', function($scope, $compile) {
  console.log('inside about controller');

});

app.controller('HomeCtrl', function($scope, $compile) {
  console.log('inside home controller');

});

app.controller('ContactCtrl', function($scope, $compile) {
  console.log('inside contact controller');

});
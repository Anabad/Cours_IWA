'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'myApp.authService',
  'myApp.login',
  'myApp.view2',
    'myApp.welcome'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]).
controller('appController',[
    '$scope',
    'authService',
    '$route',
    '$rootScope',
    '$location',
    function( $scope, auth, $route, $rootScope, $location) {
      const vm = $scope;
      vm.isAuthentifiedUser = auth.isAuthentifiedUser;
        $rootScope.$on('userLoggedIn', function () {
          vm.isAuthentifiedUser = auth.isAuthentifiedUser;
          $route.reload();
        });
        vm.logout = function(){
          auth.logout();
          $location.path('/login');
            vm.isAuthentifiedUser = auth.isAuthentifiedUser;
            $route.reload();
        };
}]);

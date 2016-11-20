'use strict';

angular.module('myApp.login', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [ 'authService', '$scope', '$location','$rootScope', function( auth, $scope, $location, $rootScope) {
    
  var vm = $scope;
  vm.isAuthentifiedUser = auth.isAuthentifiedUser;
  vm.currentUserName = auth.currentUser.username;
  vm.loginFailedMessage = "";
  vm.user={};
  vm.login = function() {
      auth.login( vm.user  );
      if (! auth.isAuthentifiedUser){
        vm.loginFailedMessage = "Authentication failed!";
      }
      else{
          $rootScope.$broadcast('userLoggedIn');
          $location.path('/welcome');
      }
  };
}]);
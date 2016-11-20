'use strict';
angular.module('myApp.view2', ['ngRoute', 'myApp.authService',])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'authService','$location', function( $scope, auth, $location ) {
  if (!auth.isAuthentifiedUser){
      $location.path('/login');
  }
  else{
      const vm = $scope;
      vm.username = auth.currentUser.username;
  }
}]);
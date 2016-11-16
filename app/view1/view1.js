'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope',function($scope,authService) {
  const vm = $scope;
  vm.user = {};
  vm.user.username;
  vm.user.password;
  vm.login = function () {
      authService.login(vm.user);
      console.log(authService.isAuthorised);
  };
}]);
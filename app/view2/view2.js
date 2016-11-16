'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
  var vm=$scope;
  
  vm.displayName = function () {
      alert(vm.nom + "");
  };
  vm.addName = function () {
      vm.userList.push({name : vm.nom});
  }
  vm.userList =[
    {name :"kevin"},
    {name :"jean"},
    {name :"pierre"}
  ];
  vm.nom;
}]);
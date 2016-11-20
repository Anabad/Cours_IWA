angular.module('myApp.welcome', ['ngRoute', 'myApp.authService'])
    
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'welcome/welcome.html',
            controller: 'WelcomeCtrl'
        });
    }])
    .controller('WelcomeCtrl', ['$scope', 'authService','$location','$route', function( $scope, auth, $location,$route ) {
        if (!auth.isAuthentifiedUser){
            $location.path('/login');
        }
        else {
            var vm = $scope;
            vm.username = auth.currentUser.username;
            vm.isAuthentifiedUser = auth.isAuthentifiedUser;
            
        }
    }]);
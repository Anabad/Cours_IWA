'use strict';

angular.module('myApp.authService', []).factory('authService',authService);

function authService() {
    const factory = {};
    factory.authorisedUser = {username:"Kevin",password:"keke"};
    factory.isAuthorised = false;
    factory.login = function (user){
        factory.isAuthorised = user.username == factory.authorisedUser.username && user.password == factory.authorisedUser.password;
    }
    return factory;
}
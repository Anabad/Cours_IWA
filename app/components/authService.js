angular.module('myApp.authService', [])
    .factory('authService', authService);


function authService() {
    const userList = [
        {username:'Kevin',password:'password'},
        {username:'Anand',password:'sudo'},
        {username:'Antoine',password:'jaiplusdidees'},
        {username:'Alexis',password:'password'}
    ];
    
    let isAuthentifiedUser = false;
    
    let currentUser = {};

    const service = {
        login: login,
        logout: logout,
        isAuthentifiedUser : isAuthentifiedUser,
        currentUser : currentUser
    };
    
    function login(loginUser){
        if (angular.equals({},loginUser)){
            service.currentUser = {};
            service.isAuthentifiedUser = false;
        }
        else if(!angular.equals([],
                userList.filter(function(user){ return user.username === loginUser.username
                && user.password === loginUser.password ;})))
        {
            service.currentUser = loginUser;
            service.isAuthentifiedUser = true;
        }
        else
        {
          service.currentUser = {};
          service.isAuthentifiedUser = false;
        }
        
    }
    
    function logout(){
        service.currentUser = {};
        service.isAuthentifiedUser = false;
    }

    return service;
}
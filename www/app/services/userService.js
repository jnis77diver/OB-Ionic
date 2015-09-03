(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('userService', userService);
    
    userService.$inject = ['$http', 'API'];
    
    function userService($http, API){
      return {
        login: login,
        register: register
      };
      
      function login(username, password){
        return $http.post(API + '/login', {
          username: username,
          password: password
        });
      }
      
      function register(username, password){
        return $http.post(API + '/register', {
          username: username,
          password: password
         });
      }
    }
  })();
(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('userService', userService);
    
    userService.$inject = ['$http', '$q', 'API'];
    
    function userService($http, $q, API){
      return {
        login: login,
        register: register
      };

      function login(username, password) {
        var deferred = $q.defer();
        deferred.resolve();

      }



      //TODO: use the login and register functions below when auth backend is implemented
/*
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
*/
    }
  })();
(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('authService', authService);
    
    authService.$inject = ['$window'];
    
    function authService($window){
      return {
        parseJwt: parseJwt,
        saveToken: saveToken,
        getToken: getToken,
        isAuthenticated: isAuthenticated,
        logout: logout
      };
      
      function parseJwt(token){
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');
          return JSON.parse($window.atob(base64));
      }
      
      function saveToken(token){
        $window.localStorage['jwtToken'] = token;
      }
      
      function getToken(){
        return $window.localStorage['jwtToken'];
      }
      
      function isAuthenticated(){
        var token = getToken();
          if(token) {
            var params = parseJwt(token);
            console.log('params is ', params);
            console.log('new Date().getTime() / 1000 is ', new Date().getTime() / 1000);
            console.log('params.exp is ', params.exp);
            return Math.round(new Date().getTime() / 1000) <= params.exp;
          } else {
            console.log('here');
            return false;
          }
      }
      
      function logout(){
        $window.localStorage.removeItem('jwtToken');
      }
    }
  })();
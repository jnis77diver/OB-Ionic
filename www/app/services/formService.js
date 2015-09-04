(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('formService', formService);

    formService.$inject = ['$http', '$q', '$ionicLoading', 'API'];
    
    function formService($http, $q, $ionicLoading, API){
      return {
        getSearchForm: getSearchForm
      };
      
      function getSearchForm(){
        var deferred = $q.defer();
        $ionicLoading.show({
          template: 'Loading...'
        });

        //TODO: change this url to OB backend
        $http.get(API + '/search-form')
          .success(function (data, status) {
            console.log("Received groups data via HTTP.", data, status);
            $ionicLoading.hide();
            deferred.resolve(data);
          })
          .error(function () {
            console.log('Error while making HTTP call.');
            $ionicLoading.hide();
            deferred.reject();
          });
        return deferred.promise;
      }

    }
  })();
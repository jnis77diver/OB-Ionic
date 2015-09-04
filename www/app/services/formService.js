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
      
      function getSearchForm(clientId, userId, formId){
        var deferred = $q.defer();
        $ionicLoading.show({
          template: 'Loading...'
        });

        //TODO: change this url to OB backend
        $http({method: 'GET', url: API + '/search-form', params: {clientId: clientId, useId: userId, formId: formId} })
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
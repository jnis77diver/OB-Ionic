(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('formService', formService);

    formService.$inject = ['$http', '$q', '$ionicLoading', '$timeout', 'API'];
    
    function formService($http, $q, $ionicLoading, $timeout, API){
      return {
        getSearchForm: getSearchForm
      };
      
      function getSearchForm(clientId, userId, formId){
        var deferred = $q.defer();
        $ionicLoading.show({
          template: 'Loading...'
        });

        //TODO: remove this code block when real backend implemented
        var mockData = getMockData();
        $timeout(function() {
          deferred.resolve(mockData);
          $ionicLoading.hide();

        }, 1000);
        return deferred.promise;


        //TODO: uncomment this code when backend connected and change this url to OB backend
/*
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
        */
      }

    }
  })();

//TODO: remove this function when real backend implemented
function getMockData() {
  return [
    {
      "key": "occupancy",
      "type": "select",
      "templateOptions": {
        "label": "Occupancy",
        "required": false,
        "options": [
          {
            "name": "Owner Occupied",
            "value": "Owner Occupied"
          },
          {
            "name": "Other",
            "value": "Other"
          }
        ]
      }
    },
    {
      "key": "propertyType",
      "type": "select",
      "templateOptions": {
        "label": "Property Type",
        "required": false,
        "options": [
          {
            "name": "Single Family",
            "value": "Single Family"
          },
          {
            "name": "PUD",
            "value": "PUD"
          },
          {
            "name": "Multi-Family",
            "value": "Multi-Family"
          },
          {
            "name": "Manufactured / Single Wide",
            "value": "Manufactured / Single Wide"
          },
          {
            "name": "Manufactured / Double Wide",
            "value": "Manufactured / Double Wide"
          },
          {
            "name": "Timeshare",
            "value": "Timeshare"
          },
          {
            "name": "Condotel",
            "value": "Condotel"
          },
          {
            "name": "Non-warrantable Condo",
            "value": "Non-warrantable Condo"
          },
          {
            "name": "Modular",
            "value": "Modular"
          }
        ]
      }
    },
    {
      "key": "loanPurpose",
      "type": "input",
      "templateOptions": {
        "label": "Loan Purpose",
        "type": "text",
        "required": false,
        "placeholder": "Loan Purpose"
      }
    },
    {
      "key": "purchasePrice",
      "type": "input",
      "templateOptions": {
        "label": "Purchase Price",
        "type": "number",
        "required": false,
        "placeholder": "Purchase Price",
        "addonLeft": {
          "text": "$"
        }
      }
    },
    {
      "key": "downPayment",
      "type": "input",
      "templateOptions": {
        "label": "Down Payment",
        "type": "number",
        "required": false,
        "placeholder": "Down Payment",
        "addonLeft": {
          "text": "$"
        }
      }
    },
    {
      "key": "zip",
      "type": "input",
      "templateOptions": {
        "label": "Zip",
        "type": "text",
        "required": false,
        "placeholder": "Zip"
      }
    },
    {
      "key": "creditScore",
      "type": "input",
      "templateOptions": {
        "label": "Credit Score",
        "type": "text",
        "required": false,
        "placeholder": "Credit Score"
      }
    }]
}
(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('formService', formService);
    
    //userService.$inject = [''];
    
    function formService(){
      return {
        getSearchForm: getSearchForm
      }
      
      function getSearchForm(){
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
            }];
      }
    }
  })();
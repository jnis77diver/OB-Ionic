(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('mailService', mailService);
    
    mailService.$inject = ['_'];
    
    function mailService(_){
      return {
        getResultsMailTemplate: getResultsMailTemplate
      }
      
      function getResultsMailTemplate(data){
         var template = _.template("<b><%- value %></b><br/><p style=\"color:blue;\"><%- name %>");
         return template({value: 'Here\'s some text!', name: "Optimal Blue"});
      }
    }
  })();
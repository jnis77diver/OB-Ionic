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
        var html = '';
           
        for(var i = 0; i < data.groups.length; i++){
          var title = _.template("<h1><%- name %></h1>");
          html+= title({name: data.groups[i].name});
          
          html += '<table border="1" cellspacing="1" cellpadding="5">';
          html += '<tr>';
          for(var col = 0; col < data.columns.length; col++){
            var cell = _.template("<td><%- colValue %></td>");
            html+= cell({colValue: [data.columns[col].name]});
          }
          html += '</tr>';
          
          for(var j = 0; j < data.products[i].products.length; j++){
            html+= '<tr>';
            for(var col = 0; col < data.columns.length; col++){
              var cell = _.template("<td><%- colValue %></td>");
              html+= cell({colValue: data.products[i].products[j][data.columns[col].id]});
            }
            html+= '</tr>';
          }   
          html += '</table>';
        }
        return html;
      }
    }
  })();
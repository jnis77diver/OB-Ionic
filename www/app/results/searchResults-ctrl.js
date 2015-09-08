(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('SearchResultsCtrl', SearchResultsCtrl);

  SearchResultsCtrl.$inject = ['$timeout','$cordovaEmailComposer', 'mailService', 'dataService'];

  /* @ngInject */
  function SearchResultsCtrl($timeout,$cordovaEmailComposer, mailService, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';

    vm.data = {};
    vm.isLoading = true;
    
    vm.sendEmail = sendEmail;
    vm.toggleGroup = toggleGroup;
    vm.isGroupShown = isGroupShown;

    function toggleGroup(group) {
      if (vm.isGroupShown(group)) {
        vm.shownGroup = null;
      } else {
        vm.shownGroup = group;
      }
    }
    
    function isGroupShown(group) {
      return vm.shownGroup === group;
    }
    
    function sendEmail() {
      mailService.sendSearchResultsEmail(vm.data);
    }
    
    activate();

    ////////////////

    function activate() {
      var columns = dataService.getColumns();
      columns.then(function(columns){
        vm.data.columns = columns;
      });
  
      var products = dataService.getProducts();
      products.then(function(products){
        vm.data.products = products;
        vm.isLoading = false;
      });
    }
  }

})();
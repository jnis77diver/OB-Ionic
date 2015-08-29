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
    
    $timeout(function () {
      vm.isLoading = false;
    }, 1000);

    var columns = dataService.getColumns();
    columns.then(function(columns){
      vm.data.columns = columns;
    });

    var items = dataService.getData();
    items.then(function(items){
      vm.data.items = items;
    });

    var groups = dataService.getGroups();
    groups.then(function(groups){
      vm.data.groups = groups;
    });

    var products = dataService.getProducts();
    products.then(function(products){
      vm.data.products = products;
    });

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
    }


  }

})();
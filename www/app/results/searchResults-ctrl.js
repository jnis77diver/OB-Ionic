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

    var columns = dataService.columns;
    vm.data.columns = columns;

    var items = dataService.getData();
    vm.data.items = items;

    var groups = dataService.groups;
    vm.data.groups = groups;

    var products = dataService.getProducts();
    vm.data.products = products;

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
      console.log(vm.data);
      var emailTemplate = mailService.getResultsMailTemplate(vm.data);
      console.log(emailTemplate);
      $cordovaEmailComposer.isAvailable().then(function() {
        var email = {
          subject: 'Optimal Blue Search Results',
          body: emailTemplate,
          isHtml: true
        };
      
        $cordovaEmailComposer.open(email).then(null, function () {
          console.log("User Cancelled...");
        });
      }, function () {
        console.log("Email Composer is not available");
      });
    };
    
    activate();

    ////////////////

    function activate() {
    }


  }

})();
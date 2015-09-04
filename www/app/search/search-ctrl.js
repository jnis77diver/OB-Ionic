(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = ['$state', '$cordovaEmailComposer','$cordovaContacts', '$ionicNavBarDelegate',
    'formService','mailService'];

  /* @ngInject */
  function SearchCtrl($state, $cordovaEmailComposer,$cordovaContacts, $ionicNavBarDelegate, formService, mailService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';
    vm.contact = {};
    
    vm.showError = true;
    vm.logForm = logForm;
    vm.search = search;
    vm.recentSearches = recentSearches;
    vm.formData = {};
    //
    var formFields;


    function logForm(data){
      console.warn(data);
    }

    function search(){
      $state.go('menu.tabs.results');
    }
    
    function recentSearches(){
      $state.go('menu.tabs.recent-search');
    }

    activate();

    ////////////////

    function activate() {
      // TODO: determine clientId, userId, formId which will be passed in as args to getSearchForm
      formFields = formService.getSearchForm();
      formFields.then(function(data){
        vm.formFields = data;
      });
    }


  }

})();
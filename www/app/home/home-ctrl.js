(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$state'];

  /* @ngInject */
  function HomeCtrl($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';
    
    vm.showNotifications = showNotifications;
    
    function showNotifications(){
      $state.go('menu.tabs.notifications');
    }
    
    activate();

    ////////////////

    function activate() {
    }


  }

})();
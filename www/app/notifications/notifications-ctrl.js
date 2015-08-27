(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('NotificationsCtrl', NotificationsCtrl);

  NotificationsCtrl.$inject = ['$state'];

  /* @ngInject */
  function NotificationsCtrl($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';
    
    activate();

    ////////////////

    function activate() {
			
    }
  }

})();
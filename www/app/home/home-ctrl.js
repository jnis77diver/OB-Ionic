(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$state'];

  /* @ngInject */
  function HomeCtrl() {
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
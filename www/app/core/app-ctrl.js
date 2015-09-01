(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope','$http','$cordovaPush', '$cordovaDialogs', '$cordovaMedia'];

  /* @ngInject */
  function AppCtrl($scope, $http, $cordovaPush, $cordovaDialogs, $cordovaMedia) {
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
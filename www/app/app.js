'use strict';

angular.module('OBApp', [
  'ionic',
  'formlyIonic',
  'ngCordova',
  'angular-cache'
])

  .run(function($http, $ionicPlatform, CacheFactory, notificationService) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
      console.log(notificationService);
      //Register Notfications
      notificationService.register();
    });

    // for Angular-Cache caching in Local Storage
    // TODO: set a realistic maxAge based on OB requirements
    $http.defaults.cache = CacheFactory('defaultCache', {
      storageMode: 'localStorage',
      maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
      deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
    });

  })
  .run(function ($rootScope, $state, $ionicHistory, authService) {
  $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
    if ('data' in next && 'authenticationNeeded' in next.data) {
      if (!authService.isAuthenticated()) {
        if (next.name !== 'login') {
          event.preventDefault();
          $state.go('login');
          register();
        }
      }
    }
  });


});
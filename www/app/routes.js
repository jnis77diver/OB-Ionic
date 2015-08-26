'use strict';

angular
  .module('OBApp')


  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl as vm'
      })
      .state('logout', {
        url: 'logout',
        controller: function($state, authService){
          authService.logout();
          $state.go('login');
        }
      })
      .state('menu', {
        abstract: true,
        templateUrl: 'app/layout/menu-layout.html',
        data: {
          authenticationNeeded: true
        }

      })
      .state('menu.tabs', {
        abstract: true,
        views: {
          'tabContent': {
            templateUrl: 'app/core/tabs.html'
          }
        }
      })
      .state('menu.tabs.home', {
        url: '/home',
        views: {
          'home-tab': {
            templateUrl: 'app/home/tab-home.html',
            controller: 'HomeCtrl as vm'
          }
        }
      })
      .state('menu.tabs.search', {
        url: '/search',
        views: {
          'search-tab': {
            templateUrl: 'app/search/tab-search.html',
            controller: 'SearchCtrl as vm'
          }
        }
      })
      .state('menu.tabs.results', {
        url: '/results',
        views: {
          'main': {
            templateUrl: 'app/results/tab-search-results.html',
            controller: 'SearchResultsCtrl as vm'
          }
        }
      })
      .state('menu.tabs.result-detail', {
        url: '/results/:resultId',
        views: {
          'main': {
            templateUrl: 'app/results/tab-search-result-details.html',
            controller: 'SearchResultDetailsCtrl as srd'
          }
        }
      })
    .state('menu.tabs.profile', {
        url: '/profile',
        views: {
          'profile': {
            templateUrl: 'app/account/tab-account.html',
            controller: 'AccountCtrl as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
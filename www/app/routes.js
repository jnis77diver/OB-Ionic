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
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/core/tabs.html',
        data: {
          authenticationNeeded: true
        }
      })
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'app/home/tab-home.html',
            controller: 'HomeCtrl as home'
          }
        }
      })
      .state('tab.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'app/search/tab-search.html',
            controller: 'SearchCtrl as vm'
          }
        }
      })
      .state('tab.results', {
        url: '/results',
        views: {
          'tab-search': {
            templateUrl: 'app/results/tab-search-results.html',
            controller: 'SearchResultsCtrl as vm'
          }
        }
      })
      .state('tab.result-detail', {
        url: '/results/:resultId',
        views: {
          'tab-search': {
            templateUrl: 'app/results/tab-search-result-details.html',
            controller: 'SearchResultDetailsCtrl as srd'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'app/account/tab-account.html',
            controller: 'AccountCtrl as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
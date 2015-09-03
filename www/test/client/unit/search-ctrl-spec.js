describe('Search Controller', function () {
  var controller;
  var view = 'app/account/tab-search.html';


  beforeEach(function () {
    module('OBApp');
  });
  // required to mock out ngCordova
  beforeEach(function () {
    module('ngCordovaMocks');
  });

  beforeEach(function () {
    // using bardjs library to make injecting easier
    bard.inject(function ($controller, $log, $q, $rootScope, $ionicViewService, $window,
                          $state, $httpBackend, $templateCache, $location) {
      controller = $controller('SearchCtrl');

      $httpBackend.whenGET('app/core/tabs.html').respond(200);
      $httpBackend.whenGET('app/layout/menu-layout.html').respond(200);
      $httpBackend.whenGET('app/register/register.html').respond(200);
      $httpBackend.whenGET('app/results/tab-search-result-details.html').respond(200);
      $httpBackend.whenGET('app/login/login.html').respond(200);
      $httpBackend.whenPOST('http://192.168.1.16:8000/subscribe').respond(200);

    });
    $templateCache.put(view, '');
    controller.register = function register(){};
  });

  beforeEach(function(){
  });


  it('should exist', function () {
    expect(true).to.be.true;
  });

  it('should be created successfully', function () {
    expect(controller).to.be.defined;
  });

  xit('should have isCurrent() for to return `/profile`', function () {
    controller.search();
    $rootScope.$apply();
    expect($state.current.name).to.equal('menu.tabs.recent-search');
  });


});



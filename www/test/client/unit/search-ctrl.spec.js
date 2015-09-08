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
                          $state, $httpBackend, $templateCache, $location, API) {
      controller = $controller('SearchCtrl');

      $httpBackend.whenGET('app/core/tabs.html').respond(200);
      $httpBackend.whenGET('app/layout/menu-layout.html').respond(200);
      $httpBackend.whenGET('app/register/register.html').respond(200);
      $httpBackend.whenGET('app/results/tab-search-result-details.html').respond(200);
      $httpBackend.whenGET('app/results/tab-search-results.html').respond(200);
      $httpBackend.whenGET('app/search/recent-search.html').respond(200);

      $httpBackend.whenGET('app/login/login.html').respond(200);
      $httpBackend.whenGET(API + '/search-form').respond(200);

    });
    $templateCache.put(view, '');
    controller.register = function register(){};
  });

  beforeEach(function(){
    //login
    
  });


  it('should exist', function () {
    expect(true).to.be.true;
  });

  it('should be created successfully', function () {
    expect(controller).to.be.defined;
  });

  xit('should have isCurrent() for to return `/profile`', function () {
    $state.go('menu.tabs.recent-search');
    expect($state.current.name).to.equal('menu.tabs.recent-search');
    $rootScope.$apply();
  });

  it('should try to redirect to /recent-searches search is clicked', function () {
    var spy = sinon.spy($state, 'go');
    controller.search();
    //$rootScope.$apply();
    expect(spy).to.have.been.calledOnce.and.calledWith('menu.tabs.recent-search');
  });

});

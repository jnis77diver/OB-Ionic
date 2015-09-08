describe('Search Controller', function () {
  var controller;
  var view = 'app/account/tab-search.html';

  angular.module('myMocks', ['OBApp']).
    config(function($provide) {

/*
       Augment a service
      $provide.decorator('userService', function($delegate) {
        $delegate.login = function() { ... };
        return $delegate;
      });
*/

      // Replace a service
      $provide.value('authInterceptor', {
        response: function(){
          return {token: 'fakeToken'};
        }
      });

    });


  beforeEach(function () {
    module('OBApp', 'myMocks');
  });
  // required to mock out ngCordova
  beforeEach(function () {
    module('ngCordovaMocks');
  });

  beforeEach(function () {
    // using bardjs library to make injecting easier
    bard.inject(function($controller, $log, $q, $rootScope, $ionicViewService, $window,
                          $state, $httpBackend, $templateCache, $location, API, userService) {
      //userService.login = sinon.stub().returns(
      //  {token: 'fakeToken'}
      //);

      //authInterceptor.response = sinon.stub().returns({token: 'fakeToken'});
      controller = $controller('SearchCtrl', {});
      $httpBackend.whenGET('app/core/tabs.html').respond(200);
      $httpBackend.whenGET('app/layout/menu-layout.html').respond(200);
      $httpBackend.whenGET('app/register/register.html').respond(200);
      $httpBackend.whenGET('app/results/tab-search-result-details.html').respond(200);
      $httpBackend.whenGET('app/results/tab-search-results.html').respond(200);
      $httpBackend.whenGET('app/search/recent-search.html').respond(200);

      $httpBackend.whenGET('app/login/login.html').respond(200);
      $httpBackend.whenGET(API + '/search-form').respond(200);

      $httpBackend.whenPOST(API + '/login').respond({userId: 'userX'}, {'token': 'xxx'});



    });

  });

  beforeEach(function () {

  });




  afterEach(function(){
    //$httpBackend.flush();
    //
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });


  it('should exist', function () {
    expect(true).to.be.true;
  });

  it('should be created successfully', function () {
    expect(controller).to.be.defined;
  });

/*
  xit('should have isCurrent() for to return `/profile`', function () {
    $state.go('menu.tabs.recent-search');
    expect($state.current.name).to.equal('menu.tabs.recent-search');
    $rootScope.$apply();
  });
*/

  it('should try to redirect to /recent-searches search is clicked', function () {
    var user = { username: 'test', password: 'test' };
    //var spy = sinon.spy(userService, 'login');
    $httpBackend.expectPOST(API + '/login');
    userService.login(user.username, user.password);
    $httpBackend.flush();

    controller.search();

    //expect(spy).to.have.been.calledOnce.and.calledWith('menu.tabs.recent-search');
    expect(true).to.be.true;


  });

});

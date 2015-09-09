describe('Home Controller', function () {
  var controller;
  var view = 'app/home/tab-home.html';

  beforeEach(function () {
    module('OBApp', 'myMocks');
  });

  // required to mock out ngCordova
  beforeEach(function () {
    module('ngCordovaMocks');
  });

  beforeEach(function () {
    // using bardjs library to make injecting easier
    bard.inject(function ($controller, $log, $q, $rootScope, $ionicViewService, $window,
                          $state, $httpBackend, $templateCache, $location, API, userService,
                          authService, notificationService) {

      controller = $controller('HomeCtrl', {});

      $httpBackend.whenGET('app/layout/menu-layout.html').respond(200);
      $httpBackend.whenGET('app/core/tabs.html').respond(200);
      $httpBackend.whenGET('app/register/register.html').respond(200);
      $httpBackend.whenGET('app/login/login.html').respond(200);


    });

  });


  afterEach(function () {
  });


  it('should be created successfully', function () {
    expect(controller).to.be.defined;
  });

  it('should redirect to menu.tabs.notifications when showNotifications is called', function () {

    var spy = sinon.spy($state, 'go');
    controller.showNotifications();
    $httpBackend.flush();
    expect(spy).to.have.been.calledTwice.and.calledWith('menu.tabs.notifications');
  });

  it('should populate notificationGroups when controller is loaded', function () {
    var stub = sinon.stub(notificationService);
    stub.getNotificationGroups.returns({});
    controller.activate();
    $httpBackend.flush();
    expect(controller.notificationGroups).to.deep.equal({});
  });


});

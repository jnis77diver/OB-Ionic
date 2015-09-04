describe('formService', function () {

  beforeEach(function () {
    bard.appModule('OBApp');
  });
  // required to mock out ngCordova
  beforeEach(function () {
    module('ngCordovaMocks');
  });


  beforeEach(function () {
    bard.inject('$httpBackend', '$q', '$log', '$rootScope', 'formService', 'API');
    $httpBackend.whenGET('app/core/tabs.html').respond(200);
    $httpBackend.whenGET('app/layout/menu-layout.html').respond(200);
    $httpBackend.whenGET('app/register/register.html').respond(200);
    $httpBackend.whenGET('app/login/login.html').respond(200);
    $httpBackend.whenPOST('http://192.168.1.16:8000/subscribe').respond(200);


  });

  it('should exist', function () {
    expect(formService).to.exist;
  });


  it('getSearchForm hits /search-form', function () {
    $httpBackend.when('GET', API + '/search-form').respond(200, [{}]);
    formService.getSearchForm().then(function (data) {
      expect(data).to.deep.equal([{}]);
    });
    $httpBackend.flush();
  });
  

});
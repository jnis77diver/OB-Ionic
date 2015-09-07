describe('formService', function () {

  beforeEach(function () {
    bard.appModule('OBApp');
  });
  // required to mock out ngCordova
  beforeEach(function () {
    module('ngCordovaMocks');
  });


  beforeEach(function () {
    bard.inject('$httpBackend', '$q', '$log', '$rootScope', 'userService', 'API');
    $httpBackend.whenGET('app/core/tabs.html').respond(200);
    $httpBackend.whenGET('app/layout/menu-layout.html').respond(200);
    $httpBackend.whenGET('app/register/register.html').respond(200);
    $httpBackend.whenGET('app/login/login.html').respond(200);
    $httpBackend.whenPOST('http://192.168.1.16:8000/subscribe').respond(200);


  });

  it('should exist', function () {
    expect(userService).to.exist;
  });


  it('login should hit /login which returns a token', function () {
    var user = {
      username: 'joe',
      password: 'blow'
    };
    $httpBackend.when('POST', API + '/login').respond(200, {token: 'thisawesometoken.hey.yello'});
    userService.login(user.username, user.password).then(function (res) {
      console.log('data is ', JSON.stringify(res));
      expect(res.data).to.deep.equal({token: 'thisawesometoken.hey.yello'});
    });
    $httpBackend.flush();
  });

  it('register should hits /register which returns a token', function () {
    var user = {
      username: 'joe',
      password: 'blow'
    };
    $httpBackend.when('POST', API + '/register').respond(200, {token: 'thisawesometoken.hey.yello'});
    userService.register(user.username, user.password).then(function (res) {
      console.log('data is ', JSON.stringify(res));
      expect(res.data).to.deep.equal({token: 'thisawesometoken.hey.yello'});
    });
    $httpBackend.flush();
  });


});

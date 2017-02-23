var expect = require('chai').expect;
var routes = require('../server/routes');
var sinon = require('sinon');

describe('routes', function(){
  describe('#initialize', function() {
    it('adds routes for all 8 pages', function() {
      var app = {use: function() {}};

      var mock = sinon.mock(app);
      
      mock.expects('use').withArgs('/resources', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/auth', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/login', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/logout', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/register', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/accounts', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/upload', sinon.match.func).exactly(1);
      mock.expects('use').withArgs('/', sinon.match.func).exactly(1);

      routes.initialize(app);
      mock.verify();
    });
  });
});
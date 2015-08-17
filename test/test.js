var should = require('should');
var auth = require('../lib/koa-login.js');

describe('koa-auth', function() {

    it('invoke factory', function() {
        auth();
    });

});
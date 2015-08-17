var should = require('should');
var login = require('../lib/koa-login.js');

describe('koa-auth', function() {

    it('invoke factory', function() {
        var options = {
            secret: 'shhh'
        };

        login(options);
    });

});
var loginController = require('./lib/login.controller');

module.exports = options => {
    return loginController(options).post;
};
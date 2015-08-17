var loginController = require('./login.controller');

module.exports = options => {
    return loginController(options).post;
};
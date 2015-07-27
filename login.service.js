var passwordService = require('./password.service');
var tokenService = require('./token.service');

module.exports = init;

function init(options){
    var secret = options.secret;
    var userProvider = options.userProvider;
    var publicDataProvider = options.publicDataProvider;
    var tokenDataProvider = options.tokenDataProvider;

    return login;

    function login(name, password){
        return userProvider.find(name).then(userResult => {
            if(!userResult) return false;

            var hash = userResult.hash;
            var user = userResult.user;

            return passwordService.verify(password, hash).then(isPasswordCorrect => {
                if(!isPasswordCorrect) return false;

                var publicData = publicDataProvider(user);
                var tokenData = tokenDataProvider(user);
                var token = tokenService.create(tokenData, secret);

                return {
                    user: publicData,
                    token: token
                };
            });
        });
    }
}
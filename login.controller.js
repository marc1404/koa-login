var loginService = require('login.service');

module.exports = options => {
    var login = loginService(options);

    return { post };

    function* post(){
        var name = this.request.body.name;
        var password = this.request.body.password;

        if(!verifyParameters(name, password)){
            return this.body = false;
        }

        this.body = yield login(name, password);
    }

    function verifyParameters(name, password){
        return name && name.length > 0 && password && password.length > 0;
    }
};


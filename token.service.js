var jwt = require('jsonwebtoken');

exports.create = create;

function create(payload, secret){
    return jwt.sign(payload, secret);
}
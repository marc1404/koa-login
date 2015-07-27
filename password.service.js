var bcrypt = require('bcrypt');

exports.verify = verify;

function verify(password, hash){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if(err) return reject(err);

            return resolve(result);
        });
    });
}
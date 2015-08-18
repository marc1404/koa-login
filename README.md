# koa-login
[![npm](https://img.shields.io/npm/v/koa-login.svg?style=flat-square)](https://www.npmjs.com/package/koa-login)
[![Travis](https://img.shields.io/travis/marc1404/koa-login.svg?style=flat-square)](https://travis-ci.org/marc1404/koa-login)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/koa-login.svg?style=flat-square)](https://codeclimate.com/github/marc1404/koa-login)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/koa-login.svg?style=flat-square)](https://codeclimate.com/github/marc1404/koa-login/coverage)
[![npm](https://img.shields.io/npm/l/koa-login.svg?style=flat-square)](https://github.com/marc1404/koa-login/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/koa-login.svg?style=flat-square)](https://www.npmjs.com/package/koa-login)

[![David](https://img.shields.io/david/marc1404/koa-login.svg?style=flat-square)](https://github.com/marc1404/koa-login/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/koa-login.svg?style=flat-square)](https://github.com/marc1404/koa-login/blob/master/package.json)
  
## Description
Use in conjunction with [koa-auth-jwt](https://www.npmjs.com/package/koa-auth-jwt).  
This middleware can be used to provide a simple login endpoint in [koa](https://www.npmjs.com/package/koa).  
The [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package is used to create and sign JSON web tokens (JWT).  
Your login form has to send ```name``` and ```password``` in the request body.
  
## Installation
```
$ npm install koa-login
```
  
## Usage
```javascript
var login = require('koa-login');
var options = {
  secret: process.env.SECRET,
  userProvider: name => {
    return // TODO: find user by name e.g. in database
  },
  publicDataProvider: user => {
    return {
      name: user.name
    };
  },
  tokenDataProvider: user => {
    return {
      id: user.id
    };
  }
};

// endpoint expects 'name' and 'password' inside 'this.request.body'
router.post('/api/login', login(options));
```
  
## Options
**All options are mandatory!**
- ```secret``` string which will be used to sign the *jwt*
- ```userProvider``` function which takes a name and should return a user object
- ```publicDataProvider``` function which takes the user object and returns an object containing public, unencrypted data which will be sent back to the logged in user
- ```tokenDataProvider``` function which takes the user object and returns an object containing data which will be encrypted inside the token

## Test
```
$ npm install -g mocha  
$ mocha
```
  
## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/koa-login/blob/master/LICENSE)

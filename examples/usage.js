// npm install koa koa-router koa-login --save

var koa = require('koa');
var router = require('koa-router')();
var login = require('koa-login');
var app = koa();

var options = {
  secret: process.env.SECRET // random secret string used to sign the jsonwebtoken,
  userProvider: userProvider,
  publicDataProvider: publicDataProvider,
  tokenDataProvider: tokenDataProvider
};

router.post('/api/login', login(options));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

function userProvider(name){
  // TODO: find user by name e.g. in the database

  var fakeUser = {
    id: 42,
    name: 'John Doe',
    password: '$2a$12$W/Fc9bXKYrwELXZ0sW3akuolpmCnfILaUrNuoL6PjEzDm/ZtV.Xh2' // bcrypt hash
  };

  return Promise.resolve({
    hash: fakeUser.password,
    user: fakeUser
  });
}

function publicDataProvider(user){
  return {
    name: user.name
  };
}

function tokenDataProvider(user){
  return {
    id: user.id
  };
}

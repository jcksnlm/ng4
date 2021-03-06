"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var auth_1 = require("./services/auth");
var authz_1 = require("./services/authz");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var PORT = 3001;
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);
server.get('/users', authz_1.handleAuthorization, function (req, res, next) {
});
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./keys/cert.pem'),
    key: fs.readFileSync('./keys/key.pem')
};

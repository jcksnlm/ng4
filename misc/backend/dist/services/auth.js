"use strict";
exports.__esModule = true;
var users_1 = require("../models/users");
var jwt = require("jsonwebtoken");
var api_config_1 = require("../config/api-config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({
            sub: dbUser.email,
            iss: 'backend'
        }, api_config_1.apiConfig.secret, { expiresIn: 86400 }); //um dia
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados inválido' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    else {
        var dbUser = users_1.users[user.email];
        return dbUser !== undefined && dbUser.matches(user);
    }
}

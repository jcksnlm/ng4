"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matchesPassword = function (password) {
        return this.password === password;
    };
    return User;
}());
exports.User = User;

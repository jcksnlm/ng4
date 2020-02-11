"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (incomming) {
        return incomming !== undefined && incomming.email === this.email && incomming.password === this.password;
    };
    return User;
}());
exports.User = User;
var users = {
    "user1@gmail.com": new User('user1@gmail.com', 'fulano', '123'),
    "user2@hotmail.com": new User('user2@hotmail.com', 'ciclano', '123')
};
exports.users = users;

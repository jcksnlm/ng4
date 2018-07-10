"use strict";
exports.__esModule = true;
var User = (function () {
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
    "hue@hue.hue": new User('hue@hue.hue', 'hue', 'br'),
    "br@br.br": new User('br@br.br', 'br', 'hue')
};
exports.users = users;

var msg = "huehueheuheu";
console.log(msg);
var num = 4;
console.log("the number is: " + num);
num += 1;
console.log("now the number is: " + num);
var msg2;
msg2 = true;
console.log("msg2 is: " + msg2);
msg2 = "hue";
console.log("now msg2 is: " + msg2);
var isEnoughToBeatMF = function (speed) {
    return speed > 12;
};
var speed = 14;
console.log("Is " + speed + " parsecs enough to beat MF? " + (isEnoughToBeatMF(speed) ? 'Yes' : 'No'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));

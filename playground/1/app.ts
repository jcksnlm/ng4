let msg: string = "huehueheuheu"
console.log(msg)

let num: number = 4
console.log("the number is: " + num)

num += 1
console.log("now the number is: " + num)

let msg2
msg2 = true
console.log("msg2 is: " + msg2)

msg2 = "hue"
console.log("now msg2 is: " + msg2)


let isEnoughToBeatMF = function (speed: number) : boolean {
    return speed > 12
}


let speed = 14
console.log(`Is ${speed} parsecs enough to beat MF? ${isEnoughToBeatMF(speed) ? 'Yes' : 'No'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc(speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc(5, 1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)

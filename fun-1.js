function greet(name, lastName) {
    console.log('Hello ' + name, lastName)
}

function square(number) {
    return number * number;
}

console.log(greet("John ", "Smith"))
console.log(square(4))

console.log("Hello")

var ran = Math.floor(Math.random() * 101);
console.log(ran)

const age = 17
var voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable)

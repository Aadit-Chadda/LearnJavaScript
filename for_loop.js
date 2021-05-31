
for (i=0; i<5; i++){
    console.log("The Value of i now is: ", i)
}

console.log()

var cars = ["Maruti", "Toyota", "Volvo", "Merc"]
for (buy in cars) {
    console.log("The Best Car here is " + cars[buy])
}

console.log()

for (let wheel of cars) {
    console.log(wheel)
}

var add = 0
var x = 0
while (x < 101) {
    x++
    add += x
    console.log(x)
}

console.log("the Total sum of value of x: ", add)

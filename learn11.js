var myArray = [];
var a;
const b = "abc";

for (var i = 1; i < 5; i++) {
    myArray.push(i);
};

a = JSON.stringify(myArray);
console.log(a);
console.log(b + "def");

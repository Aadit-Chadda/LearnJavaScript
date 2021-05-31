var a = 3;
var b = '3';

function doubles(a, b) {
    if (a == b) {
        return true
    } else {
        return false
    };
};

function triples(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    };
};

console.log("==", doubles(a, b))
console.log("===", triples(a, b))

function markZuck(a) {
    if (a < 3) {
        return "bad";
    } else if (3 < a & a < 7) {
        return "okay";
    } else {
        return "good";
    };
};

console.log(markZuck(11));
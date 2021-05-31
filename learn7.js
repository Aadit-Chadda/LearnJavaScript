var age;
function eligable(age) {
    if (age < 18) {
        console.log("Sorry but you cannot vote yet")
    } else {
        console.log("Yes! you are eligable to vote")
    };
};

age = 17;
eligable(age);

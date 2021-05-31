const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'red',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// get the total mass for all charecters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log('Total Mass: ', totalMass);

// get the toatl height for all charecters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log('Total Height: ', totalHeight)

// Eye Color listingand sorting
const eyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
console.log(eyeColor);

// Sort by Mass
const byMass = characters.sort((a, b) => {
    return b.mass - a.mass;
});
console.log(byMass);

// Sort by Height
const byHeight = characters.sort((a, b) => {
    return a.height - b.height;
});
console.log(byHeight);

// Sort by Name (dictionary format)
const byName = characters.sort((a, b) => {
    if (a.name < b.name) return 1;
    return -1;
});
console.log(byName);

//Sort by Gender (females first)
const byGender = characters.sort((a, b) => {
    if (a.gender == "female") return -1;
    return 1;
})
console.log(byGender);

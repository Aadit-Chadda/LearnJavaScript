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

// filter mass above 100
const largeMass = characters.filter((character) => {
    return character.mass > 100;
});
console.log(largeMass);

// filter for blue eyes
const blueEye = characters.filter((eye) => eye.eye_color === 'blue');
console.log(blueEye);
console.log(blueEye.length)

// filter for female characters
const female = characters.filter((char) => char.gender === 'female');
console.log(female)

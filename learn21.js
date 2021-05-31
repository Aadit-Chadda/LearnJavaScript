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

// At least 1 male charecter
const maleChar = characters.some((ppl) => ppl.gender === "male");
console.log(maleChar);

// At least 1 blue eye
const eyeBlues = characters.some((eyes) => eyes.eye_color === 'blue')
console.log(eyeBlues)

// At least 250 taller height
const tall = characters.some((tallMan) => tallMan.height > 250);
console.log(tall);

// At least mass less than 50
const smallMass = characters.some((smallMan) => smallMan.mass < 50);
console.log(smallMass);

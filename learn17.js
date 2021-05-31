const fs = require('fs');

const { exception } = require('node:console');
    fs.promises.readFile('./TEXTER', { encoding: 'utf-8' })
        .then((data) => console.log(data))
        .catch((err) => console.error(err))

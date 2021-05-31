const fs = require('fs')

fs.readFile('./TEXTER2', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error('ERROR');
        console.error(err);
    } else {
        console.log(data);
    }
});

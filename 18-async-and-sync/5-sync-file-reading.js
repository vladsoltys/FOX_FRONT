/** ### SYNC FILE READING ### */

const fs = require('fs');

console.log(fs.readFileSync('some_data.csv'));

console.log("This line executes when 'readFileSync' is done");
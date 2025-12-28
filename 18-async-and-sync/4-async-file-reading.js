/** ### ASYNC FILE READING ### */

const fs = require('fs');

fs.readFile('some_data.csv', (err, data) => {
    console.log('1 file read');
});

fs.readFile('some_data.csv', (err, data) => {
    console.log('2 file read');
});

fs.readFile('some_data.csv', (err, data) => {
    console.log('3 file read');
});

fs.readFile('some_data.csv', (err, data) => {
    console.log('4 file read');
});
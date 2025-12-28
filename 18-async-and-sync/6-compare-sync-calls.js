/** ### COMPARE SYNC AND ASYNC FILE READING ### */

const fs = require('fs');

/** Sync reading */
console.time('tS');

for(let i = 0; i < 15; i++){
    fs.readFileSync('some_data.csv');
}

// time of sync reading
console.timeEnd('tS');


/** Async reading */
console.time('tA');
let count = 0;
for(let i = 0; i < 15; i++){
    fs.readFile('some_data.csv', (err, data) => {
        count++;
        if( count >= 15 ){
            // time of async reading
            console.timeEnd('tA');
        }
    });
}
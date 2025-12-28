/** ### ASYNCHRONOUSLY ### */

console.time('t');

setTimeout(() => {
    console.log('You can see this in 1 sec');
}, 1000);

console.timeEnd('t');
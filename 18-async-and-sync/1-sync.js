/** ### SYNCHRONOUSLY ### */

function delay2Sec(){
    const endTime = Date.now()+2000;
    while(Date.now() < endTime){}
}

console.time('t');
delay2Sec();
console.timeEnd('t');
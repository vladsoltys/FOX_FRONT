/* Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from 1 to 10. 
Display the elements of the array in one row in the console. */

let arr = [];

for (let i = 1; i <= 20; i++) {
    arr.push(Math.floor((Math.random() * 10) + 1))
}

// console.log(arr.join(', '));

/* Create a univariate array of int type, with the length of 15. 
Fill the elements with random numbers from 10 to 20. 
Count and display the sum of array elements in the console. */

function arrCreate () {
    let arr = [];

    for (let i = 1; i <= 15; i++) {
        arr.push(Math.floor((Math.random() * 11) + 10))
    }

    return arr
}

const arr_2 = arrCreate();

let sum = 0;

for (let i = 0; i < arr_2.length; i++) {
    sum += arr_2[i]
}

console.log(arr_2)
console.log(sum);


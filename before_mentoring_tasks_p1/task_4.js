/* Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from 1 to 10. 
Display the elements of the array in one row in the console. */

function arrCreate (min, max, len) {
    let arr = [];

    for (let i = 1; i <= len; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return arr
}

// console.log(arrCreate(1, 10, 20).join(', '));

/* Create a univariate array of int type, with the length of 15. 
Fill the elements with random numbers from 10 to 20. 
Count and display the sum of array elements in the console. */

let arr = arrCreate(10, 20, 15);

function sum(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

// console.log(arr)
// console.log(sum(arr));

/* Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from -50 to 50. 
Count and display the sum of all the positive array elements in the console. */

arr = arrCreate(-50, 50, 20)

function sumPositive (arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }

    return sum
}

// console.log(arr)
// console.log(sumPositive(arr));

/* Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from 0 to 100. 
Find the element (index) that has the highest value in the array and display it in the console. */

arr = arrCreate(0, 100, 20);

function maxInArray(arr){
  let maxIndx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndx]) {
      maxIndx = i;
    }
  }
  return `${maxIndx} - ${arr[maxIndx]}`
};

// console.log(arr)
// console.log(maxInArray(arr));

/* The height of 20 people is known. Find out the mean value of a height:

Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from 150 to 195. 
Count and display the arithmetic mean of array elements in the console (mean value of a height). */

arr = arrCreate(150, 195, 20);

function arrMean(arr){
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
    } 

    return sum / arr.length
};


// console.log(arr)
// console.log(arrMean(arr));

/* Ask a user to type a raw of English text, count how many times there are a, u, i letters. */

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

<<<<<<< HEAD
// readline.question('Type a raw of English text: ', (txt) => {
//     function letterCount(txt) {
//         let count = 0;
=======
readline.question('Type a raw: ', (txt) => {
    function letterCount(txt) {
        let count = 0;
>>>>>>> c481f3ac95bac99cf90d6575937a8c23580d2e97

//         for(let i = 0; i < txt.length; i++) {
//             if(/[aui]/.test(txt[i])) {
//                 count ++
//             }
//         }
//         return count;
//     }

//     console.log(letterCount(txt))
//     readline.close();
// });

/* An array of integers is given. Write a code that will turn every negative element of the array into positive ones.


Display the result in the console.

For example, there are:

[10, -20, 30, -40, 50]


The result: 

[10, 20, 30, 40, 50]


PS. Data should be saved in the same array */

arr = [10, -20, 30, -40, 50]

function inPositiveConvert(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] *= -1
        }
    }

    return arr
}

inPositiveConvert(arr)
console.log(arr)

/* Create a univariate array of int type, with the length of N. 
Fill the elements with random numbers from 1 to 100. 
Swap the minimum and maximum array elements.
For example there are:
[20, 10, 30, 50, 40, 45]

The result: 

[20, 50, 30, 10, 40, 45] */








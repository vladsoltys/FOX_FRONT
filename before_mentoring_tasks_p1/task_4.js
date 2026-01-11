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

// function arrCreate () {
//     let arr = [];

//     for (let i = 1; i <= 15; i++) {
//         arr.push(Math.floor((Math.random() * 11) + 10))
//     }

//     return arr
// }

// const arr_2 = arrCreate();

// let sum = 0;

// for (let i = 0; i < arr_2.length; i++) {
//     sum += arr_2[i]
// }

// console.log(arr_2)
// console.log(sum);

/* Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from -50 to 50. 
Count and display the sum of all the positive array elements in the console. */

// function arrCreate () {
//     let arr = [];
//     const min = -50;
//     const max = 50;

//     for (let i = 1; i <= 20; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1) + min))
//     }

//     return arr
// }

// const arr_2 = arrCreate()

// let sum = 0;

// for (let i = 0; i < arr_2.length; i++) {
//     if(arr_2[i] > 0) {
//         sum += arr_2[i]
//     }
// }

// console.log(arr_2)
// console.log(sum);

/* Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from 0 to 100. 
Find the element (index) that has the highest value in the array and display it in the console. */

// function arrCreate () {
//     let arr = [];
//     const min = 0;
//     const max = 100;

//     for (let i = 1; i <= 20; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1) + min))
//     }

//     return arr
// }

// const arr_2 = arrCreate()

// function maxInArray(arr){
//   let maxIndx = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndx]) {
//       maxIndx = i;
//     }
//   }
//   return `${maxIndx} - ${arr[maxIndx]}`
// };

// console.log(arr_2)
// console.log(maxInArray(arr_2));

/* The height of 20 people is known. Find out the mean value of a height:

Create a univariate array of int type, with the length of 20. 
Fill the elements with random numbers from 150 to 195. 
Count and display the arithmetic mean of array elements in the console (mean value of a height). */

function arrCreate () {
    let arr = [];
    const min = 150;
    const max = 195;

    for (let i = 1; i <= 20; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return arr
}

const arr_2 = arrCreate()

function arrMean(arr){
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
    } 

    return sum / arr.length
};


console.log(arr_2)
console.log(arrMean(arr_2));

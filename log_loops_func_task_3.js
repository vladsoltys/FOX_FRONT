/* Створити функцію, яка має два параметри:
 - масив
 - функція за якою цей масив фільтруватиметься.
Результатом функції має бути кількість елементів у масиві, 
які відповідають критеріям у функції, що передається аргументом. */


const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];


// The deer's solution


// function dividedBySevenCount(numbers) {
//     let count = 0;

//     for(let i=0; i<numbers.length; i++) {
   
//         if(numbers[i] % 7 === 0) {
//             count++
//         }
   
//     }
//     return count
// }

// function showDividedBySeven(arr, dividedBySevenCount) {
//     let result = dividedBySevenCount(arr)
//     return result
// }

// console.log(showDividedBySeven(numbers, dividedBySevenCount))



// Required solution

function dividedBySevenCount(num) {
    return num % 7 === 0;
}

function countByCondition(arr, callback) {
        let count = 0;

        for(let i=0; i<arr.length; i++) {
            if(callback(arr[i])) {
                count++
            }   
        }
        return count
}

console.log(countByCondition(numbers, dividedBySevenCount))
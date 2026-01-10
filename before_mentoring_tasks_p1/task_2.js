/* Compute the value of y based on the given x:

    If x>0, then y=x×2

    Otherwise, y=x÷2 */

const x = 9;
let y;

if (x > 0) y = x * 2
else y = x / 2 

// console.log(y)

/* Define max and min values of three different real numbers. */
const num_a = 73;
const num_b = 78;
const num_c = 12;

let max;

if (num_a > num_b && num_a > num_c){
    max = num_a;
} else if (num_b > num_a && num_b > num_c) {
    max = num_b;
} else {
    max = num_c; 
}

let min;

if (num_a < num_b && num_a < num_c){
    min = num_a;
} else if (num_b < num_a && num_b < num_c) {
    min = num_b;
} else {
    min = num_c; 
}

// console.log(max, min)

/* Calculate the value of a logical expression according to the following values of logical amounts 
   A, B, and C: A = True, B = False, C = False:

    a) A and B, but not C;
    b) not A and not B
    c) not (A and C) or B;
    d) A and (not (B and C)). */

const A = true;
const B = false;
const C = false;

const a = A && B && !C
const b = !A && !B
const c = !(A && C) || B
const d = A && !(B && C)

// console.log(a, b, c, d)

/* Record the condition that is true when:

     a) each of the A and B numbers is more than 100;

     b) at least one of A and B numbers is positive;

     c) each of the A, B,C numbers is multiple of three;

     d) at least one of the A, B, C numbers is negative. */

const num_A = 600;
const num_B = 300;
const num_C = -30;

const cond_a = num_A > 100 && num_B > 100
const cond_b = num_A > 0 || num_B > 0
const cond_c = num_A % 3 === 0 && num_B % 3 === 0 && num_C % 3 === 0
const cond_d = num_A < 0 || num_B < 0 || num_C < 0


console.log(cond_a, cond_b, cond_c, cond_d)

/*  Determine which of the two given dates in a year comes earlier.

    Each date is specified by a month and a day.

        Example:

        const day1 = 14, month1 = 3;

        const day2 = 23, month2 = 1; */


const day1 = 14, month1 = 3;
const day2 = 23, month2 = 1;

const date_1 = `${day1}/${month1}`
const date_2 = `${day2}/${month2}`

if (month1 > month2) {
    // console.log(date_2);
} else if (month1 === month2 && day1 > day2) {
    // console.log(date_2);
} else {
    // console.log(date_1);
}

/* Given the day number n in January (where 1≤n≤31), determine the corresponding day of the week. 
   Assume that January 1st falls on a Monday.

    Example:

    If n=4, the output should be "Thursday". */

const n_jan = 4;

let dayNamesENG = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(dayNamesENG[(n_jan-1) % 7])

/* The two distances are known: one of them is in kilometers, and the other is in feets (1ft = 0,305m). 
Which of the distances is shorter? For instance, 10km and 6500 ft. */

const dist_km = 10;
const dist_ft = 6500;

const ft_in_km = dist_ft * 0.305 / 1000

let dist_result

if(dist_km > ft_in_km) dist_result = `${dist_ft} ft is shorter than ${dist_km} km `
else dist_result = `${dist_km} km is shorter than ${dist_ft} ft `

// console.log(dist_result)

/* If the integer m is divided by the integer n evenly, display the result of the division, 
otherwise display the message: “m isn’t divided by n evenly”. */

const m = 21;
const n = 4;

let div_result

if(m % n === 0) div_result = m / n
else div_result = 'm isn\'t divided by n evenly'

// console.log(div_result)

/* Determine whether a rectangular postcard with dimensions c mm × d mm can fit inside an envelope 
with internal dimensions a mm × b mm. 
A clearance of 1 mm is required on each side for the postcard to fit.*/

const width_postcard = 196;
const height_postcard = 197;

const width_envelope = 199;
const height_envelope = 198;

let fit_result

const fits = width_envelope - width_postcard >= 2 && height_envelope - height_postcard >= 2;
const fits_if_rotated = width_envelope - height_postcard >= 2 && height_envelope - width_postcard >= 2;

if (fits || fits_if_rotated) {
    fit_result = 'The postcard can fit inside the envelope'
} else {
    fit_result = 'The postcard can not fit inside the envelope'
}

// console.log(fit_result)

/* Define whether the given six-digit number is lucky. 
  (A six-digit number is said to be lucky if the sum of its first three digits 
  is equal to the sum of its last three digits.)

   Do this without converting the number to a string

    Example:
    1)
    int x = 123321;
    result: x is lucky

    2)
    int x = 148800;
    result: x is not lucky  */

const x_num = 123321;

let x_result

const firstNumber = Math.floor(x_num / 100000);
const secondNumber = Math.floor(x_num / 10000) % 10;
const thirdNumber = Math.floor(x_num / 1000) % 10;

const fourthNumber = Math.floor(x_num / 100) % 10;
const fifthNumber = Math.floor(x_num / 10) % 10;
const sixthNumber = x_num % 10; 

const sumOfFirst = firstNumber + secondNumber + thirdNumber
const sumOfSecond = fourthNumber + fifthNumber + sixthNumber

if(sumOfFirst === sumOfSecond) x_result = 'x is lucky'
else x_result = 'x is not lucky'

console.log(x_result)

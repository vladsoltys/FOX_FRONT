const a1 = 14;
const a2 = 23;
const a3 = 65;

// console.log(a1, a2, a3)

/* The side of the square is given. Find its perimeter. */

let a = 4;

let perimeter = a * 4;
// console.log(perimeter)

/* There is the radius of the circle. 
Find the length of the circle and the area of the circle. */

let r = 7;
let pi = 3.14;

let length = 2 * pi * r
let area = pi * r * r
// console.log(`length: ${length}, area: ${area}`)

/* Given the lengths of the legs of a right triangle, 
find the length of its hypotenuse. */

let a_leg = 4;
let b_leg = 6;

let hypotenuse = Math.sqrt(a_leg ** 2 + b_leg ** 2);

// console.log(hypotenuse)

/* The price per kilogram of sweets, biscuits, and apples is known. 
Calculate the total cost of the purchase if x kg of sweets, y kg of biscuits, 
and z kg of apples were bought. */

let price_sweets = 40;
let price_biscuits = 30;
let price_apples = 10;

function totalPrice(x, y, z) {
    let total_price = x * price_sweets + y * price_biscuits + z * price_apples
    return total_price
}

// console.log(totalPrice(4, 5, 9))

/* The temperature in degrees Celsius is given. Determine its equivalent values in:

a) Fahrenheit; To recalculate on the Fahrenheit scale, 
   it’s necessary to multiply the initial temperature value by 1.8 and add 32 
   to the result you get
b) Kelvin. On the Kelvin scale the absolute zero corresponds to -273.15 degrees Celsius */

let temp_C = 90;

let temp_F = temp_C * 1.8 + 32
let temp_K = temp_C + 273.15

// console.log(temp_F, temp_K);

/* A three-digit number is given. Find:
a) its last digit (the number of units);
b) the second digit from the right (the number of tens);
c) the sum of all its digits.

Solve this without converting the number to a string.

Example:
Input: 375
a) 5
b) 7
c) 3 + 7 + 5 = 15 */

let num = 375;

let num_units = num % 10
let num_tens = (num % 100 - num_units) / 10
let digit_sum = ((num - (num % 100)) / 100) + num_tens + num_units
// console.log(num_units, num_tens, digit_sum)

/* The date of birth of a person given. Figure their age out in minutes currently. */

const now = new Date();
const date_of_birth = new Date(1995, 11, 17, 3, 24);
const date_diff_min = parseInt((now.getTime() - date_of_birth.getTime()) / 60000)

// console.log(date_diff_min)

/* Display the amount of seconds left to the end of the day */

const allSecondsNow = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
const secondsLeft = 86400 - allSecondsNow; 

// console.log(secondsLeft);

/* Display the actual day of the week in word ( in Ukrainian/in Russian/ in your native language) */

const now_day = now.getDay()
const dayNames = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

// console.log(dayNames[now_day])

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

const x = 123321;

let x_result

const first_three_digits = Math.floor(x / 1000)
const second_three_digits = x % 1000

const first_digit = Math.floor(first_three_digits / 100)
const second_digit = Math.floor((first_three_digits % 100) / 10)
const third_digit = first_three_digits % 10 
const fourth_digit = Math.floor(second_three_digits / 100)
const fifth_digit = Math.floor((second_three_digits % 100) / 10)
const sixth_digit = second_three_digits % 10 

const sum_of_first = first_digit + second_digit + third_digit
const sum_of_second = fourth_digit + fifth_digit + sixth_digit

if(sum_of_first === sum_of_second) x_result = 'x is lucky'
else x_result = 'x is not lucky'

console.log(x_result)
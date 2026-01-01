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


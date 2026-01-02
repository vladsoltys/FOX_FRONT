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

const max = Math.max(num_a, num_b, num_c)
const min = Math.min(num_a, num_b, num_c)

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

console.log(a, b, c, d)
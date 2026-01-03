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


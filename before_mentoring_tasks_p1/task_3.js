/* Type in a "column": all the integers from 20 to 35. */

for (let i = 20 ; i <= 35; i++) {
    // console.log(i)
}

/* Type in a "column": all the integers from 90 to 55. */

for (let i = 90 ; i >= 55; i--) {
    // console.log(i)
}

/* One item of a product costs $5,99. Create a price list for 2, 3, …, 20 items of the product.

    1 - $5.99
    2 - $11.98
    ......
    20 - $119.8 */

const priceProduct = 5.99;

for (let i = 1; i <= 20; i++) {
    let totalPrice = Number((i * priceProduct).toFixed(2));
    let price_result = `${i} - $${totalPrice}`
    // console.log(price_result)
}

/* Create the multiplication table for 7:

    1 х 7 = 7

    2 х 7 = 14

    ...

    9 х 7 = 63 */

let seven = 7;

for(let i = 1; i <= 9; i++) {
    let multResult = i * seven
    // console.log(`${i} x ${seven} = ${multResult}`)
}

/* Find the sum of all the integers from 100 to 500. */

let sum = 0

for (let i = 100; i <= 500; i++) {
    sum += i
}

console.log(sum)
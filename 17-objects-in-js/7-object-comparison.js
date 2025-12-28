/** ### COMPARISON ### */

console.log(1 === 1);
console.log('string' === 'string');
console.log(null === null);
console.log(true === true);
console.log();
console.log([1,2,3] === [1,2,3]); // Not equal
console.log({key: 'value'} === {key: 'value'}); // Not equal

/** Object comparison */
const objA = {key: 'value'};
const objB = {key: 'value'};
const objC = objA;

console.log(objA === objB);
console.log(objA === objC);

objC.key = 'valueNew'
console.log(objA);
console.log(objB);
console.log(objC);

/** Array comparison */
const arrA = [1,2,3];
const arrB = [1,2,3];
const arrC = arrA;

console.log(arrA === arrB);
console.log(arrA === arrC);

arrC[2] = 6;
console.log(arrA);
console.log(arrB);
console.log(arrC);
/** ### FUNCTION IS AN OBJECT ### */

function function1(){console.log("this is function1")};
const function2 = Function('console.log("this is function2")');

function1();
function2();

console.log(function1.name);
console.log(function2.name);
console.log(function1.toString());
console.log(function2.toString());
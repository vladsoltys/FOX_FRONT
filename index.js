// console.log('hello world');

// let name = 'Vlad';
// console.log("Hello, my name is", name);

// let num1 = 10;
// let num2 = 5;

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)

const object = {
    name: 'Maxik',
    age: 2,
    properties: {
        color: "Grey",
        colorEyes: "Green",
        "isMale?": true
    }
}

object.properties["withBalls?"] = true
delete object.properties.color
// console.log(object)

let arr = [];
// console.log(arr)

arr.push(1,2,3,4,5,6)
arr.splice(0,1)
console.log(arr)
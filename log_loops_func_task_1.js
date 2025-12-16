
/* Створити функцію, яка вважатиме факторіал числа, яке в неї передадуть. 
У разі неправильного аргументу чи його відсутності викидати помилку. 
Зробити кілька підрахунків. Результат вивести у консоль. */

function factorial(num) {

    if(typeof num !== "number") {
        throw new Error("Invalid type of num")
    }

    if(num < 0 || !Number.isInteger(num)) {
        throw new Error("Invalid value of num")
    }

    let result = 1

    for(let i=1; i<=num; i++) {
        result = result * i
    }   

    return result
}

console.log(factorial())

let factorialCheck
try {
    factorialCheck = factorial(0.8)
    console.log(factorialCheck)
}
catch (error){
    console.log(error)
}




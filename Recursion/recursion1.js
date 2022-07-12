// 1. Write a JavaScript program to calculate the factorial of a number.

function factorial(num) {
    if (num === 1) return 1

    return num * factorial(num - 1)
}

console.log(factorial(5))
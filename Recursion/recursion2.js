// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

var divisor = function (num1, num2) {
    if (!num2) {
        return num1;
    }

    return divisor(num2, num1 % num2);
};
console.log(divisor(2154, 458));
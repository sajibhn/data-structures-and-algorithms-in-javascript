// 3. Write a JavaScript program to get the integers in range (x, y).

function Integers(num1, num2) {
    if (num2 - num1 === 2) {
        return [num1 + 1]
    }
    else {
        let list = Integers(num1, num2 - 1)
        list.push(num2 - 1);
        return list
    }
}

console.log(Integers(2, 9))
// Write a function called same, which accepts two arrays. The function should return true if every value
//  in the array has it's corresponding value squared in the second array. The frequency of values must be ths same

// using nested loop

function same(a, b) {
    if (a.length !== b.length) {
        return false
    }

    for (let i = 0; i < a.length; i++) {
        let currentIndex = b.indexOf(a[i] ** 2)
        if (currentIndex === -1) {
            return false
        }

        b.splice(currentIndex, 1)
    }
    return true
}

console.log(same([1, 2, 3], [9, 4, 1]))


// using Frequency Counter Pattern

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(same([1, 3, 4], [9, 16, 1]))




// practicing for...in and for...of loops
function In(a) {
    for (let value in a) {
        console.log(value)
    }
    return a
}

console.log(In({
    1: 1,
    2: 4,
    5: 25
}))

function Of(a) {
    for (let value of a) {
        console.log(value)
    }
    return a
}

console.log(Of([2, 5, 7]))
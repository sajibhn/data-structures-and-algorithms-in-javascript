// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is . Return an array
//  that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
    if (arr.length === 0) return 0
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4, 10]))


/// count unique values

// Implement a function called countUniqueValues, which accepts a sorted Array, and counts
// the unique values in the Array. There can be negative numbers in the Array, but it
// will always be sorted. 

function countUniqueValues(arr) {

    if (arr.length === 0) return 0

    let i = 0;

    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        console.log(i, j)
    }
}

console.log(countUniqueValues([1, 1, 2, 2, 3, 3, 4, 5, 5, 7]))
let instructor = {
    firstName: "kelly",
    isInstructor: true,
    favoriteNumber: [1, 2, 3, 4]
}

// we can get all the keys || O(n)
console.log(Object.keys(instructor))

// we can get all the values || O(n)
console.log(Object.values(instructor))

// we can get both key and value || O(n)
console.log(Object.entries(instructor))

// checks if a object has firstName || O(1)
console.log(instructor.hasOwnProperty("firstName"))

console.log(instructor["firstName"])

